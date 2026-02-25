'use client'
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { usePathname } from 'next/navigation';
import StaggeredMenu from "@/components/StaggeredMenu";

const Navbar = () => {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com/MohitKumawat22' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/mohit-ostwal-kumawat123/' }
  ];

  const pathname = usePathname();

  return (
    <>
      <nav className="px-6 py-1 w-full h-15 flex justify-between bg-white fixed top-0 left-0 z-[100] items-center border-b border-gray-100">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <Link href='/'>
            <h3 className="text-2xl sm:py-2 md:text-2xl text-black font-poppins uppercase font-bold tracking-tighter">
              Portfolio
            </h3>
          </Link>
        </div>

        {/* Center/Right Side: Social Links (Hidden on small screens for better spacing) */}
        <div className="hidden md:flex items-center gap-2">
          <Link href="https://github.com/MohitKumawat22" target="_blank" className="hover:scale-110 transition-transform p-2"> 
            <FaGithub className="text-3xl text-black" /> 
          </Link>
          <Link href="https://www.linkedin.com/in/mohit-ostwal-kumawat123/" target="_blank" className="hover:scale-110 transition-transform p-2"> 
            <FaLinkedin className="text-3xl text-black" /> 
          </Link>
          <Link href="https://wa.me/7415354618" target="_blank" className="hover:scale-110 transition-transform p-2"> 
            <FaWhatsapp className="text-3xl text-black" /> 
          </Link>
          <Link href="https://www.instagram.com/dev.mohitkumawat/ " target="_blank" className="hover:scale-110 transition-transform p-2">
           <FaInstagram className="text-3xl text-white invert" /> </Link>
 
        </div>

        {/* Right Side: Menu Trigger */}
        <div className="relative z-[110]">
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            // Fix: Set button color to black to see it on white nav
            menuButtonColor="#000000" 
            openMenuButtonColor="#000000"
            changeMenuColorOnOpen={true}
            colors={['#63b3ed', '#f87171']}
            accentColor="#FCD34D"
            isFixed={true}
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
          />
        </div>
      </nav>
      {/* Spacer to prevent content from going under the fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}

export default Navbar;