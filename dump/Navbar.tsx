import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 fixed top-0 left-0 z-50 bg-black/30 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-wide">
          SapienSpace
        </Link>

        <div className="space-x-6 text-sm">
          <Link href="/about">About</Link>
          <Link href="/observatory">Observatory</Link>
          <Link href="/communications">Communications</Link>
          <Link href="/robotics">Robotics</Link>
          <Link href="/research">Research</Link>
          <Link href="/platform">Platform</Link>
        </div>
      </div>
    </nav>
  );
}
