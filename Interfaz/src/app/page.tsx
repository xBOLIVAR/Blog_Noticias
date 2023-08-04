"use client";
import { useEffect, useState } from "react";
import CreateButton from "../../components/Create";
import NewData from "../../components/News";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  }, []);

  return (
    <main>
      <h1>Blog de Noticias</h1>
      <CreateButton />
      <NewData news={news} />
    </main>
  );
}
