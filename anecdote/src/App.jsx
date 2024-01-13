import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const points = [0, 0, 0, 0, 0, 0, 0, 0];

  const [copy, setCopy] = useState([...points]);
  const [selected, setSelected] = useState(0);
  const [max, setMax] = useState(0);

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const findAnecdoteWithMostVotes = (votes) => {
    const indexOfMax = votes.indexOf(Math.max(...votes));
    setMax(indexOfMax);
  };

  const handleVote = function () {
    const newCopy = [...copy];
    newCopy[selected] += 1;

    setCopy(newCopy);

    findAnecdoteWithMostVotes(newCopy);
  };

  const handleSelect = function () {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdotes[selected]} has {copy[selected]} votes
      </p>
      <Button onClick={handleVote} text={"vote"}></Button>
      <Button onClick={handleSelect} text={"next anecdote"}></Button>
      <h1>Anecdote with most votes</h1>
      <p>
        {anecdotes[max]} has {copy[max]} votes
      </p>
    </div>
  );
};

export default App;
