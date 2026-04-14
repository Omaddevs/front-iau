// import.meta.env orqali .env fayldagi qiymat olinadi
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

/**
 * Backend media URL larini frontend proxy orqali o'tkazish.
 * http://localhost:8000/media/... → /media/... (Vite proxy hal qiladi)
 */
function proxyMediaUrl(url) {
  if (!url) return null;
  // Agar absolute URL bo'lsa, relative ga o'zgartir (Vite proxy orqali ketadi)
  try {
    const parsed = new URL(url);
    return parsed.pathname + parsed.search;
  } catch {
    return url;
  }
}

function proxyNews(item) {
  return { ...item, img: proxyMediaUrl(item.img) };
}

function proxyGallery(item) {
  return { ...item, image: proxyMediaUrl(item.image) };
}

/**
 * Paginated news ro'yxati.
 * @param {{ page?, page_size?, category?, search?, ordering? }} params
 */
export async function fetchNewsList(params = {}) {
  const query = new URLSearchParams();
  if (params.page)      query.set("page",      params.page);
  if (params.page_size) query.set("page_size", params.page_size);
  if (params.categoryId) query.set("categories", params.categoryId);
  if (params.category)  query.set("category",  params.category); // keep for backward compat
  if (params.search)    query.set("search",    params.search);
  if (params.ordering)  query.set("ordering",  params.ordering);
  if (params.recent_days) query.set("recent_days", params.recent_days);

  const qs  = query.toString();
  const url = `${BASE_URL}/news/${qs ? "?" + qs : ""}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`News list fetch failed: ${res.status}`);
  const data = await res.json();
  return {
    ...data,
    results: data.results.map(proxyNews),
  };
}

/**
 * Bitta yangilik to'liq ma'lumoti.
 * View counter server tomonida oshiriladi.
 * @param {number|string} id
 */
export async function fetchNewsDetail(id) {
  const res = await fetch(`${BASE_URL}/news/${id}/`);
  if (!res.ok) throw new Error(`News detail fetch failed: ${res.status}`);
  const data = await res.json();
  return {
    ...proxyNews(data),
    gallery_images: (data.gallery_images || []).map(proxyGallery),
  };
}

/**
 * Homepage uchun eng ko'p ko'rilgan top-5 yangiliklar.
 */
export async function fetchFeaturedNews() {
  const res = await fetch(`${BASE_URL}/news/featured/`);
  if (!res.ok) throw new Error(`Featured news fetch failed: ${res.status}`);
  const data = await res.json();
  return data.map(proxyNews);
}
