import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserAlt } from "react-icons/fa";
import DeleteComment from "./DeleteComment";

function Comments({ id }: any) {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState(false);
  const [comments, setComments] = useState([]);

  const fetchComments = useCallback(() => {
    fetch(`http://localhost:8080/news/${id}/comments`)
      .then((res) => res.json())
      .then((data: any) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, [id]);

  useEffect(() => {
    fetchComments();
  }, [id, fetchComments]);

  const createComment = async (data: any) => {
    const res = await fetch(`http://localhost:8080/news/${id}/comments`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    if (!res.ok) setError(true);
    else {
      reset();
      fetchComments();
    }
  };

  const updateComments = () => fetchComments()

  return (
    <>
      <hr />
      <h2>Comentarios</h2>
      <div>
        <form onSubmit={handleSubmit(createComment)}>
          <h3>
            <FaUserAlt style={{ fontSize: "30px" }} /> User Name
          </h3>
          <textarea
            placeholder="Cementario"
            {...register("content")}
          ></textarea>
          <button type="submit">Publicar Comentario</button>
        </form>
        {error && <h3>Error al crear comentario</h3>}
      </div>
      <div>
        {comments.length !== 0 ? (
          <ul>
            {comments.map((comment: any) => (
              <li key={comment.id}>
                <h3>
                  <FaUserAlt style={{ fontSize: "30px" }} /> User Name
                </h3>
                <p>{comment.content}</p>
                <DeleteComment commentId={comment.id} updateComments={updateComments}/>
              </li>
            ))}
          </ul>
        ) : (
          <h3>No hay comentarios</h3>
        )}
      </div>
    </>
  );
}

export default Comments;
