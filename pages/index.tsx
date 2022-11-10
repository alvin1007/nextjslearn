import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>
        Cuvel
      </title>
    </Head>
      <nav>
        <ul className="flex justify-center shadow-lg">
          <li className="px-10 py-7 cursor-pointer float-left"><a>Menu</a></li>
          <li className="px-10 py-7 cursor-pointer float-left"><a>About</a></li>
          <li className="px-10 py-4 cursor-pointer float-left"><a><Image src={"/logo.png"} alt="logo" width={"50"} height={"50"}/></a></li>
          <li className="px-10 py-7 cursor-pointer float-left"><a>Games</a></li>
          <li className="px-10 py-7 cursor-pointer float-left"><a>Contect</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Home;