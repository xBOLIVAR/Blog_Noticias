"use client";
import { useEffect, useState } from "react";
import CreateButton from "../../components/Create";
import NewData from "../../components/News";

export default function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/news")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setNews(data);
      });
  }, []);

  return (
    <main>
      {!loading ? (
        <>
          <h1>Blog de Noticias</h1>
          <CreateButton />
          <NewData news={news} />
        </>
      ) : (
        <div className="containerLoader">
          <span className="loader"></span>
        </div>
      )}
    </main>
  );
}
