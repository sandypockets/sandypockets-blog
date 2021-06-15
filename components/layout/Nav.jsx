import Link from 'next/link'
import Toggle from "../utility/Toggle";

const navItems = [
  {
    name: "About",
    href: "/about"
  },
  // {
  //   name: "Blog",
  //   href: "/blog"
  // },
]

export default function Nav({ darkMode, setDarkMode }) {
  return (
    <div className="flex justify-between w-full fixed w-11/12 px-8 py-6 font-mono">

      <Link href='/'>
        <a className="flex justify-start nav-hover">SANDYPOCKETS</a>
      </Link>

      <div className="flex justify-evenly">

        {navItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <a className="mr-11 nav-hover">{item.name}</a>
          </Link>
        ))}

        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />

      </div>

    </div>
  )
}