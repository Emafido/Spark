import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./Components/LandingPage";
import StudentDashboard from "./Components/StudentDashboard";
import TeacherAnalytics from "./Components/TeacherAnalytics";
import TeacherDashboard from "./Components/TeacherDashboard";
import Summaries from "./Components/Summaries";
import StudentQuiz from "./Components/StudentQuiz";
import QuizResults from "./Components/QuizResults";
import ReviewQuiz from "./Components/ReviewQuiz";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/teacher-analytics" element={<TeacherAnalytics />} />
            <Route path="/summaries" element={<Summaries />} />
            <Route path="/student-quiz" element={<StudentQuiz />} />
            <Route path="/quiz-results" element={<QuizResults />} />
            <Route path="/review-quiz" element={<ReviewQuiz />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
