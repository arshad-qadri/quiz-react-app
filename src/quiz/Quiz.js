import React, { useState } from "react";

const que = [
  {
    q: "What is the smallest header in HTML by default?",
    ans: "h6",
    opts: [
      {
        opt: "h1",
      },
      {
        opt: "h3",
      },
      {
        opt: "h5",
      },
      {
        opt: "h6",
      },
    ],
  },
  {
    q: "How many sizes of headers are available in HTML by default?",
    ans: "6",
    opts: [
      {
        opt: "1",
      },
      {
        opt: "3",
      },
      {
        opt: "5",
      },
      {
        opt: "6",
      },
    ],
  },
  {
    q: "HTML files are saved by default with the extension?",
    ans: ".html",
    opts: [
      {
        opt: ".html",
      },
      {
        opt: ".ht",
      },
      {
        opt: ".h",
      },
      {
        opt: "none of the above",
      },
    ],
  },
];

const Quiz = () => {
  const [indNum, setIndNum] = useState(0);
  const handleNext = () => {
    if (indNum < que.length - 1) {
      setIndNum(indNum + 1);
    }
  };
  const handleAns = (itm) => {
    console.log("itm", itm);
  };
  return (
    <>
      <h1> {que[indNum].q} </h1>
      {que[indNum].opts.map((item, ind) => (
        <div key={ind}>
          <input
            type="radio"
            name="ans"
            id={item.opt}
            onClick={() => handleAns(item.opt)}
          />
          <label htmlFor={item.opt}> {item.opt} </label>
        </div>
      ))}
      {indNum < que.length - 1 && <button onClick={handleNext}>next</button>}
      {indNum === que.length - 1 && <button>Submit</button>}
    </>
  );
};

export default Quiz;
