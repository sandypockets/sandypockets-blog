import Link from 'next/link'

const navItems = [
  {
    name: "About",
    href: "/about"
  },
  {
    name: "Blog",
    href: "/blog"
  },
]

export default function Nav() {
  return (
    <div className="flex justify-between mb-5 w-full fixed sm:w-11/12 md:w-11/12 lg:w-11/12 sm:py-6 md:py-6 lg:py-6 font-mono">

      <Link href='/'>
        <a className="flex justify-start nav-hover">SANDYPOCKETS</a>
      </Link>

      <div className="flex justify-evenly sm:px-3 md:px-8">

        {navItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <a className="mr-11 nav-hover">{item.name}</a>
          </Link>
        ))}

      </div>

    </div>
  )
}