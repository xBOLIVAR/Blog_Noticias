function DeleteComment({ commentId, updateComments }: any) {
  const ChooseComment = async () => {
    const res = await fetch(`http://localhost:8080/comments/${commentId}`, {
      method: "DELETE",
    });
    if(res.ok) updateComments(true)
  };

  return <button onClick={ChooseComment}>Elimnar Comentario</button>;
}

export default DeleteComment;
