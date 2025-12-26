'use client'
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa6";
import { usePathname } from 'next/navigation';
import { MenuIcon } from "./Crossicon";

const Navbar = () => {
const pathname = usePathname();
  const targetLink = pathname === '/' ? '/context' : '/';
  return (
    <>
    <nav className=" p-3 pb-3 pt-2 pb-0 w-full flex justify-between bg-white fixed top-0 z-45 items-center">
      <div className="w-50 flex flex-col justify-center items-center ">
        <Link href='/' target="_self" >
<h3 className="text-2xl text-black font-poppins uppercase font-bold">Portfolio</h3>
</Link>
      </div>
      <div className="flex  ">
<Link href="https://github.com/MohitKumawat22 " target="_blank" className="h-[40px] invert p-2 m-2 mt-0 mb-0 font-bold"> <FaGithub className="text-3xl text-white" /> </Link>
   <Link href="https://www.linkedin.com/in/mohit-ostwal-kumawat123/" target="_blank" className="h-[40px] invert p-2 m-2 mt-0 mb-0 font-bold"> <FaLinkedin className="text-3xl text-white" /> </Link>
   <Link href="https://wa.me/7415354618?text=Hello  " target="_blank" className="h-[40px]  p-2 m-2 mt-0 invert mb-0 font-bold"> <FaWhatsapp className="text-3xl text-white" /> </Link>
   <Link href="https://www.instagram.com/dev.mohitkumawat/ " target="_blank" className="h-[40px]  p-2 m-2 invert mt-0 mb-0 font-bold"> <FaInstagram className="text-3xl text-white" /> </Link>
   
      </div>
   <Link href={targetLink}  >  
   
     <div className="w-50 h-10 flex flex-col z-10  justify-center items-end cursor-pointer  ">
       <MenuIcon className="invert scale-130 mr-7 "/>
       </div>
  </Link>

     
    </nav>
    </>
  )
}

export default Navbar
