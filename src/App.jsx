import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  useEffect(() => {
    const revealGroups = [
      [".section-head", ".cta-band__text", ".cta-band__btn", ".footer__grid > *"],
      [".feature-card", ".step-card", ".plan-card"],
    ];

    const elements = revealGroups.flatMap((selectors, groupIndex) =>
      selectors.flatMap((selector) =>
        [...document.querySelectorAll(selector)].map((element, index) => {
          element.classList.add("reveal-on-scroll");
          element.style.setProperty(
            "--reveal-delay",
            `${(index % (groupIndex ? 4 : 3)) * 90}ms`,
          );
          return element;
        }),
      ),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
