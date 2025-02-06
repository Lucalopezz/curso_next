import { RespProps } from "../page";

const DetailPost = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const resp = await fetch(`https://dummyjson.com/posts/user/${id}`);

  if (!resp.ok) {
    throw new Error("Falha ao buscar os detalhes do post");
  }

  const data: RespProps = await resp.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts do Usuário: {id}</h1>
      <div className="flex flex-col gap-4">
        {data.posts.map((post) => (
          <div key={post.id} className="bg-zinc-800 p-4 rounded-md shadow-md">
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailPost;
