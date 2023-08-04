"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function DeleteButton({ id }: any) {
  const [error, setError] = useState(false);
  const router = useRouter();
  const deleteNews = async () => {
    const res = await fetch(`http://localhost:8080/news/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) setError(false);
    else router.push("/")
  };

  return <button onClick={deleteNews}>Eliminar Noticia</button>;
}

export default DeleteButton;
