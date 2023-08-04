"use client";
import { useRouter } from "next/navigation";

function EditButton({ id }: any) {
  const router = useRouter();

  return (
    <button onClick={() => router.push(`/editNews/${id}`)}>
      Editar Noticia
    </button>
  );
}

export default EditButton;
