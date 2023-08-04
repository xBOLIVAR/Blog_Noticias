"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import GoBack from "../../../../components/GoBack";

function EditNews({params}:any) {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState(false);
  const router = useRouter();
  const onSubmit = async (data: any) => {
    const res = await fetch(`http://localhost:8080/news/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
    if (res.ok) {
      reset();
      goHome();
    } else setError(true);
  };

  const goHome = () => router.push("/");

  return (
    <>
      <h1>Editar Noticia</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          id="title"
          {...register("title", {
            required: true,
            maxLength: 75,
          })}
        />
        <label htmlFor="content">Contenido</label>
        <textarea
          id="content"
          placeholder="Contenido de la noticia"
          {...register("content", {
            required: true,
          })}
        ></textarea>
        <button type="submit">Editar</button>
      </form>
      {error && (
        <h3>Error al editar la noticia</h3>
      )}
      <GoBack />
    </>
  );
}

export default EditNews;
