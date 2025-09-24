import { div } from "framer-motion/client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const skeletalSystemQuiz = [
  {
    id: 1,
    question: "What is the primary function of the skeletal system?",
    options: [
      "To produce blood cells",
      "To provide structural support and protect organs",
      "To store minerals like calcium",
      "To facilitate movement through muscle attachment",
    ],
    correctAnswer: 1,
    explanation:
      "While the skeletal system does all of these, its primary function is structural support and protection of vital organs.",
  },
  {
    id: 2,
    question: "Which bone is the longest in the human body?",
    options: ["Humerus", "Tibia", "Femur", "Radius"],
    correctAnswer: 2,
    explanation:
      "The femur (thigh bone) is the longest and strongest bone in the human body.",
  },
  {
    id: 3,
    question: "What is the substance inside bones that produces blood cells?",
    options: ["Cartilage", "Marrow", "Calcium", "Collagen"],
    correctAnswer: 1,
    explanation:
      "Bone marrow is the spongy tissue inside bones that produces red blood cells, white blood cells, and platelets.",
  },
  {
    id: 4,
    question: "How many bones are there in the adult human body?",
    options: ["187", "206", "224", "250"],
    correctAnswer: 1,
    explanation:
      "Adults have 206 bones, while babies are born with about 270 bones that fuse together as they grow.",
  },
  {
    id: 5,
    question: "Which of these is NOT a type of bone?",
    options: ["Long bones", "Short bones", "Flat bones", "Hard bones"],
    correctAnswer: 3,
    explanation:
      "The main types of bones are long, short, flat, irregular, and sesamoid. 'Hard bones' is not a classification.",
  },
];

export default function StudentQuiz() {
  const [userAnswers, setUserAnswers] = useState({});

  const handleAnswerSelect = (questionIndex, optionIndex) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  const allQuestionsAnswered =
    Object.keys(userAnswers).length === skeletalSystemQuiz.length;

  const calculateScore = () => {
    let score = 0;
    skeletalSystemQuiz.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

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
        className="flex flex-col items-center "
      >
        <p className="font-extrabold text-4xl mt-20 mb-7">Biology Quiz</p>
        {skeletalSystemQuiz.map((question, index) => (
          <div
            key={question.id}
            className="w-[300px] sm:w-[500px] p-5 mb-5 rounded-2xl shadow-md bg-white"
          >
            <h3 className="mb-5">
              <span className="font-extrabold text-2xl ">
                Question {index + 1}:
              </span>
              <br />
              <span className="font-medium text-gray-500">
                {question.question}
              </span>
            </h3>
            <div>
              {question.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className={`border-[1px] py-2 px-4 cursor-pointer hover:scale-105 transition-all ease-linear delay-75 rounded-[10px] mb-2 ${
                    userAnswers[index] === optionIndex
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleAnswerSelect(index, optionIndex)}
                >
                  <div className="flex justify-between items-center">
                    {option}
                    {}
                    {userAnswers[index] === optionIndex && (
                      <img
                        src="/check.svg"
                        alt="Selected"
                        className="w-5 h-5"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {}
        {allQuestionsAnswered ? (
          <Link
            to="/quiz-results"
            state={{
              score: calculateScore(),
              totalQuestions: skeletalSystemQuiz.length,
              userAnswers: userAnswers,
              questions: skeletalSystemQuiz,
            }}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors my-4"
          >
            Submit Quiz
          </Link>
        ) : (
          <button
            disabled
            className="bg-gradient-to-r from-blue-100 to-blue-300 text-gray-500 px-6 py-3 rounded-lg font-semibold cursor-not-allowed my-4"
          >
            Answer all questions to submit ({Object.keys(userAnswers).length}/
            {skeletalSystemQuiz.length})
          </button>
        )}
      </motion.div>
    </div>
  );
}
