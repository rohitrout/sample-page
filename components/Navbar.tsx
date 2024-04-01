import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="fixed w-full flex justify-between items-center px-16 bg-white border-b-2 rounded-lg shadow-md mb-8 text-sm md:font-extrabold md:text-xl h-24">
      <Link href="/">
        {" "}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" height={180} width={200} />
        </div>
      </Link>      
      <div className="flex gap-3 items-center border-2 border-blue-200 rounded-full px-4 py-2 text-blue-400">      
        <Link href={"/login"}>Logout</Link>        
      </div>
    </div>
  )
}

export default Navbar
