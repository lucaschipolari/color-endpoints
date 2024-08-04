const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getColorFn = async () => {
  const res = await fetch(`${BACKEND_URL}/color`);
  const data = await res.json();

  if (!res.ok || !Array.isArray(data)) {
    throw new Error("Invalid recipes");
  }

  return data;
};
export const getColorsFn = async () => {
  const res = await fetch(`${BACKEND_URL}/color`);
  const data = await res.json();

  if (!res.ok) {
    // Si la respuesta no es OK, lanza un error con el mensaje de error del servidor
    throw new Error(`Failed to fetch colors`);
  }
  return data;
};

export const postColorFn = async (color) => {
  const res = await fetch(`${BACKEND_URL}/color/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(color),
  });
  if (!res.ok) {
    throw new Error(`Failed to create color: ${res.message}`);
  }
  return res.json();
};

export const putColorFn = async ({ idColor, data }) => {
  const res = await fetch(`${BACKEND_URL}/color/${idColor}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(`Failed to update color: ${res.message}`);
  }
  return res.json();
};

export const deleteColorFn = async (id) => {
  const res = await fetch(`${BACKEND_URL}/color/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isActive: true }), // Especificamos que el color debe ser desactivado
  });
  if (!res.ok) {
    throw new Error(`Failed to delete color: ${res.message}`);
  }
};
