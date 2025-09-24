import { useLocation, Link } from "react-router-dom";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function QuizResults() {
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, []);
  const location = useLocation();

  // Get the data passed from the quiz page
  const { score, totalQuestions, userAnswers, questions } =
    location.state || {};

  // If no data was passed, show an error state
  if (!location.state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            No quiz data found
          </h1>
          <p className="text-gray-600">Please complete a quiz first</p>
          <Link
            to="/student-dashboard"
            className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  // Calculate percentage
  const percentage = Math.round((score / totalQuestions) * 100);

  // Analyze performance to generate knowledge breakdown
  const analyzePerformance = () => {
    const correctQuestions = [];
    const incorrectQuestions = [];

    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correctQuestions.push(question);
      } else {
        incorrectQuestions.push(question);
      }
    });

    return { correctQuestions, incorrectQuestions };
  };

  const { correctQuestions, incorrectQuestions } = analyzePerformance();

  // Generate encouraging message based on score
  const getScoreMessage = () => {
    if (percentage >= 90) return "Excellent Work!";
    if (percentage >= 80) return "Well Done!";
    if (percentage >= 70) return "Good Job!";
    if (percentage >= 60) return "Not Bad!";
    return "Keep Practicing!";
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
      <div
       
        className="min-h-screen bg-gray-50 py-8 px-4 "
      >
        <motion.div
         initial={{ opacity: 0, y: -600 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
         className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8 mt-15">
          {/* Score Section */}
          <div className="text-center mb-8">
            <h1 className="text-6xl font-bold text-blue-600 mb-2">
              {percentage}%
            </h1>
            <h2 className="text-2xl font-semibold text-gray-800">
              {getScoreMessage()}
            </h2>
            <p className="text-gray-600 mt-2">
              You got {score} out of {totalQuestions} questions correct
            </p>
          </div>

          {/* Knowledge Breakdown */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Knowledge Breakdown
            </h3>

            {/* Strengths */}
            {correctQuestions.length > 0 && (
              <div className="mb-4">
                <p className="text-green-600 font-medium">
                  You excelled in these areas:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {correctQuestions.slice(0, 2).map((question, index) => (
                    <li key={index} className="mb-1">
                      {question.question.split("?")[0]}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Areas to improve */}
            {incorrectQuestions.length > 0 && (
              <div>
                <p className="text-orange-600 font-medium">
                  Review these topics:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {incorrectQuestions.slice(0, 2).map((question, index) => (
                    <li key={index} className="mb-1">
                      {question.question.split("?")[0]}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action Button */}
          <div className="text-center">
            <Link
              to="/review-quiz"
              state={{ score, totalQuestions, userAnswers, questions }}
              className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Review Full Answers
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
