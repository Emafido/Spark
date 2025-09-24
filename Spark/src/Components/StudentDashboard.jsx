import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function StudentDashboard() {
  return (
    <div className="font-[inter]">
      <div className="font-extrabold text-purple-500 px-4 py-2 text-3xl shadow-2xl shadow-purple-100/50 fixed top-0 w-full z-50 bg-white flex justify-between items-center ">
        <p>Spark</p>
        <div className="flex gap-2 items-center justify-center">
          <img
            src="/bell.svg"
            alt="Notifications"
            className="h-6 cursor-pointer"
          />
          <div>
            <img
              src="/face2.jpg"
              alt="profile"
              className="h-12 cursor-pointer border-[1px] rounded-full "
            />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -600 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="mt-20 flex flex-col sm:block sm:pl-18 items-center   "
      >
        <p className="font-extrabold text-[1.5rem] text-center sm:text-left lg:text-3xl">
          Welcome To Your Dashboard, Emmanuel
        </p>
        <p className="text-center sm:text-left my-5 font-semibold text-xl lg:text-2xl">
          Available Summaries
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-center sm:text-left">
          <Link to="/summaries">
            <div className="border-[1px] w-[250px] h-[200px] p-4 rounded-2xl bg-purple-500/60 cursor-pointer hover:scale-105 transition-all ease-linear border-none shadow-md focus:scale-105 ">
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
          <div className="border-[1px] w-[250px] h-[200px] p-4 rounded-2xl bg-purple-500/60 cursor-pointer hover:scale-105 transition-all ease-linear border-none shadow-md focus:scale-105 ">
            <p className="font-bold text-xl my-2">Biology</p>
            <p className="text-gray-600 mb-3 font-[roboto]">Skeletal system</p>
            <p className="font-[poppins]">
              We learn the skeletal system of the body, how many bones are there
              in....
            </p>
          </div>
          <div className="border-[1px] w-[250px] h-[200px] p-4 rounded-2xl bg-purple-500/60 cursor-pointer hover:scale-105 transition-all ease-linear border-none shadow-md focus:scale-105 ">
            <p className="font-bold text-xl my-2">Biology</p>
            <p className="text-gray-600 mb-3 font-[roboto]">Skeletal system</p>
            <p className="font-[poppins]">
              We learn the skeletal system of the body, how many bones are there
              in....
            </p>
          </div>
          <div className="border-[1px] w-[250px] h-[200px] p-4 rounded-2xl bg-purple-500/60 cursor-pointer hover:scale-105 transition-all ease-linear border-none shadow-md focus:scale-105 ">
            <p className="font-bold text-xl my-2">Biology</p>
            <p className="text-gray-600 mb-3">Skeletal system</p>
            <p>
              We learn the skeletal system of the body, how many bones are there
              in....
            </p>
          </div>
        </div>
        <div className="text-center">
          <Link to="/summaries">
            <p className="border-[1px] inline-block  p-2 w-[100px] rounded-[10px] my-5 hover:scale-110 cursor-pointer hover:text-white hover:bg-purple-500 transition-all ease-linear font-[roboto] ">
              See more
            </p>
          </Link>
        </div>
        <p className="my-5 font-semibold text-xl lg:text-2xl">Quizzes</p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="border-[1px] shadow-md p-3 w-[280px] rounded-2xl  border-purple-400/40">
            <div>
              <p className="font-bold text-purple-500 italic">New</p>
              <p className="my-3 font-semibold">Cell Biology Quiz</p>
              <p className="font-[roboto]">
                This quiz has been made available for you.
              </p>
            </div>
            <div className="text-right">
              <Link to="/student-quiz">
                <p className="mt-5 border-[1px] p-2 rounded-[10px] inline-block text-white bg-purple-600/90 hover:scale-105 transition-all ease-linear cursor-pointer font-[poppins] ">
                  Take Quiz
                </p>
              </Link>
            </div>
          </div>
          <div className="border-[1px] shadow-md p-3 w-[280px] rounded-2xl  border-purple-400/40">
            <div>
              <p className="font-bold text-purple-500 italic">New</p>
              <p className="my-3 font-semibold">Cell Biology Quiz</p>
              <p className="font-[roboto]">
                This quiz has been made available for you.
              </p>
            </div>
            <div className="text-right">
              <p className="mt-5 font-[poppins] border-[1px] p-2 rounded-[10px] inline-block text-white bg-purple-600/90 hover:scale-105 transition-all ease-linear cursor-pointer ">
                Take Quiz
              </p>
            </div>
          </div>
          <div className="border-[1px] shadow-md p-3 w-[280px] rounded-2xl  border-purple-400/40">
            <div>
              <p className="font-bold text-gray-500 italic">Taken</p>
              <p className="my-3 font-semibold">Cell Biology Quiz</p>
              <p className="font-[roboto]">
                This quiz has already been taken by you.
              </p>
            </div>
            <div className="text-right">
              <p className="mt-5 border-[1px] p-2 rounded-[10px] inline-block text-white bg-purple-600/90 hover:scale-105 transition-all ease-linear cursor-pointer font-[poppins]">
                View details
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
