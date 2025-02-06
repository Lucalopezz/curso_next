import Button from "@/components/button";
import Link from "next/link";

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface RespProps {
  posts: PostProps[];
}
// função que é gerada no server, tem q ser async
const handleServerSide = async () => {
  "use server";

  console.log("clicou"); // so aparece no terminal do servidor, não no console do navegador
};

const handleSearchUser = async (formData: FormData) => {
  // pega pelo name do id
  "use server";

  const userId = formData.get("userId");

  const resp = await fetch(`https://dummyjson.com/posts/user/${userId}`);
  const data: RespProps = await resp.json();

  console.log(data);
};

//Server Components
const Posts = async () => {
  const resp = await fetch("https://dummyjson.com/posts");
  const data: RespProps = await resp.json();

  return (
    <div>
      <h1 className="text-center mt-5 mb-2 text-3xl">Posts</h1>
      {/* Componente client em uma pagina server */}
      <Button />
      <br />
      {/* --------------------------- */}

      <button
        className="bg-stone-600 p-2 rounded-md"
        onClick={handleServerSide}
      >
        Botao no server side
      </button>
      <br />

      <form
        action={handleSearchUser} // como é um server component, pode usar o action
        method="POST"
        className="flex gap-2 mt-4 my-8"
      >
        <input
          type="text"
          name="userId"
          placeholder="ID do usuário"
          className="p-2 border border-gray-700 rounded-md bg-zinc-900 text-white"
        />
        <button
          type="submit"
          className="bg-blue-600 p-2 rounded-md text-white hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>

      <div className="flex flex-col gap-4 mx-2">
        {data.posts.map((post) => (
          <div key={post.id} className="bg-zinc-800 p-4 rounded-md">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
            <br />
            <Link
              className="bg-blue-600 p-2 rounded-md text-white hover:bg-blue-700"
              href={`/posts/${post.userId}`}
            >
              Ver mais posts desse user
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
