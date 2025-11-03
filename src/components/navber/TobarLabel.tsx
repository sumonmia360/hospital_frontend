import Image from "next/image";

export default function TobarLabel() {
  return (
    <div className=" w-full mx-auto">
      <div className="flex items-center  w-full gap-3 mx-auto max-w-7xl">
        <Image
          src={`/images/auroraLogo.png`}
          alt="Aurora Hospital Logo"
          width={70}
          height={70}
        />
        <h1 className="capitalize text-[#1F2B6C] font-bold text-2xl ">
          AURORA <span className="text-[#159EEC]">SPECIALIZED HOSPITAL</span>
        </h1>
      </div>
    </div>
  );
}
