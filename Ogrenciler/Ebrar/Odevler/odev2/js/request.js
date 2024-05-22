class Request {
  static async get(url, sort) {
    try {
      const response = await fetch(url + sort);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      showModal("Error during GET request: " + error.message);
      throw error;
    }
  }

  static async post(url, data) {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      showModal("Error during POST request: " + error.message);
      throw error;
    }
  }

  static async put(url, data, id) {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      showModal("Error during PUT request: " + error.message);
      throw error;
    }
  }

  static async delete(url, id) {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      showModal("Error during DELETE request: " + error.message);
      throw error;
    }
  }
}

function showModal(message) {
  const modalMessage = document.getElementById("modalMessage");
  modalMessage.textContent = message;
  $("#errorModal").modal("show");
}
