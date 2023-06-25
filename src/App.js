import React from "react";
import "./index.scss";

const questions = [
  {
    title: "React - це ... ?",
    variants: ["бібліотека", "фреймворк", "додаток"],
    correct: 0,
  },
  {
    title: "Компонент - це ... ",
    variants: [
      "додаток",
      "частина програми або сторінки",
      "те, що я не знаю, що таке",
    ],
    correct: 1,
  },
  {
    title: "Що таке JSX?",
    variants: [
      "Це простий HTML",
      "Це функція",
      "Це той же HTML, але з можливістю виконувати JS-код",
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img
        height={150}
        width={150}
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
      />
      <h2>
        Ви відгадали {correct} відповіді з {questions.length}
      </h2>
      <a href="./">
        <button>Спробувати знову</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClikVariant }) {
  const presentage = (step / 3) * 100;
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${presentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => {
          return (
            <li
              onClick={() => {
                onClikVariant(index);
              }}
              key={text}
            >
              {text}{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setcorrect] = React.useState(0);
  const question = questions[step];
  const onClikVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);
    if (index === question.correct) {
      setcorrect(correct + 1);
    }
  };
  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClikVariant={onClikVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
