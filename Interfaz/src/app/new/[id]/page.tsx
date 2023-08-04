"use client";
import { useEffect, useState } from "react";
import GoBack from "../../../../components/GoBack";
import Comments from "../../../../components/comments";
import DeleteButton from "../../../../components/delete";
import EditButton from "../../../../components/edit";
import { Toaster } from "react-hot-toast";

function NewPage({ params }: any) {
  const [dataNew, setDataNew] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/news/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        return setDataNew(data);
      });
  }, [params.id]);
  return (
    <>
      <GoBack />
      <Toaster position="top-right"/>
      {!loading ? (
        <div>
          <h1>{dataNew.title}</h1>
          <p>{dataNew.content}</p>
          <EditButton id={dataNew.id} />
          <DeleteButton id={dataNew.id} />
          <Comments id={dataNew.id} />
        </div>
      ) : (
        <div className="containerLoader">
          <span className="loader"></span>
        </div>
      )}
    </>
  );
}

export default NewPage;
