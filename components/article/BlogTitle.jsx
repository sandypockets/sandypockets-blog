import Link from "next/link";
import { useState } from 'react'

export default function BlogTitle(props) {
  const [hover, setHover] = useState(false)

  const handleMouseOver = () => {
   setHover(true)
  }

  const handleMouseOut = () => {
    setHover(false)
  }

  return (
    <div>

      <h1
        className={hover ? props.propsClass + " text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 " + "transition duration-800 ease-in-out" : props.propsClass}
        onMouseOver={() => handleMouseOver()}
        onMouseOut={() => handleMouseOut()}
      >
        <Link href={props.meta.href}>
          <a>{props.meta.title}</a>
        </Link>
      </h1>


      {/*{!hover ?*/}
      {/*  <h1*/}
      {/*    className={!hover ? props.propsClass + " transition duration-600 ease-in-out" : props.propsClass + " text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 " + "transition duration-500 ease-in-out"}*/}
      {/*    onMouseOver={() => handleMouseOver()}*/}
      {/*    onMouseOut={() => handleMouseOut()}*/}
      {/*  >*/}
      {/*    <Link href={props.meta.href}>*/}
      {/*      <a>{props.meta.title}</a>*/}
      {/*    </Link>*/}
      {/*  </h1>*/}
      {/*  :*/}
      {/*  <h1 className={props.propsClass + " text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 " + "transition duration-500 ease-in-out"}*/}
      {/*    onMouseOver={() => handleMouseOver()}*/}
      {/*    onMouseOut={() => handleMouseOut()}*/}
      {/*    >*/}
      {/*    <Link href={props.meta.href}>*/}
      {/*      <a>{props.meta.title}</a>*/}
      {/*    </Link>*/}
      {/*  </h1>*/}
      {/*}*/}


    </div>
  )
}