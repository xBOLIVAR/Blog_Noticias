"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import GoBack from "../../../../components/GoBack";

function EditNews({ params }: any) {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dataNew, setDataNew] = useState<any>({});
  const router = useRouter();

  useEffect(() => {
    fetch(`http://localhost:8080/news/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setDataNew(data);
      });
  }, [params.id]);

  const onSubmit = async (data: any) => {
    const res = await fetch(`http://localhost:8080/news/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    if (res.ok) {
      reset();
      goHome();
    } else setError(true);
  };

  const goHome = () => router.push("/");

  return (
    <>
      <GoBack />
      {!loading ? (
        <div>
          <h1>Editar Noticia</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">Titulo</label>
            <input
              type="text"
              id="title"
              defaultValue={dataNew.title}
              {...register("title", {
                required: true,
                maxLength: 75,
              })}
            />
            <label htmlFor="content">Contenido</label>
            <textarea
              id="content"
              placeholder="Contenido de la noticia"
              defaultValue={dataNew.content}
              {...register("content", {
                required: true,
              })}
            ></textarea>
            <button type="submit">Editar</button>
          </form>
          {error && <h3>Error al editar la noticia</h3>}
        </div>
      ) : (
        <div className="containerLoader">
          <span className="loader"></span>
        </div>
      )}
    </>
  );
}

export default EditNews;
