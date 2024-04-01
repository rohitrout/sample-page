import Link from "next/link";

export default function Home() {
  return <main className="w-full flex flex-col items-center justify-center text-2xl font-semibold text-orange-500 pt-24">
  <span className="text-xl md:text-3xl pt-36 px-3">Welcome to Kanini!! Learn about individual Stocks. </span> 
   <Link href={`/login`}>
     <button className="mx-3 text-xl mt-36 text-[#143C6C] md:text-4xl rounded-full bg-gray-100 border-2 border-indigo-100 px-5 p-3">Explore and Login</button>
   </Link>
   
   </main>;
}
