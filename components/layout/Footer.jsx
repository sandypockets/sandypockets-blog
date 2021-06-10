import Link from "next/link";
import SectionSeparator from "../utility/SectionSeparator";

const footerItems = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Blog",
    href: "/blog"
  },
  {
    name: "About",
    href: "/about"
  },
  {
    name: "GitHub",
    href: "/"
  },
]

export default function Footer() {
  return (
    <footer className="w-full flex justify-center bg-black text-white pb-14 pt-2">
      {footerItems.map((item) => (
        <Link key={item.name} href={item.href}>
          <a className="mr-11 nav-hover">{item.name}</a>
        </Link>
      ))}
    </footer>
  )
}