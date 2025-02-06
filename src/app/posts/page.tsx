import Button from "@/components/button";

interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface RespProps {
  posts: PostProps[];
}

//Server Components
const Posts = async () => {
  const resp = await fetch("https://dummyjson.com/posts");
  const data: RespProps = await resp.json();

  return (
    <div>
      <h1 className="text-center mt-5 mb-2 text-3xl">Posts</h1>
      {/* Componente client em uma pagina server */}
      <Button />
      <div className="flex flex-col gap-4 mx-2">
        {data.posts.map((post) => (
          <div key={post.id} className="bg-zinc-800 p-4 rounded-md">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
