import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
    return (
      <>
        <section className="container p-5">
          <div className="w-100 result">0</div>
          <section className="grid-container m-0 p-0">
            {items.map((item, index) => (
              <div key={item.id} className={`grid-item item${index + 1}`}>
                {item.text}
              </div>
            ))}
          </section>
        </section>
      </>
    );
  }
}

export default Calculator;
