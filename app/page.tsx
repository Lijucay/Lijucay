import Image from "next/image";
import AboutMe from "@/app/about/aboutme";
import logo from "@/public/logo_icon.png";
import Qwotable from "@/app/qwotable/qwotable";
import Damier from "@/app/damier/damier";
import Button from "@/app/components/Button";

export default function Home() {
  return (
      <div>
          <header className="flex flex-row items-center justify-between w-4/5 mx-auto mt-5">
              <Image src={logo.src} width={30} height={30} alt="logo"/>
              <Button href="https://blog.lijucay.de/" className="bg-black text-white">
                  Blog
              </Button>
          </header>
          <section id="aboutme">
              <AboutMe/>
          </section>
          <section id="qwotable" className="bg-[#f9f9ff] overflow-x-hidden mt-5">
              <Qwotable/>
          </section>
          <section id="damier" className="bg-[#f6fbf3]">
              <Damier/>
          </section>
      </div>
  );
}
