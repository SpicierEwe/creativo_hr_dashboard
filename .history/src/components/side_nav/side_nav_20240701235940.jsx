import React, { useEffect, useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { FaCalendarAlt, FaBell } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import {
  IoIosArrowDown,
  IoIosPeople,
  IoIosSettings,
  IoMdSearch,
} from "react-icons/io";
import { IoHeadset, IoPeople, IoPersonCircleSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbMessageDots } from "react-icons/tb";
import { Link } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    icon: <BiSolidDashboard />,
    label: "Overview",
    notifications: 0,
    redirect: "/",
  },
  {
    id: 2,
    icon: <IoPersonCircleSharp />,
    label: "Enrollment",
    notifications: 0,
    redirect: "/enrollment",
  },
  {
    id: 3,
    icon: <IoIosPeople size={25} />,
    label: "Employees",
    notifications: 2,
    redirect: "/employees",
  },
  {
    id: 4,
    icon: <FaCalendarAlt size={21} />,
    label: "Calendar and Todos",
    notifications: 0,
    redirect: "/calendar-and-todos",
  },
  {
    id: 5,
    icon: <IoIosSettings />,
    label: "Job",
    notifications: 0,
    redirect: "/job",
  },
  {
    id: 6,
    icon: <IoPeople />,
    label: "Candidate",
    notifications: 0,
    redirect: "/candidate",
  },
];

const menu2 = [
  {
    id: 7,
    icon: <IoHeadset />,
    label: "Help & Center",
    notifications: 0,
    redirect: "/help-and-support",
  },
  {
    id: 8,
    icon: <IoIosSettings />,
    label: "Settings",
    notifications: 0,
    redirect: "/settings",
  },
];

function SideNav() {
  const [selectedNavIndex, setSelectedNavIndex] = useState(1);

  return (
    <div className="fixed z-[99999]">
      {/* top nav */}
      <TopNavBar />

      {/* side nav */}
      <ul className="flex flex-col fixed gap-3 h-screen justify-between z-[999] bg-primary">
        <div className="flex flex-col gap-3  xl:py-5">
          {/* LOGO images */}
          <div className="pt-1 pl-3  xl:px-3 xl:pt-1.5 flex items-center gap-2">
            {/* mobile */}
            <img src="/logo/logo.svg" alt="" className="" />
            <h2 className="hidden font-bold text-2xl xl:block">logoipsum</h2>
          </div>

          {/*  */}

          <h2 className="text-start hidden pl-3 text-sm lg:block mt-5 text-[#b8c3e1]">
            MAIN MENU
          </h2>
          <div className="mt-2">
            {menuItems.map((item) => {
              const isSelected = selectedNavIndex === item.id;
              return (
                <Link to={item.redirect} key={item.id}>
                  <li
                    className={`p-3 border-r-2 ${
                      isSelected
                        ? "border-accent bg-accent_light"
                        : "border-primary"
                    } text-md cursor-pointer w-full transition-all duration-200 ease-in-out`}
                    onClick={() => setSelectedNavIndex(item.id)}
                  >
                    <div className="flex justify-between gap-10 ">
                      <div className="flex gap-4">
                        {/* item icon */}
                        <div
                          className={`text-2xl lg:text-xl ${
                            isSelected ? "text-accent" : "text-[#b8c3e1]"
                          }`}
                        >
                          {item.icon}
                        </div>

                        {/* label */}
                        <div
                          className={`hidden lg:block text-sm ${
                            isSelected
                              ? "text-accent font-bold"
                              : "text-[#b8c3e1]"
                          }`}
                        >
                          {item.label}
                        </div>
                      </div>
                    </div>
                  </li>
                </Link>
              );
            })}
          </div>
          <div className="h-[.3px] bg-gray-200 w-full"></div>
          <h2 className="text-start hidden pl-3 text-sm lg:block mt-5 text-[#b8c3e1]">
            HELP & SUPPORT
          </h2>
          <div className="mt-2">
            {menu2.map((item) => {
              const isSelected = selectedNavIndex === item.id;
              return (
                <Link to={item.redirect} key={item.id}>
                  <li
                    className={`p-3 border-r-2 ${
                      isSelected
                        ? "border-accent bg-accent_light"
                        : "border-primary"
                    } text-md cursor-pointer w-full transition-all duration-200 ease-in-out`}
                    onClick={() => setSelectedNavIndex(item.id)}
                  >
                    <div className="flex justify-between gap-10 ">
                      <div className="flex gap-4">
                        {/* item icon */}
                        <div
                          className={`text-2xl lg:text-xl ${
                            isSelected ? "text-accent" : "text-[#b8c3e1]"
                          }`}
                        >
                          {item.icon}
                        </div>

                        {/* label */}
                        <div
                          className={`hidden lg:block text-sm ${
                            isSelected
                              ? "text-accent font-bold"
                              : "text-[#b8c3e1]"
                          }`}
                        >
                          {item.label}
                        </div>
                      </div>
                    </div>
                  </li>
                </Link>
              );
            })}
          </div>
        </div>
      </ul>
    </div>
  );
}

export default SideNav;

const TopNavBar = () => {
  return (
    <div className="flex  justify-end xl:justify-between w-full  bg-primary fixed max-w-screen-2xl p-2 xl:py-[.7rem] py-[1.13rem] border-b-[.5px] border-[#4b5259] xl:px-10 ">
      <div className="flex justify-between w-full items-center ml-14 xl:ml-48  ">
        <div className="flex items-center gap-3 ">
          <div className="flex items-center gap-3">
            <BsPersonCircle />
            <p>Supporters</p>
          </div>
          <RiArrowDropDownLine size={24} />
        </div>

        <div className="flex">
          <div className="flex lg:py-2 lg:px-3 ml-3 rounded-xl items-center gap-4  bg-accent_light">
            <div className=" w-7 h-7  aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="aspect-square rounded-full"
              />
            </div>
            <h2 className="hidden xl:block">Theresa Webb</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
