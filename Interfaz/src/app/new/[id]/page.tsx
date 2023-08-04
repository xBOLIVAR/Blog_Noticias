"use client";
import { useEffect, useState } from "react";
import GoBack from "../../../../components/GoBack";
import Comments from "../../../../components/comments";
import DeleteButton from "../../../../components/delete";
import EditButton from "../../../../components/edit";

function NewPage({ params }: any) {
  //const dataNew = await getNew(params.id);
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
      {!loading ? (
        <div>
          <h1>{dataNew.title}</h1>
          <p>{dataNew.content}</p>
          <EditButton id={dataNew.id} />
          <DeleteButton id={dataNew.id} />
          <GoBack />
          <Comments id={dataNew.id}/>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
}

export default NewPage;
