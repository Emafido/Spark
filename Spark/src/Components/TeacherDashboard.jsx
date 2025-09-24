import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
export default function TeacherDashboard() {
  const Notworking = () => {
    Swal.fire("Sorry! This feature is still under production");
  };

  return (
    <div className="font-[inter] ">
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
        className="flex gap-2 mt-15"
      >
        <div className="flex items-start justify-center ">
          <ul className=" hidden sm:flex bg-white  flex-col gap-9 mt-10  border-cyan-500 border-[1px]  rounded-tr-2xl rounded-br-2xl font-[roboto] ">
            <li className="text-white cursor-pointer transition-all ease-linear scale-105 bg-blue-300 mt-6 mr-1 p-3 rounded-tr-2xl rounded-br-2xl">
              Home
            </li>
            <Link to="/summaries">
              <li className="hover:text-white cursor-pointer transition-all ease-linear hover:scale-105 hover:bg-blue-300 mt-6 mr-1 p-3 rounded-tr-2xl rounded-br-2xl ">
                Summaries
              </li>
            </Link>
            <Link to="/teacher-analytics">
              <li className="hover:text-white cursor-pointer transition-all ease-linear hover:scale-105 hover:bg-blue-300 mt-6 mr-1 p-3 rounded-tr-2xl rounded-br-2xl mb-6">
                Analytics
              </li>
            </Link>
          </ul>
        </div>
        <div className="w-[90%] p-4">
          <p className="mb-3 text-2xl font-extrabold">Welcome, Dr. Smith!</p>
          <div className="h-50 w-full border-dotted border-[1.5px] border-blue-600 flex justify-center items-center rounded-2xl bg-blue-300/30 hover:opacity-85 transition-all ease-linear">
            <div className="font-[poppins]">
              <div className="text-center">
                <img
                  src="/upload-cloud.svg"
                  alt="upload image"
                  className="inline-block w-[50px] "
                />
              </div>
              <p className="font-bold text-[1rem] sm:text-xl">
                Drag and drop files here
              </p>
              <p className="text-gray-500 text-center">
                or click to browse files
              </p>
              <div className="text-center">
                <button
                  onClick={Notworking}
                  className="mt-2 bg-blue-400/80 py-2 px-5 rounded-2xl text-white font-semibold hover:scale-105 transition-all cursor-pointer ease-linear outline-0"
                >
                  Browse Files
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-8 items-center gap-1.5">
            <p className="font-bold text-[1rem] sm:text-xl ">
              Recent Summaries
            </p>
            <button
              onClick={Notworking}
              className="mt-2 bg-blue-400/80 py-1.5 px-3 sm:py-2 sm:px-5 rounded-2xl  text-[.7rem] sm:text-[1rem] whitespace-nowrap text-white font-semibold hover:scale-105 transition-all ease-linear cursor-pointer font-[poppins]"
            >
              Generate Quiz
            </button>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
            <Link to="/summaries">
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
            </Link>
            <Link to="/summaries">
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
            </Link>
            <Link to="/summaries">
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
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
