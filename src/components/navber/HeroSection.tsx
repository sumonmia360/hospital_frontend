import Image from "next/image";
import { Button } from "../ui/button";
import HeroBadge from "./HeroBadge";

export default function HeroSection() {
  return (
    <div className="mx-auto relative">
      <Image
        src={`/images/doctorImg1.png`}
        width={1366}
        height={580}
        alt="Hero section image"
      />
      <div className="relative max-w-7xl mx-auto bottom-90">
        <div className=" text-white mx-auto w-full absolute">
          <div className="max-w-[400px]">
            <p className="text-[#159EEC]  mb-2 font-bold">Caring for Life</p>
            <h1 className=" text-[#1F2B6C] text-3xl mb-2">
              Leading the Way in
              <br />
              Medical Excellence
            </h1>
          </div>
          <Button className="bg-[#1F2B6C]">Book a Appointment</Button>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto border-2 mb-50">
        <HeroBadge></HeroBadge>
      </div>
    </div>
  );
}
