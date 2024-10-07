import React, { useState, useEffect } from "react";
import SocialFollow from "./SocialFollow";

export default function Footer() {
  // Initialize the current year using useState
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Optional: useEffect in case we need to update the year dynamically
  useEffect(() => {
    const now = new Date().getFullYear();
    setCurrentYear(now);
  }, []); // Empty dependency array means this will run once when the component mounts.

  return (
    <section className="footer-container">
      {/* Render SocialFollow component for social media links */}
      <SocialFollow />

      {/* Display the copyright message with the current year */}
      <h4>Всички права запазени. CopyRight © {currentYear} година</h4>
    </section>
  );
}
