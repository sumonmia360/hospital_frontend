"use client";
import { useEffect, useState } from "react";
import "./HumanBody.css";
import useSWR from "swr";
import axios from "axios";
interface Department {
  id: number;
  name: string;
  description: string;
  created_by?: null;
}

const fetcher = (url) => axios.get(url).then((res) => res.data);
const HumanBody = () => {
  const [selectedArea, setSelectedArea] = useState("head");
  const [deptId, setDeptId] = useState(1);
  const [doctorsAry, setDoctorsAry] = useState([]);
  const [doctsId, setdoctsId] = useState(1);
  const handlePieceClick = (gName: string) => {
    setSelectedArea(gName);
  };
  const deptDetails = useSWR(
    `http://192.168.88.174:3000/api/department_group/${deptId}`,
    fetcher
  );

  const doctsArrayMain = useSWR(
    `http://192.168.88.174:3000/api/doctors/?department_id=${doctsId}`,
    fetcher
  );

  const HandleDoctors = (docId: number) => {
    setdoctsId(docId);
  };
  console.log(doctsArrayMain.data);

  return (
    <div className=" mx-auto  flex justify-around  w-full h-full gap-3 text-center">
      {/* body col */}
      <div className="flex flex-col items-center space-y-4 pl-2">
        <div className="text-[#1F2B6C] text-center font-bold mt-2">
          Select Body Part
        </div>
        {/* Male body*/}
        <div>
          
        </div>
        {/* info col */}
        <div className="border rounded p-2 border-[#1F2B6C] text-[#1F2B6C]">
          Human Body
        </div>
      </div>
      {/* Departments info */}
      <div className="w-full h-full">
        <h1>Departments</h1>

        <div className=" grid grid-cols-2 gap-5 ">
          <>
            {deptDetails.data?.departments.map((dept: Department) => (
              <div
                onClick={() => {
                  HandleDoctors(dept.id);
                }}
                key={dept.id}
                className="border-2 border-blue-600 bg-amber-300 p-5 h-20 justify-center items-center rounded-xl flex cursor-pointer"
              >
                <h1>{dept.name}</h1>
              </div>
            ))}
          </>
        </div>
      </div>
      {/* Doctors info */}
      <div className="w-full">
        <h1>Doctors</h1>
        <div className="h-full border border-b-red-600 w-full cursor-pointer">
          <h1>{selectedArea}</h1>
        </div>
      </div>
    </div>
  );
};

export default HumanBody;
