"use client";
import { useRouter } from "next/navigation";

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

  return (
    <>
      {news ? (
        <ul className="container">
          {news.map((newData: any) => (
            <li
              className="card"
              key={newData.id}
              onClick={() => {
                router.push(`/new/${newData.id}`);
              }}
            >
              <h5>{newData.title}</h5>
              <p>{newData.content}</p>
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
