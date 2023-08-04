"use client";
import { useRouter } from "next/navigation";
import { FaNewspaper } from "react-icons/fa";

export interface NewsItem {
  id: number;
  title: string;
  content: string;
}

interface Props {
  news: NewsItem[] | null;
}

function NewData({ news }: Props) {
  const router = useRouter();
  const maxLength = 350;

  return (
    <>
      {news ? (
        <ul className="container">
          {news.map((newData: any) => (
            <li
              className="card float"
              key={newData.id}
              onClick={() => {
                router.push(`/new/${newData.id}`);
              }}
            >
              <div className="paper">
                <div className="decoration"></div>
                <div className="decoration"></div>
                <div className="decoration"></div>
                <div className="infoCard">
                  <h3>
                    <FaNewspaper /> {newData.title}
                  </h3>
                  <hr />
                  <p>
                    {newData.content.slice(0, maxLength) +
                      (newData.content.length > maxLength ? "..." : "")}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay noticias</p>
      )}
    </>
  );
}

export default NewData;
