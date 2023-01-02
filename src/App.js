import { Component } from '@core/Component';

export class App extends Component {
  stateInit() {
    return {
      count: '0',
      history: [],
      number1: '',
      number2: '',
      calculate: '',
    };
  }

  NumberAction() {
    let { count, calculate, number1, number2 } = this.state;
    this.addEvent(
      'click',
      '#number-group',
      ({ target }) => {
        const Count = target.dataset.count;
        if (!target.dataset.count) return;

        if (count === '0') {
          this.setState({
            count: (count = Count),
            number1: (number1 = Count),
          });
          if (Count === '0') {
            this.setState();
            return;
          }
          return;
        }
        if (calculate != '') {
          this.setState({
            number2: (number2 += Count),
          });
        }
        if (!calculate) {
          this.setState({
            number1: (number1 += Count),
          });
        }
        this.setState({
          count: (count += Count),
        });
      },
      { once: true }
    );
  }
  CalculateAction() {
    let { count, calculate, history, number1, number2 } = this.state;
    const result = `${Number(number1)}${calculate}${Number(number2)}`;
    this.addEvent(
      'click',
      '#calculate-group',
      ({ target }) => {
        const symbol = target.dataset.symbol;
        if (symbol === 'calculate') {
          if (number2 === '') {
            this.setState();
            return;
          }
          const calculateNumber = eval(result);
          const answerNumber = [`${result} = ${calculateNumber}`];
          history.push(answerNumber);
          if (history.length >= 10) {
            history.shift();
          }
          this.setState({
            count: (count = calculateNumber),
            number1: (number1 = calculateNumber),
            number2: '',
            calculate: '',
          });
          return;
        }
        if (calculate) {
          this.setState();
          return;
        }
        this.setState({
          count: (count += symbol),
          calculate: symbol,
        });
      },
      { once: true }
    );
    this.addEvent(
      'click',
      '.reset-button',
      () => {
        this.setState({
          count: '0',
          calculate: '',
          number2: '',
          number1: '',
        });
      },
      { once: true }
    );
  }

  template() {
    const { count, history } = this.state;
    return `
    <input class="display" value="${count}" type="text" readonly>
    <div id="container">
        <div class="reset-button">
          <button type="button" data-symbol="reset" class="reset">AC</button>
        </div>
        <div id="NumberPade">
          <div id="number-group">
            <button type="button" data-count="7">7</button>
            <button type="button" data-count="8">8</button>
            <button type="button" data-count="9">9</button>
            <button type="button" data-count="4">4</button>
            <button type="button" data-count="5">5</button>
            <button type="button" data-count="6">6</button>
            <button type="button" data-count="1">1</button>
            <button type="button" data-count="2">2</button>
            <button type="button" data-count="3">3</button>
            <button type="button" data-count="0">0</button>
         </div>
          <div id="calculate-group">
            <button type="button" data-symbol="/">÷</button>
            <button type="button" data-symbol="+">+</button>
            <button type="button" data-symbol="-">-</button>
            <button type="button" data-symbol="*">x</button>
            <button type="button" class="calculate" data-symbol="calculate">=</button>
          </div>
          </div>
          <div id="history">
            ${history}
            </div>
      </div>
    `;
  }
}
