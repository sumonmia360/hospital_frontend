import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroBadge() {
  return (
    <div className="flex absolute justify-evenly w-full -top-10" >
      <Link href={'/'} className="flex  bg-[#1F2B6C] p-4 h-20 rounded-lg shadow-lg gap-3 items-center ">
        <p className="text-white">Book a Appointment</p>
        <Image src={"/images/calendarSVG.svg"} alt="calender svg" width={30} height={30}></Image>
      </Link>
      <Link href={'/'} className="flex  bg-[#BFD2F8] p-4 h-20 rounded-lg shadow-lg gap-3 items-center ">
        <p className="text-white">Our Doctors - Go to Doctors Full pages </p>
        <Image src={"/images/calendarSVG.svg"} alt="calender svg" width={30} height={30}></Image>
      </Link>
      <Link href={'/'} className="flex  bg-[#159EEC] p-4 h-20 rounded-lg shadow-lg gap-3 items-center ">
        <p className="text-white">Our Services - Go to Full pages</p>
       <Image src={"/images/cashSVG.svg"} alt="Cash svg" width={30} height={30} className=""></Image>
      </Link>
    </div>
  );
}
