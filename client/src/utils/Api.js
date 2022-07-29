export const getMe = (token) => {
    return fetch("/api/products", {
      headers: {
        "Content-Type": "application/json"
      },
    });
  };