"use client";

import { useEffect, useState } from "react";

//Client Components
const page = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return (
    <div>
      <h1 className="text-center mt-5 mb-2 text-3xl">Posts Página Client</h1>
      <div className="flex flex-col gap-4 mx-2">
        {posts.map((post: any) => (
          <div key={post.id} className="bg-zinc-800 p-4 rounded-md">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
