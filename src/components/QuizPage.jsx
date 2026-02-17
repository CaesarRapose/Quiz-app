import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "./data/questions.js";
import QuestionCard from "./QuestionCard.jsx";
import "../index.css";

function QuizPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  const handleNext = () => {
    if (selected === questions[currentQ].answer) {
      setScore(score + 1);
    }

    setSelected("");

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      navigate("/result", {
        state: { score },
      });
    }
  };

  return (
    <div className="container">
      <h1>🎯 Quiz App</h1>

      <div style={{ marginBottom: "1.5rem" }}>
        <div
          style={{
            fontSize: "0.9rem",
            color: "#9ca3af",
            marginBottom: "0.5rem",
          }}
        >
          Question {currentQ + 1} of {questions.length}
        </div>
        <div
          style={{
            height: "4px",
            background: "#374151",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
              width: `${((currentQ + 1) / questions.length) * 100}%`,
              transition: "width 0.3s ease",
            }}
          ></div>
        </div>
      </div>

      <QuestionCard
        questionData={questions[currentQ]}
        selected={selected}
        setSelected={setSelected}
      />

      <button onClick={handleNext} disabled={!selected}>
        {currentQ + 1 === questions.length ? "Submit" : "Next →"}
      </button>
    </div>
  );
}

export default QuizPage;
