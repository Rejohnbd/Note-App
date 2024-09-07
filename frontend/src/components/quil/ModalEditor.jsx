"use client";
import React, { useRef, useEffect } from "react";
import Quill from "quill";
import PropTypes from "prop-types";

const ModalEditor = ({ value, onChange }) => {
  const quillRef = useRef(null);
  const editorRef = useRef(null);

  const toolbarOptions = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
  ];

  useEffect(() => {
    // Initialize Quill editor only once
    if (!editorRef.current) {
      const editor = new Quill(quillRef.current, {
        theme: "snow",
        modules: {
          toolbar: toolbarOptions,
        },
      });

      if (value) {
        editor.clipboard.dangerouslyPasteHTML(value);
      }

      editorRef.current = editor;

      editor.on("text-change", () => {
        const content = editor.root.innerHTML;
        onChange(content);
      });
    }
  }, [onChange, toolbarOptions]);

  useEffect(() => {
    if (editorRef.current && value !== editorRef.current.root.innerHTML) {
      editorRef.current.clipboard.dangerouslyPasteHTML(value);
    }
  }, [value]);

  return <div ref={quillRef} className="quill-editor" />;
};

ModalEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default ModalEditor;
