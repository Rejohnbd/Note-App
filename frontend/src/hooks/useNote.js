"use client";
import { useState, useCallback } from "react";
import axios from "@/lib/axios"; // Adjust the import path as necessary

const useNote = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [notes, setNotes] = useState([]);

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    // Function to set up CSRF token
    const csrf = async () => {
        try {
            await axios.get(`${backendUrl}/sanctum/csrf-cookie`);
        } catch (err) {
            console.error("Error setting CSRF token:", err);
            throw err; // Re-throw the error to be handled by submitNote
        }
    };

    // Function to fetch notes
    const fetchNotes = useCallback(async () => {
        console.log("Fetching notes...");
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get("/api/notes");
            console.log("Fetched notes:", response.data.data); // Debug statement
            setNotes(response.data.data);
        } catch (err) {
            setError(err.response ? err.response.data.message : err.message);
            console.error("Error fetching notes:", err);
        } finally {
            setLoading(false);
        }
    }, []);

    // Function to submit a new note
    const submitNote = async (noteData) => {
        console.log("Submitting note:", noteData);
        setLoading(true);
        setError(null);
        try {
            await csrf(); // Set up CSRF token
            const response = await axios.post(`${backendUrl}/api/notes`, noteData);
            if (response.status !== 201) {
                throw new Error("Failed to submit the note");
            }
            console.log("Note submitted successfully:", response.data);
            await fetchNotes(); // Refresh notes after submission
        } catch (err) {
            setError(err.response ? err.response.data.message : err.message);
            console.error("Error submitting the note:", err);
        } finally {
            setLoading(false);
        }
    };

    return { notes, fetchNotes, submitNote, loading, error };
};

export default useNote;
