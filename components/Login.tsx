import Image from "next/image"
import Link from "next/link"

const Login = () => {
  return (
   <div className="flex flex-col gap-8 w-3/4">
    <Image src="/logo.png" width={200} height={120} alt="logo" className="ml-20 mb-12"/>
    <div className="flex flex-col gap-3">
        <p className="font-bold text-3xl">Sign In</p>
        <p className="text-gray-700">Welcome back! Please enter email id and password</p>
    </div>
    <div>
        <label className="text-gray-500">Email ID</label>
      <input
        // onChange={(e)=>setEmail(e.target.value)}
        type="text"
        placeholder="Enter your Email"
        className="shadow-md py-3 my-4 w-full px-4 rounded-lg  focus:ring focus:ring-blue-200 focus:outline-none border-[1px] border-gray-400"
      />
      <label className="text-gray-500">Password</label>
      <input
        // onChange={(e)=> setPassword(e.target.value)}
        type="text"
        placeholder="Enter your Password"
        className="shadow-md py-3 my-4 w-full px-4 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none  border-2 border-gray-400"
      />
      <Link href={'/search'}>
       <button
        // onClick={handleSubmit}
        className="text-white shadow-md bg-blue-500 text-lg w-full border-2 border-blue-100 hover:ring hover:ring-blue-200 p-2 rounded-full mt-12"
      >
        SIGN IN
      </button>
      </Link>
    </div>

   </div> 
  )
}

export default Login
