import HumanBody from "@/components/home/HumanBody";
import HumanBodyFemale from "@/components/home/HumanBodyFemale";
import Navber from "@/components/navber/Navber";

export default function Home() {
  return (
    <div className="min-h-screen  mx-auto  bg-white font-sans  ">
      <header>
        <Navber></Navber>
      </header>
      <main>
        <section className="max-w-7xl mx-auto border">
          <div className="flex items-center justify-between">
            <HumanBody></HumanBody>
            <HumanBodyFemale></HumanBodyFemale>
          </div>
        </section>
      </main>
    </div>
  );
}
