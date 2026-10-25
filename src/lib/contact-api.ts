// Cliente para el endpoint de contacto de orioncaps-api.
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

export type ContactPayload = {
  full_name: string;
  email: string;
  phone: string;
  company?: string;
  product_type?: string;
  quantity?: string;
  message: string;
};

export type ContactResult =
  | { ok: true }
  | { ok: false; message: string; errors?: Record<string, string> };

export async function submitContact(
  payload: ContactPayload
): Promise<ContactResult> {
  try {
    const res = await fetch(`${API_URL}/api/v1/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      return {
        ok: false,
        message: data?.message ?? "No pudimos enviar tu mensaje.",
        errors: data?.errors,
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      message: "No pudimos conectar con el servidor. Revisa tu conexión.",
    };
  }
}
