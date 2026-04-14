const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

/**
 * POST /api/contact/submit/
 * @param {{ name: string, phone: string, message: string }} formData
 * @returns {{ success: boolean, message: string }}
 */
export async function submitContactForm(formData) {
  const res = await fetch(`${BASE_URL}/contact/submit/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  if (!res.ok) {
    const detail = data?.detail || data?.message || JSON.stringify(data);
    throw new Error(detail);
  }

  return data;
}
