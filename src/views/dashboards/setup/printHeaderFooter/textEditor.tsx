import React, { useState, useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const TextEditor = () => {
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      
      
    }
  }, []);

  return (
    <div>
      <div ref={editorRef} style={{ height: '200px' }}></div>
    </div>
  );
};

export default TextEditor;
