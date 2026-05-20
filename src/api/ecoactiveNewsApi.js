import localPlaceholder from "../images/sectionImage.jpg";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
const SECONDARY_BASE_URL = "http://localhost:4001/api";
const PLACEHOLDER_IMG = localPlaceholder;

function resolveMediaUrl(url) {
  if (!url) return null;
  try {
    if (url.startsWith("http://") || url.startsWith("https://")) {
      const parsed = new URL(url);
      return parsed.pathname + parsed.search;
    }
  } catch {
    // keep original
  }
  return url.startsWith("/") ? url : `/${url}`;
}

function normalizeItem(item) {
  const cover = resolveMediaUrl(item.img) || PLACEHOLDER_IMG;
  const gallery_images = (item.gallery_images || [])
    .map((g) => {
      const raw = typeof g === "string" ? g : g?.image;
      const image = resolveMediaUrl(raw);
      if (!image) return null;
      return {
        ...(typeof g === "object" && g !== null ? g : {}),
        image,
        caption: (typeof g === "object" && g?.caption) || "",
      };
    })
    .filter(Boolean);

  return {
    ...item,
    views: Number(item?.views ?? 0),
    img: cover,
    gallery_images,
  };
}

const FALLBACK_LIST = [
  {
    id: "demo-1",
    title: "Tree planting drive: students plant 250 trees",
    text: "A large greening campaign was held on campus as part of the Green Space initiative.",
    body: "Students, faculty, and volunteers joined a community clean-up and planting day. During the event, 250 ornamental and fruit trees were planted.\n\nAn open discussion on environmental awareness was held at the end of the day.",
    date: "2026-05-20",
    views: 0,
    img: PLACEHOLDER_IMG,
    categories: [{ name: "Green Space" }],
    gallery_images: [],
  },
];

export async function fetchEkofaolNewsList(params = {}) {
  const query = new URLSearchParams();
  if (params.page) query.set("page", params.page);
  if (params.page_size) query.set("page_size", params.page_size);
  if (params.categories) query.set("categories", params.categories);
  if (params.search) query.set("search", params.search);
  const qs = query.toString();

  const urls = [
    `${BASE_URL}/ekofaol-news/${qs ? `?${qs}` : ""}`,
    `${SECONDARY_BASE_URL}/ekofaol-news/${qs ? `?${qs}` : ""}`,
  ];

  for (const url of urls) {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) continue;
      const data = await res.json();
      return {
        ...data,
        results: (data.results || []).map(normalizeItem),
      };
    } catch {
      // try next backend
    }
  }

  return { count: FALLBACK_LIST.length, results: FALLBACK_LIST.map(normalizeItem) };
}

export async function fetchEkofaolNewsDetail(id) {
  const urls = [
    `${BASE_URL}/ekofaol-news/${id}/`,
    `${SECONDARY_BASE_URL}/ekofaol-news/${id}/`,
  ];

  for (const url of urls) {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) continue;
      const data = await res.json();
      return normalizeItem(data);
    } catch {
      // try next backend
    }
  }

  const found = FALLBACK_LIST.find((x) => String(x.id) === String(id));
  if (found) return normalizeItem({ ...found, views: Number(found.views || 0) + 1 });
  throw new Error("Article not found");
}
