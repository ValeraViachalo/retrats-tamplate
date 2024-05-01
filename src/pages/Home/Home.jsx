import FullWidthBg from "@/components/FullWidthBg/FullWidthBg";
import React, { useEffect } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="home">
      <h1 className="super-text">super-text</h1>
      <h1>H1</h1>
      <h2>H2</h2>
      <p>body-text</p>
      <p className="small-text">small-text</p>
      <p className="micro-text">micro-text</p>
      <Link to={"/"}> LINK</Link>
    </main>
  );
}
