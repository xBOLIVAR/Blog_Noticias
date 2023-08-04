"use client";
import { useRouter } from "next/navigation";

function CreateButton() {
  const router = useRouter();   

  return (
    <button className="buttonAnimation" onClick={() => router.push(`/createNews`)}>
      Crear Noticia
    </button>
  );
}

export default CreateButton;
