import { Suspense } from "react";
import { RespProps } from "../page";
import { PostInfo } from "./_components/post";
import Loading from "./_loading";

const DetailPost = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts do Usuário: {id}</h1>
      <Suspense fallback={<Loading/>}>
        <PostInfo id={id} />
      </Suspense>
    </div>
  );
};

export default DetailPost;
