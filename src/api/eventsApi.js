const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

function proxyUrl(url) {
  if (!url) return null;
  try {
    const p = new URL(url);
    return p.pathname + p.search;
  } catch {
    return url;
  }
}

function proxyEvent(e) {
  return { ...e, cover_image: proxyUrl(e.cover_image) };
}

export async function fetchUpcomingEvents() {
  const res = await fetch(`${BASE_URL}/events/upcoming/`);
  if (!res.ok) throw new Error(`Events fetch failed: ${res.status}`);
  const data = await res.json();
  return data.map(proxyEvent);
}

export async function fetchPreviousEvents() {
  const res = await fetch(`${BASE_URL}/events/previous/`);
  if (!res.ok) throw new Error(`Events fetch failed: ${res.status}`);
  const data = await res.json();
  return data.map(proxyEvent);
}

export async function fetchEventDetail(id) {
  const res = await fetch(`${BASE_URL}/events/${id}/`);
  if (!res.ok) throw new Error(`Event detail fetch failed: ${res.status}`);
  return proxyEvent(await res.json());
}
