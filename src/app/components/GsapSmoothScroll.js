"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default function GsapSmoothScroll() {
  useEffect(() => {
    function handleClick(e) {
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const y = target.getBoundingClientRect().top + window.scrollY - 80; // offset for navbar
          gsap.to(window, { scrollTo: { y, autoKill: true }, duration: 1, ease: "power2.out" });
        }
      }
    }
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener("click", handleClick));
    return () => {
      links.forEach(link => link.removeEventListener("click", handleClick));
    };
  }, []);
  return null;
} 