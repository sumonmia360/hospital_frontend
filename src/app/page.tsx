"use client";

import HumanBodyFemale from "@/components/home/HumanBodyFemale";
import Navber from "@/components/navber/Navber";

import dynamic from "next/dynamic";

const HumanBody = dynamic(() => import("@/components/home/HumanBody"), {
  ssr: false,
});

export default function Home() {
  // const [isClient, setIsClient] = useState(false)

  return (
    <div className="min-h-screen  mx-auto  bg-white font-sans  ">
      <header>
        <Navber></Navber>
      </header>
      <main>
        <section className="mx-auto border max-w-[1440px] w-full h-full">
          <HumanBodyFemale></HumanBodyFemale>
        </section>
      </main>
    </div>
  );
}
