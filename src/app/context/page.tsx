import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "/", bg: "bg-orange-600", text: "Welcome To My Space" },
  { name: "About", href: "/about", bg: "bg-fuchsia-600", text: "Get To Know Me" },
  { name: "Projects", href: "/projects", bg: "bg-indigo-600", text: "Showcasing Projects" },
  { name: "Blogs", href: "/blogs", bg: "bg-red-600", text: "Thoughts & Insights" },
  { name: "Contact", href: "/contact", bg: "bg-yellow-500", text: "Get In Touch" },
];

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center gap-6 p-6">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="group relative w-full max-w-5xl h-[90px] overflow-hidden border border-black"
        >
          {/* Default Text */}
          <div className="absolute inset-0 flex items-center justify-center bg-white transition-all duration-500 group-hover:-translate-y-full">
            <p className="text-4xl md:text-5xl font-semibold uppercase text-black">
              {item.name}
            </p>
          </div>

          {/* Hover Animated Section */}
          <div
            className={`absolute inset-0 flex items-center justify-center gap-8 ${item.bg} translate-y-full group-hover:translate-y-0 transition-all duration-500`}
          >
            <p className="text-3xl md:text-4xl font-semibold text-white uppercase whitespace-nowrap">
              {item.text}
            </p>

            <Image
              src="/bg1.jpg"
              height={60}
              width={60}
              alt="menu image"
              className="rounded-full object-cover"
            />

            <p className="text-3xl md:text-4xl font-semibold text-white uppercase whitespace-nowrap">
              {item.text}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}