import toast, { Toaster } from 'react-hot-toast';

function DeleteComment({ commentId, updateComments }: any) {
  const ChooseComment = async () => {
    const res = await fetch(`http://localhost:8080/comments/${commentId}`, {
      method: "DELETE",
    });
    if (res.ok) {
      toast.success("Se elemino el comentario")
      updateComments(true);
    }
  };

  return (
    <>
      <button onClick={ChooseComment}>Elimnar Comentario</button>
    </>
  );
}

export default DeleteComment;
