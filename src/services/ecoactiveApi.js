const API_BASE = (import.meta.env.VITE_EKOFAOL_API_BASE || "http://localhost:4001/api").replace(/\/$/, "");

const FALLBACK_POSTS = [
  {
    id: "fallback-eco-1",
    title: "\"Ekofaol talabalar\" bo'limi bo'yicha topshiriq",
    summary:
      "PQ-184-son qarori (15.05.2025) va Yo'l xaritasi 32-bandiga asosan OTM saytida ekotadbirlar bo'yicha alohida bo'lim muntazam yuritilishi belgilangan.",
    content:
      "2026-yil 20-mayga qadar \"Yashil makon\" umummilliy loyihasi doirasida o'tkazilgan ekologik hasharlar, ko'kalamzorlashtirish ishlari va talabalar ekologik faolligi aks etgan tadbirlar haqida xabarlar ushbu bo'limga joylashtiriladi hamda havolasi tegishli tartibda taqdim etiladi.",
    category: "Me'yoriy asos",
    eventDate: "2026-05-20",
    location: "IAU, Toshkent",
    images: [],
    sourceUrl: "https://lex.uz",
    createdBy: "Axborot xizmati",
    isPublished: true,
  },
];

async function parseOrThrow(response) {
  if (!response.ok) {
    let message = `Request failed with status ${response.status}`;
    try {
      const payload = await response.json();
      if (payload?.error) message = payload.error;
    } catch {
      // no-op
    }
    throw new Error(message);
  }
  return response.status === 204 ? null : response.json();
}

export async function getEcoactivePosts() {
  try {
    const response = await fetch(`${API_BASE}/ecoactive/posts`);
    return await parseOrThrow(response);
  } catch {
    return FALLBACK_POSTS;
  }
}

export async function createEcoactivePost(payload) {
  const response = await fetch(`${API_BASE}/ecoactive/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return parseOrThrow(response);
}
