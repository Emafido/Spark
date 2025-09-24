import { Link } from "react-router-dom";
import GradeDistribution from "./GradeDistribution";
import StudentTable from "./Studentname";
import { motion } from "framer-motion";

export default function TeacherAnalytics() {
  return (
    <div className="font-[inter]">
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
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="flex gap-2 mt-20"
      >
        <div>
          <div className="flex items-start justify-center ">
            <ul className=" hidden sm:flex bg-white  flex-col gap-9 mt-10  border-cyan-500 border-[1px]  rounded-tr-2xl rounded-br-2xl font-[roboto]">
              <Link to="/teacher-dashboard">
                <li className="hover:text-white cursor-pointer transition-all ease-linear hover:scale-105 hover:bg-blue-300 mt-6 mr-1 p-3 rounded-tr-2xl rounded-br-2xl">
                  Home
                </li>
              </Link>
              <Link to="/summaries">
                <li className="hover:text-white cursor-pointer transition-all ease-linear hover:scale-105 hover:bg-blue-300 mt-6 mr-1 p-3 rounded-tr-2xl rounded-br-2xl ">
                  Summaries
                </li>
              </Link>
              <li className="text-white cursor-pointer transition-all ease-linear scale-105 bg-blue-300 mt-6 mr-1 p-3 rounded-tr-2xl rounded-br-2xl mb-6">
                Analytics
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start sm:flex-row gap-20 sm:gap-2 lg:gap-10 ">
          <div className="sm:border-[1px] sm:shadow-md p-2 sm:p-1 lg:p-2 rounded-3xl">
            <GradeDistribution />
          </div>
          <div className="sm:border-[1px] rounded-3xl sm:w-[320px] lg:w-[600px] ">
            <p className="my-4 mx-3 text-center font-extrabold text-xl">
              Student Performance
            </p>
            <StudentTable />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
