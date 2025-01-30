'use client'

import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'

const Theme = ({ children }) => {


    // If we have hydration error, write this below commentted code.


    const [state, setState] = useState(false);

    useEffect(() => {
        setState(true);
    }, []);
    if (!state) {
        return null;
    }

  return (
   <ThemeProvider attribute={"class"}>{children}</ThemeProvider>
  )
}

export default Theme