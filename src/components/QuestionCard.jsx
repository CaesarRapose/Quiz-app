function QuestionCard({ questionData, selected, setSelected }) {
  return (
    <div>
      <h2 className="question">{questionData.question}</h2>

      {questionData.options.map((option) => (
        <label key={option} className="option">
          <input
            type="radio"
            name="answer"
            value={option}
            checked={selected === option}
            onChange={(e) => setSelected(e.target.value)}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default QuestionCard;
