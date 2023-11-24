// Spacer.js

import { useState, useEffect } from 'react';

export default function Spacer() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const width = window.innerWidth;
    if(width > 791) {
      setHeight(20); 
    } else {
      setHeight(170);
    }
  }, []);

  return <div style={{ height }} />;
}