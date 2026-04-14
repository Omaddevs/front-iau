const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

function proxyUrl(url) {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  try {
    const p = new URL(url);
    return p.pathname + p.search;
  } catch {
    return url;
  }
}

function proxyMember(m) {
  return { ...m, photo_src: proxyUrl(m.photo_src) };
}

/** GET /api/staff/departments/ — list all departments */
export async function fetchDepartments() {
  const res = await fetch(`${BASE_URL}/staff/departments/`);
  if (!res.ok) throw new Error(`Departments fetch failed: ${res.status}`);
  const data = await res.json();
  return data.results ?? data;
}

/** GET /api/staff/departments/:slug/ — department with members */
export async function fetchDepartment(slug) {
  const res = await fetch(`${BASE_URL}/staff/departments/${slug}/`);
  if (!res.ok) throw new Error(`Department fetch failed: ${res.status}`);
  const data = await res.json();
  return {
    ...data,
    members: (data.members || []).map(proxyMember),
  };
}

/** GET /api/staff/members/?department=slug */
export async function fetchMembers(departmentSlug) {
  const url = departmentSlug
    ? `${BASE_URL}/staff/members/?department=${departmentSlug}`
    : `${BASE_URL}/staff/members/`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Staff members fetch failed: ${res.status}`);
  const data = await res.json();
  return (data.results ?? data).map(proxyMember);
}
