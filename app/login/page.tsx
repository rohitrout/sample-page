import Login from "@/components/Login"


const page = () => {
  return (
    <div className="flex border-4 border-red-300 min-h-screen justify-between w-full ">
        <div className="w-1/2 flex flex-col pt-96 gap-3 px-36 bg-gradient-to-r from-blue-200 to-blue-50 rounded-br-[400px]">
            <p className="text-5xl font-bold">Experience Seamless Stock</p>
            <p className="text-5xl font-bold">Search Here </p>
            <p className="text-3xl text-gray-500">Kanini Ticker Platform</p>
        </div>
        <div className="py-72 pr-20"><Login/></div>

    </div>
    
  )
}

export default page
