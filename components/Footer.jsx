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
    href: "/"
  },
]

export default function Footer() {
  return (
    <div className="w-full flex justify-center bg-black text-white py-12">

      {footerItems.map((item) => (
        <Link key={item.name} href={item.href}>
          <a className="mr-11 nav-hover">{item.name}</a>
        </Link>
      ))}

    </div>
  )
}