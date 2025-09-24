import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function ReviewQuiz() {
  const location = useLocation();
  const { score, totalQuestions, userAnswers, questions } =
    location.state || {};

  // If no data was passed, show an error state
  if (!location.state) {
    return (
      <div className="min-h-screen flex items-center justify-center font-[inter]">
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

  return (
    <motion.div
      initial={{ opacity: 0, x: -600 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen bg-gray-50 py-8 px-4 font-[roboto] sm:font-[inter]"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        {/* Quiz Title and Progress */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Reviewing Quiz: Skeletal System
          </h2>
          <div className="flex justify-between flex-col items-center">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium">
              {score}/{totalQuestions} Questions Correct
            </span>
          </div>
        </div>

        {/* Questions Review */}
        <div className="space-y-8">
          {questions.map((question, index) => {
            const userAnswerIndex = userAnswers[index];
            const isCorrect = userAnswerIndex === question.correctAnswer;
            const userAnswer = question.options[userAnswerIndex];
            const correctAnswer = question.options[question.correctAnswer];

            return (
              <div key={question.id} className="border-b pb-6">
                {/* Question Header */}
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Question {index + 1}
                </h3>

                {/* Question Text */}
                <p className="text-gray-700 mb-4">{question.question}</p>

                {/* User's Answer */}
                <div className="mb-2">
                  <span className="font-medium text-gray-800">
                    Your Answer:{" "}
                  </span>
                  <span
                    className={isCorrect ? "text-green-600" : "text-red-600"}
                  >
                    {userAnswer}
                  </span>
                </div>

                {/* Correct Answer (only show if wrong) */}
                {!isCorrect && (
                  <div className="mb-4">
                    <span className="font-medium text-gray-800">
                      Correct Answer:{" "}
                    </span>
                    <span className="text-green-600">{correctAnswer}</span>
                  </div>
                )}

                {/* Explanation */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="font-medium text-gray-800 block mb-2">
                    Explanation:
                  </span>
                  <p className="text-gray-700">{question.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Back to Dashboard Button */}
        <div className="text-center mt-8">
          <Link
            to="/student-dashboard"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
