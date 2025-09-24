import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="font-[inter]">
      <div>
        <img
          src="/bg2.jpg"
          alt="Background image"
          className="h-screen  absolute -z-10 object-cover w-screen"
        />
      </div>
      <div className="-z-10 absolute inset-0 bg-black/10 bg-gradient-to-b from-black/60 to-black/50"></div>
      <nav>
        <div className="flex bg-transparent text-white items-center justify-between p-4 backdrop-blur-2xl shadow-2xl">
          <h1 className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent font-extrabold text-2xl shadow-2xl">
            Spark
          </h1>
          <ul className="hidden sm:flex gap-8">
            <li className="cursor-pointer hover:text-gray-300 transition-all ease-">
              Features
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-all ease-linear hover:animate-pulse">
              Pricing
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-all ease-linear hover:animate-pulse">
              Resources
            </li>
          </ul>
        </div>
      </nav>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="py-15 text-center flex flex-col justify-center items-center p-3 sm:pt-30 lg:pt-40   gap-1.3"
      >
        <h1 className=" text-blue-100 font-bold text-2xl sm:text-4xl sm:font-extrabold mb-3 lg:text-5xl sm:w-[600px] lg:w-[850px] ">
          Spark: AI-Powered Learning Tools for{" "}
          <span className="text-cyan-500">Teachers</span> &{" "}
          <span className="text-purple-500">Students</span>
        </h1>
        <p className="text-gray-400 sm:w-[400px] font-[poppins] lg:w-[550px] ">
          Unlock the potential of personalized learning with our innovative AI
          tools. Empower educators and students to achieve academic excellence.
        </p>
        <div className=" flex gap-2.5 text-center flex-col sm:flex-row mt-3 lg:mt-7">
          <Link to="teacher-dashboard">
            <button className="border-[1px] bg-cyan-500 text-white font-bold shadow-2xl border-cyan-500 brightness-110 shadow-cyan px-8 py-1.5 lg:py-2 cursor-pointer hover:scale-105 transition-all ease-in-out rounded-[10px]  ">
              I'm a Teacher
            </button>
          </Link>
          <Link to="student-dashboard">
            <button className="border-[1px] bg-purple-500 text-white font-bold shadow-2xl border-purple-500 brightness-110 shadow-purple px-8 py-1.5 lg:py-2 cursor-pointer hover:scale-105 transition-all ease-in-out rounded-[10px]">
              I'm a Student
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
