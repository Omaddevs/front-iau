const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
const SECONDARY_BASE_URL = "http://localhost:4001/api";

async function requestJson(urls) {
  let lastError = null;
  for (const url of urls) {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) {
        lastError = new Error(`Request failed: ${res.status}`);
        if (res.status === 404) throw lastError;
        continue;
      }
      return await res.json();
    } catch (error) {
      lastError = error;
      if (error?.message === "Request failed: 404") throw error;
    }
  }
  throw lastError || new Error("Request failed");
}

function vacancyUrls(path, query = "") {
  const suffix = `${path}${query}`;
  return [`${SECONDARY_BASE_URL}${suffix}`, `${BASE_URL}${suffix}`];
}

export async function fetchVacanciesList(params = {}) {
  const query = new URLSearchParams();
  if (params.page) query.set("page", params.page);
  if (params.page_size) query.set("page_size", params.page_size);
  if (params.search) query.set("search", params.search);
  const qs = query.toString();
  return requestJson(vacancyUrls(`/vacancies/`, qs ? `?${qs}` : ""));
}

export async function fetchVacancyDetail(id) {
  return requestJson(vacancyUrls(`/vacancies/${id}/`));
}

export async function submitVacancyApplication(id, { fullName, phone, cv }) {
  const formData = new FormData();
  formData.append("full_name", fullName);
  formData.append("phone", phone);
  formData.append("cv", cv);

  const res = await fetch(`${BASE_URL}/vacancies/${id}/apply/`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json().catch(() => null);
  if (!res.ok) {
    const message = data?.detail || Object.values(data || {})[0]?.[0] || `Request failed: ${res.status}`;
    throw new Error(message);
  }
  return data;
}
