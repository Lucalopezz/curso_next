import { RespProps } from "../../page";

export const PostInfo = async ({ id }: { id: string }) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const resp = await fetch(`https://dummyjson.com/posts/user/${id}`);

  const data: RespProps = await resp.json();
  return (
    <div className="flex flex-col gap-4">
      {data.posts.map((post) => (
        <div key={post.id} className="bg-zinc-800 p-4 rounded-md shadow-md">
          <h2 className="font-semibold text-lg">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
