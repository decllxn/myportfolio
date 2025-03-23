import axios from "axios";
import { API_BASE_URL, CSRF_TOKEN_URL } from "./constants";

// Function to get CSRF token
export const getCSRFToken = async () => {
  try {
    const response = await axios.get(CSRF_TOKEN_URL, { withCredentials: true });
    return response.data.csrfToken;
  } catch (error) {
    console.error("Error fetching CSRF token:", error);
    return null;
  }
};

// Function to submit contact form
export const submitContactForm = async (formData) => {
  const csrfToken = await getCSRFToken();
  if (!csrfToken) throw new Error("CSRF Token not available");

  try {
    const response = await axios.post(`${API_BASE_URL}/contact/`, formData, {
      headers: {
        "X-CSRFToken": csrfToken,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};