import React, { useState } from "react";
import data from "./data";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);

    if (amount <= 0) {
      amount = 1;
    }
    if (amount > 8) {
      amount = 8;
    }

    setText(data.slice(0, amount));
  };
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  return (
    <section className="section-center">
      <h3>SampleParagraph generater</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">Generate</button>
      </form>

      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{text}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
