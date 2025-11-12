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
        <section className="max-w-7xl mx-auto border">
          <div className="flex items-center justify-between mb-100 border border-red-600 h-[1000px]">
            <HumanBodyFemale></HumanBodyFemale>

            {/* <HumanBody /> */}
          </div>
        </section>
      </main>
    </div>
  );
}
