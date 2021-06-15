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

export default function Footer({ backgroundColour, textColour, secondaryTextColour }) {
  return (
    <footer className={backgroundColour + " " + textColour + " w-full flex justify-center pb-12 font-mono"}>
      {footerItems.map((item) => (
        <Link key={item.name} href={item.href}>
          <a className="mx-5 nav-hover">{item.name}</a>
        </Link>
      ))}
    </footer>
  )
}