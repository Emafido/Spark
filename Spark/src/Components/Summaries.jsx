import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Summaries() {
  return (
    <div className="font-[Inter]">
      <div className="font-extrabold text-cyan-500 px-4 py-2 text-3xl shadow-2xl shadow-cyan-100/50 fixed top-0 w-full z-50 bg-white flex justify-between items-center ">
        <p>Spark</p>
        <div className="flex gap-2 items-center justify-center">
          <img
            src="/bell.cyan.svg"
            alt="Notifications"
            className="h-6 cursor-pointer"
          />
          <div>
            <img
              src="/face4.jpg"
              alt="profile"
              className="h-12 cursor-pointer border-[1px] rounded-full "
            />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -600 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="flex gap-2 mt-20 "
      >
        <div className="flex items-start justify-center ">
          <ul className=" hidden sm:flex bg-white  flex-col gap-9 mt-10  border-cyan-500 border-[1px]  rounded-tr-2xl rounded-br-2xl font-[roboto] ">
            <Link to="/teacher-dashboard">
              <li className="hover:text-white cursor-pointer transition-all ease-linear hover:scale-105 hover:bg-blue-300 mt-6 mr-1 p-3 rounded-tr-2xl rounded-br-2xl">
                Home
              </li>
            </Link>
            <li className="text-white cursor-pointer transition-all ease-linear scale-105 bg-blue-300 mt-6 mr-1 p-3 rounded-tr-2xl rounded-br-2xl ">
              Summaries
            </li>
            <Link to="/teacher-analytics">
              <li className="hover:text-white cursor-pointer transition-all ease-linear hover:scale-105 hover:bg-blue-300 mt-6 mr-1 p-3 rounded-tr-2xl rounded-br-2xl mb-6">
                Analytics
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-col w-full justify-center items-center">
          <p className="font-extrabold my-5 text-2xl sm:text-3xl lg:text-4xl">
            Your Summaries
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-[1px] w-[250px] h-[200px] p-4 rounded-2xl bg-blue-500/30 cursor-pointer hover:scale-105 transition-all ease-linear border-none shadow-md focus:scale-105 ">
              <p className="font-bold text-xl my-2">Biology</p>
              <p className="text-gray-600 mb-3 font-[roboto]">
                Skeletal system
              </p>
              <p className="font-[poppins]">
                We learn the skeletal system of the body, how many bones are
                there in....
              </p>
            </div>
            <div className="border-[1px] w-[250px] h-[200px] p-4 rounded-2xl bg-blue-500/30 cursor-pointer hover:scale-105 transition-all ease-linear border-none shadow-md focus:scale-105 ">
              <p className="font-bold text-xl my-2">Biology</p>
              <p className="text-gray-600 mb-3 font-[roboto]">
                Skeletal system
              </p>
              <p className="font-[poppins]">
                We learn the skeletal system of the body, how many bones are
                there in....
              </p>
            </div>
            <div className="border-[1px] w-[250px] h-[200px] p-4 rounded-2xl bg-blue-500/30 cursor-pointer hover:scale-105 transition-all ease-linear border-none shadow-md focus:scale-105 ">
              <p className="font-bold text-xl my-2">Biology</p>
              <p className="text-gray-600 mb-3 font-[roboto]">
                Skeletal system
              </p>
              <p className="font-[poppins]">
                We learn the skeletal system of the body, how many bones are
                there in....
              </p>
            </div>
            <div className="border-[1px] w-[250px] h-[200px] p-4 rounded-2xl bg-blue-500/30 cursor-pointer hover:scale-105 transition-all ease-linear border-none shadow-md focus:scale-105 ">
              <p className="font-bold text-xl my-2">Biology</p>
              <p className="text-gray-600 mb-3 font-[roboto]">
                Skeletal system
              </p>
              <p className="font-[poppins]">
                We learn the skeletal system of the body, how many bones are
                there in....
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
