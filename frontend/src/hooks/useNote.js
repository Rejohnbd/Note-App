import { useState } from "react";

// Ensure to replace with your actual axios configuration if you are using it elsewhere
import axios from "@/lib/axios"; // Assuming axios is configured correctly with the backend base URL

const useNote = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get the backend URL from the environment variable
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const csrf = async () => {
    // Fetch the CSRF token
    await axios.get(`${backendUrl}/sanctum/csrf-cookie`);
  };

  const submitNote = async (noteData) => {
    setLoading(true);
    setError(null);
    try {
      // Ensure the CSRF cookie is set
      await csrf();

      // Send the POST request to the backend
      const response = await axios.post(`${backendUrl}/api/notes`, noteData);

      if (response.status !== 200) {
        throw new Error("Failed to submit the note");
      }

      const data = response.data;
      console.log("Note submitted successfully:", data);
      // Handle success (e.g., reset form, close modal, etc.)
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
      console.error("Error submitting the note:", err);
    } finally {
      setLoading(false);
    }
  };

  return { submitNote, loading, error };
};

export default useNote;
