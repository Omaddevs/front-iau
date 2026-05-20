import express from "express";
import cors from "cors";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.resolve(__dirname, "../data/ecoactive-posts.json");

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json({ limit: "2mb" }));

async function readPosts() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function writePosts(posts) {
  const sorted = [...posts].sort((a, b) => String(b.eventDate).localeCompare(String(a.eventDate)));
  await fs.writeFile(DATA_FILE, JSON.stringify(sorted, null, 2), "utf8");
  return sorted;
}

function validatePayload(payload) {
  const title = String(payload.title || "").trim();
  const summary = String(payload.summary || "").trim();
  const content = String(payload.content || "").trim();
  const eventDate = String(payload.eventDate || "").trim();
  const category = String(payload.category || "Ekologik tadbir").trim();
  const location = String(payload.location || "").trim();
  const sourceUrl = String(payload.sourceUrl || "").trim();
  const createdBy = String(payload.createdBy || "").trim();
  const images = Array.isArray(payload.images)
    ? payload.images.map((item) => String(item || "").trim()).filter(Boolean).slice(0, 8)
    : [];
  const isPublished = payload.isPublished !== false;

  if (title.length < 5) {
    return { error: "Title must be at least 5 characters long." };
  }
  if (summary.length < 10) {
    return { error: "Summary must be at least 10 characters long." };
  }
  if (content.length < 20) {
    return { error: "Content must be at least 20 characters long." };
  }
  if (!eventDate) {
    return { error: "eventDate is required in YYYY-MM-DD format." };
  }

  return {
    data: {
      title,
      summary,
      content,
      eventDate,
      category,
      location,
      sourceUrl,
      createdBy,
      images,
      isPublished,
    },
  };
}

function toEkofaolNews(post) {
  return {
    id: post.id,
    title: post.title,
    text: post.summary || "",
    body: post.content || "",
    date: post.eventDate || "",
    views: Number(post.views || 0),
    img: Array.isArray(post.images) && post.images.length > 0 ? post.images[0] : null,
    gallery_images: Array.isArray(post.images)
      ? post.images.map((image) => ({ image, caption: "" }))
      : [],
    categories: post.category ? [{ name: post.category }] : [],
    is_published: post.isPublished !== false,
  };
}

app.get("/health", (_, res) => {
  res.json({ status: "ok", service: "iau-ecoactive-api" });
});

app.get("/api/ecoactive/posts", async (req, res) => {
  try {
    const posts = await readPosts();
    const publishedOnly = req.query.published !== "false";
    const result = publishedOnly ? posts.filter((p) => p.isPublished !== false) : posts;
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Could not read ecoactive posts." });
  }
});

// Frontend expects Django-like endpoint naming:
// GET /api/ekofaol-news/
app.get("/api/ekofaol-news/", async (req, res) => {
  try {
    const posts = await readPosts();
    const publishedOnly = req.query.published !== "false";
    const search = String(req.query.search || "").toLowerCase().trim();
    const page = Math.max(1, Number(req.query.page || 1));
    const pageSize = Math.max(1, Number(req.query.page_size || 8));

    let result = publishedOnly ? posts.filter((p) => p.isPublished !== false) : posts;
    if (search) {
      result = result.filter(
        (p) =>
          String(p.title || "").toLowerCase().includes(search) ||
          String(p.summary || "").toLowerCase().includes(search) ||
          String(p.content || "").toLowerCase().includes(search)
      );
    }

    const count = result.length;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paged = result.slice(start, end).map(toEkofaolNews);

    res.json({ count, results: paged });
  } catch {
    res.status(500).json({ error: "Could not read ekofaol news list." });
  }
});

// Detail endpoint increments view count every open/refresh
// GET /api/ekofaol-news/:id/
app.get("/api/ekofaol-news/:id/", async (req, res) => {
  const { id } = req.params;
  try {
    const posts = await readPosts();
    const idx = posts.findIndex((post) => String(post.id) === String(id));
    if (idx < 0) return res.status(404).json({ error: "Ekofaol news not found." });
    if (posts[idx].isPublished === false) return res.status(404).json({ error: "Ekofaol news not found." });

    const currentViews = Number(posts[idx].views || 0);
    posts[idx].views = currentViews + 1;
    posts[idx].updatedAt = new Date().toISOString();
    await writePosts(posts);

    res.json(toEkofaolNews(posts[idx]));
  } catch {
    res.status(500).json({ error: "Could not read ekofaol news detail." });
  }
});

app.post("/api/ecoactive/posts", async (req, res) => {
  const { error, data } = validatePayload(req.body || {});
  if (error) return res.status(400).json({ error });

  try {
    const posts = await readPosts();
    const now = new Date().toISOString();
    const newPost = {
      id: `eco-${Date.now()}`,
      ...data,
      views: 0,
      createdAt: now,
      updatedAt: now,
    };
    const updated = await writePosts([newPost, ...posts]);
    res.status(201).json(newPost);
  } catch {
    res.status(500).json({ error: "Could not create ecoactive post." });
  }
});

app.patch("/api/ecoactive/posts/:id", async (req, res) => {
  const { id } = req.params;
  const { error, data } = validatePayload(req.body || {});
  if (error) return res.status(400).json({ error });

  try {
    const posts = await readPosts();
    const idx = posts.findIndex((post) => post.id === id);
    if (idx < 0) return res.status(404).json({ error: "Post not found." });

    const updatedPost = {
      ...posts[idx],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    posts[idx] = updatedPost;
    await writePosts(posts);
    res.json(updatedPost);
  } catch {
    res.status(500).json({ error: "Could not update ecoactive post." });
  }
});

app.delete("/api/ecoactive/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const posts = await readPosts();
    const filtered = posts.filter((post) => post.id !== id);
    if (filtered.length === posts.length) return res.status(404).json({ error: "Post not found." });
    await writePosts(filtered);
    res.status(204).end();
  } catch {
    res.status(500).json({ error: "Could not delete ecoactive post." });
  }
});

app.listen(PORT, () => {
  console.log(`Ecoactive API running on http://localhost:${PORT}`);
});
