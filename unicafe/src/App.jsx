import { useState } from "react";

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const average =
    totalFeedback === 0
      ? 0
      : (good * 1 + neutral * 0 + bad * -1) / totalFeedback;
  const posPer = totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;

  if (totalFeedback === 0) {
    return <p>No feedbacks given</p>;
  } else {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={totalFeedback} />
            <StatisticLine text="average" value={average.toFixed(2)} />
            <StatisticLine text="positive" value={`${posPer.toFixed(2)}%`} />
          </tbody>
        </table>
      </div>
    );
  }
};
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = function () {
    setGood(good + 1);
  };

  const handleBad = function () {
    setBad(bad + 1);
  };

  const handleNeutral = function () {
    setNeutral(neutral + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good"></Button>
      <Button handleClick={handleNeutral} text="neutral"></Button>
      <Button handleClick={handleBad} text="bad"></Button>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
