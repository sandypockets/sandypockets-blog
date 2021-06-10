import Link from "next/link";
import { useState } from 'react'

export default function BlogTitle(props) {
  const [hover, setHover] = useState(false)

  const handleMouseOver = (hover) => {
   setHover(true)
  }

  const handleMouseOut = () => {
    setHover(false)
  }

  return (
    <div>
      {!hover ?
        <h1
          className={props.propsClass}
          onMouseOver={() => handleMouseOver()}
          onMouseOut={() => handleMouseOut()}
        >
          <Link href={props.meta.href}>
            <a>{props.meta.title}</a>
          </Link>
        </h1>
        :
        <h1 className={props.propsClass + " text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"}
          onMouseOver={() => handleMouseOver()}
          onMouseOut={() => handleMouseOut()}
          >
          <Link href={props.meta.href}>
            <a>{props.meta.title}</a>
          </Link>
        </h1>
      }
    </div>
  )
}