import React, { useState } from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [obj, setObj] = useState({ next: null, total: null });

  const handleClick = (e) => {
    setObj((obj) => calculate(obj, e.target.innerText));
  };

  const items = [
    {
      id: 1,
      text: 'AC',
    },
    {
      id: 2,
      text: '+/-',
    },
    {
      id: 3,
      text: '%',
    },
    {
      id: 4,
      text: '÷',
    },
    {
      id: 5,
      text: '7',
    },
    {
      id: 6,
      text: '8',
    },
    {
      id: 7,
      text: '9',
    },
    {
      id: 8,
      text: 'x',
    },
    {
      id: 9,
      text: '4',
    },
    {
      id: 10,
      text: '5',
    },
    {
      id: 11,
      text: '6',
    },
    {
      id: 12,
      text: '-',
    },
    {
      id: 13,
      text: '1',
    },
    {
      id: 14,
      text: '2',
    },
    {
      id: 15,
      text: '3',
    },
    {
      id: 16,
      text: '+',
    },
    {
      id: 17,
      text: '0',
    },
    {
      id: 18,
      text: '.',
    },
    {
      id: 19,
      text: '=',
    },
  ];

  const { total, next } = obj;
  return (
    <>
      <section className="container p-5">
        <div className="w-100 result">{next || total || 0}</div>
        <section className="grid-container m-0 p-0">
          {items.map((item, index) => (
            <button
              type="button"
              key={item.id}
              className={`grid-item item${index + 1}`}
              onClick={handleClick}
            >
              {item.text}
            </button>
          ))}
        </section>
      </section>
    </>
  );
};

export default Calculator;
