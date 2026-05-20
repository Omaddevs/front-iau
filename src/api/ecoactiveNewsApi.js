import localPlaceholder from "../images/sectionImage.jpg";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
const SECONDARY_BASE_URL = "http://localhost:4001/api";
const PLACEHOLDER_IMG = localPlaceholder;

function proxyMediaUrl(url) {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    return parsed.pathname + parsed.search;
  } catch {
    return url;
  }
}

function normalizeItem(item) {
  return {
    ...item,
    views: Number(item?.views ?? 0),
    img: proxyMediaUrl(item.img) || PLACEHOLDER_IMG,
    gallery_images: (item.gallery_images || []).map((g) => ({
      ...g,
      image: proxyMediaUrl(g.image),
    })),
  };
}

const FALLBACK_LIST = [
  {
    id: "demo-1",
    title: "Ekologik hashar: talabalar tomonidan 250 tup daraxt ekildi",
    text: "Universitet hududida “Yashil makon” doirasida katta ko'kalamzorlashtirish aksiyasi o'tkazildi.",
    body: "Talabalar, professor-o'qituvchilar va volontyorlar ishtirokida umumiy hashar tashkil qilindi. Aksiya davomida 250 tup manzarali va mevali daraxtlar ekildi.\n\nTadbir yakunida ekologik targ'ibot bo'yicha ochiq muloqot ham o'tkazildi.",
    date: "2026-05-20",
    views: 0,
    img: PLACEHOLDER_IMG,
    categories: [{ name: "Yashil makon" }],
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
  throw new Error("Ekofaol news not found");
}
