import Link from "next/link";
import TobarLabel from "./TobarLabel";
import HeroSection from "./HeroSection";
import { IoSearchOutline } from "react-icons/io5";
import MuscluerShalaton from "./MuscluerShalaton";
// import MuscluerShalaton from "./muscluerShalaton";

export default function Navber() {
  return (
    <div className="flex flex-col  w-full">
      {/* Topar Label */}
      <TobarLabel></TobarLabel>
      {/* nav link */}
      <div className=" bg-[#1e2a6b] mx-auto w-full h-15 flex  items-center ">
        <div className="flex max-w-7xl mx-auto w-full justify-between">
          <nav className="flex gap-6  text-white items-center pl-2 capitalize text-[16px]  ">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Abouts Us</Link>
            <Link href={"/"}>Services</Link>
            <Link href={"/"}>Doctors</Link>
            <Link href={"/"}>News</Link>
            <Link href={"/"}>Contact</Link>
          </nav>
          <div className="flex items-center justify-center gap-5 ">
            <IoSearchOutline className="text-white" />
            <button className="flex items-center gap-2 bg-[#ff4433] text-[#1e2a6b] font-semibold px-5 py-2 rounded-full hover:bg-[#ff2a1a] transition">
              Hotline
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <HeroSection></HeroSection>

      {/* <MuscluerShalaton></MuscluerShalaton> */}
    </div>
  );
}
