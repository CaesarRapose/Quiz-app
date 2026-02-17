import { useLocation, useNavigate } from "react-router-dom";
import { questions } from "./data/questions";

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;

  return (
    <div>
      <h1>Result</h1>
      <h2>
        Your Score: {score} / {questions.length}
      </h2>

      <button onClick={() => navigate("/")}>Restart Quiz</button>
    </div>
  );
}

export default ResultPage;
