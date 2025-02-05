import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <nav className="flex gap-4">
        <Link href='/' className="hover:underline">Home</Link>
        <Link href='/posts' className="hover:underline">Posts</Link>
        <Link href='/dashboard' className="hover:underline">Dashboard</Link>

      </nav>

      <h1 className="text-xl font-bold">NextJS</h1>
    </header>
  );
};

export default Header;
