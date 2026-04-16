import "./App.css";
import { useState } from "react";

const daddyJokes = [
  {
    question: "Why don't skeletons fight each other?",
    answer: "They don't have the guts.",
  },
  {
    question: "What do you call a fake noodle?",
    answer: "An impasta.",
  },
  {
    question: "Why did the scarecrow win an award?",
    answer: "Because he was outstanding in his field.",
  },
];

function App() {
  const [activeIndex, setActiveIndex] = useState<number | undefined>();
  const [activeMultiple, setActiveMultiple] = useState<number[]>([]);

  return (
    <>
      <h1>Accordion for Daddy Jokes</h1>

      <h2>Only one can be opened</h2>
      <div className="accordion-items">
        {daddyJokes.map(({ question, answer }, index) => (
          <div key={question}>
            <div
              className="accordion-title"
              onClick={() => setActiveIndex(index)}
            >
              <div>{question}</div>
              <div>+</div>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">{answer}</div>
            )}
          </div>
        ))}
      </div>

      <div>
        <h2>Multiple can be opened</h2>
        <div className="accordion-items">
          {daddyJokes.map(({ question, answer }, index) => (
            <div key={question}>
              <div
                className="accordion-title"
                onClick={() => setActiveMultiple((prev) => [...prev, index])}
              >
                <div>{question}</div>
                <div>+</div>
              </div>
              {activeMultiple.includes(index) && (
                <div className="accordion-content">{answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
