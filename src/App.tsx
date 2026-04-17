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

  const handleSingleAccordionClick = (index: number) => {
    setActiveIndex(index === activeIndex ? undefined : index);
  };

  // ask this
  const handleMultipleAccordionClick = (index: number) => {
    setActiveMultiple((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  };

  return (
    <>
      <h1>Accordion for Daddy Jokes</h1>

      <div className="accordion-container">
        <h2>Only one can be opened</h2>
        <div className="accordion-items">
          {daddyJokes.map(({ question, answer }, index) => (
            <div
              key={question}
              className="accordion-item"
              onClick={() => handleSingleAccordionClick(index)}
            >
              <div className="accordion-title">
                <div>{question}</div>
                <div>+</div>
              </div>
              {activeIndex === index && (
                <div className="accordion-content">{answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="accordion-container">
        <h2>Multiple can be opened</h2>
        <div className="accordion-items">
          {daddyJokes.map(({ question, answer }, index) => (
            <div key={question} className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => handleMultipleAccordionClick(index)}
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
