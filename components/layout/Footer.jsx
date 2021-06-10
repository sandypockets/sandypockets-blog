import Link from "next/link";

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
    href: "https://github.com/sandypockets"
  },
]

export default function Footer() {
  return (
    <footer className="w-full flex justify-center bg-black text-white pb-14 pt-2 font-mono">
      {footerItems.map((item) => (
        <Link key={item.name} href={item.href}>
          <a className="mx-5 nav-hover">{item.name}</a>
        </Link>
      ))}
    </footer>
  )
}