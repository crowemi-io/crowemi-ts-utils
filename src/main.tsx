import React from 'react';
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const container = document.getElementById('app');
if (container) {
  const root = createRoot(container);
  root.render(<h1>Hello, world</h1>);
} else {
  console.error("Container element with id 'app' not found.");
}