import React from "react";
import star from "../assets/Vector.png";
import education from "../assets/education.png";
import specialized from "../assets/specialist.png";

const DoctorProfileCard = ({ doctor }) => {
  return (
    <div className="p-5 pt-12">
      <div className="bg-[#fff7e2] rounded-t-3xl  h-[55vh] w-[300px] p-0">
        <div className="p-3 grid place-items-center">
          <div className=" relative grid place-items-center">
            <img className="" src={doctor.img} alt="" />
            <div className="flex absolute bg-black rounded-3xl  p-1 gap-1 bottom-0 ">
              <img src={star} alt="" />
              <h1 className="text-white">{doctor.rating}</h1>
            </div>
          </div>
          <div className="grid place-items-center p-3">
            <h1 className="font-bold text-black ">{doctor.name}</h1>
            <h1 className=" text-black p-3">{doctor.education} </h1>
            <div className="flex items-center">
              <img className="h-5" src={education} alt="" />
              <h1 className=" text-black p-3">{doctor.experience} </h1>{" "}
            </div>
            <div className="flex items-center bg-[#e7e5ce] rounded-3xl p-2">
              {" "}
              <img className="h-4" src={specialized} alt="" />{" "}
              <h1 className=" text-green-900 font-semibold p-1 text-xs">{doctor.specialized} </h1>
            </div>
          </div>
         
        </div>
      </div>
       <button className="text-white bg-[#3a643b] rounded-b-3xl p-5 w-[300px] ">
            Book an Appointment
          </button>
    </div>
  );
};

export default DoctorProfileCard;
