// import Image from "next/image";

import Link from "next/link";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
    <Hero />
    <HomeMenu />
    <section className="text-center my-16">
       <SectionHeaders 
       subHeader={'Our Story'}
        mainHeader={'About Us'} 
      />
      <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
      </p>  
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>             
      </div>
    </section>

    <section className="text-center my-8">
    <SectionHeaders subHeader={'Don\'t Hesitate'} mainHeader={'Contact Us'} />
    <div className="mt-8">
    <a className="text-4xl underline text-gray-500" href="tel: +911231231234">+91 123 123 1234</a>
    </div>
    </section>

    </>
  );
}
