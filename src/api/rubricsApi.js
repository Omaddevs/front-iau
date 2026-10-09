// "Bir ixtiro tarixi" / "Ilm bilan erishilgan yutuq" rukn maqolalari
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

/** Backend media URL → relative path (served through the Vite / nginx proxy). */
function proxyMediaUrl(url) {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    return parsed.pathname + parsed.search;
  } catch {
    return url;
  }
}

function normalizePost(item) {
  return {
    ...item,
    img: proxyMediaUrl(item.img),
    gallery_images: (item.gallery_images || []).map((g) => ({
      ...g,
      image: proxyMediaUrl(g.image),
    })),
  };
}

/**
 * Paginated rukn maqolalari ro'yxati.
 * @param {string} rubric  "bir-ixtiro-tarixi" | "ilm-bilan-erishilgan-yutuq"
 * @param {{ page?, page_size?, search?, exclude? }} params
 */
export async function fetchRubricPosts(rubric, params = {}) {
  const query = new URLSearchParams();
  if (params.page) query.set("page", params.page);
  if (params.page_size) query.set("page_size", params.page_size);
  if (params.search) query.set("search", params.search);
  if (params.exclude) query.set("exclude", params.exclude);

  const qs = query.toString();
  const res = await fetch(`${BASE_URL}/rubrics/${rubric}/${qs ? "?" + qs : ""}`);
  if (!res.ok) throw new Error(`Rubric list fetch failed: ${res.status}`);
  const data = await res.json();
  return { ...data, results: data.results.map(normalizePost) };
}

/** Bitta maqola. Ko'rishlar soni server tomonida oshiriladi. */
export async function fetchRubricPost(rubric, id) {
  const res = await fetch(`${BASE_URL}/rubrics/${rubric}/${id}/`);
  if (!res.ok) throw new Error(`Rubric post fetch failed: ${res.status}`);
  return normalizePost(await res.json());
}
