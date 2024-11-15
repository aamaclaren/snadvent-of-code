import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Home...</h1>
      <iframe src="https://adventofcode.com/"/>
      <Link href="/leaderboard" className="p-12 rounded-md bg-blue-400 text-slate-200 text-xl">Leaderboard</Link>
    </div>
  );
}
