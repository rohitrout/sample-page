import Navbar from '@/components/Navbar'
import Image from 'next/image'

const images = ['/hdfc.png', '/irctc.png', '/reliance.png', '/yesbank.png', '/itc.png']

const CircleSection = ({item}:any) => {
    return <div className='rounded-full w-24 h-24 bg-white flex items-center justify-center'><Image src={item} height={55} width={55} alt="logo" className=''/></div>
}

const page = () => {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <div className='flex flex-col bg-gradient-to-b from-blue-200 to-blue-50 min-h-screen pt-72 text-center gap-6'>
        <p className='text-7xl font-extrabold text-gray-800'>Investing Search Engine</p>
        <p className='text-3xl font-bold text-gray-800'>The Modern Stock Screener that helps you pick better stocks</p>
        <div className='relative md:mx-[620px]'>
        <input
        // onChange={(e)=>setEmail(e.target.value)}
        type="text"
        placeholder="Search for stocks"
        className="shadow-md py-5 my-12 text-xl px-4 pl-16 w-full rounded-full  focus:ring focus:ring-blue-200 focus:outline-none "
      />
      <div className='absolute top-16 left-3 inset-y-0 items-center'>
        <Image src="/search.png" height={40} width={40} alt="search"/>
      </div>
        </div>
        
      <p className='text-xl font-bold text-gray-800 mb-3'>What's Trending</p>
      <div className='flex gap-10 justify-center'>
        {images.map((item,index )=> <CircleSection item={item} key={index}/>)}
      </div>

        </div>
     
    </div>
  )
}

export default page
