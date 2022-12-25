import { Component } from "@core/Component";

export class App extends Component {
  stateInit() {
    return {
      count: 0,
    };
  }

  eventInit() {
    const NumberButton = document.querySelector("#number-group");
    NumberButton.addEventListener(
      "click",
      ({ target }) => {
        if (!target.dataset.count) return;
        let { count } = this.state;
        if (count === 0) {
          if (target.dataset.count === "0") {
            return;
          }
          const updateCount = target.dataset.count;
          this.setState({
            count: (count = updateCount),
          });
          return;
        }
        const firstnumber = (count += target.dataset.count);
        this.setState({
          count: (count = firstnumber),
        });
      },
      { once: true }
    );
    const CalculateButton = document.querySelector(".calculate");
    CalculateButton.addEventListener("click", () => {
      let { count } = this.state;
      const CalculateNumber = eval(count);
      this.setState({
        count: (count = CalculateNumber),
      });
    });
  }
  CalculateAction() {
    const CalculateButton = document.querySelector("#calculate-group");
    CalculateButton.addEventListener(
      "click",
      ({ target }) => {
        let { count } = this.state;
        const symbol = target.dataset.symbol;
        this.setState({
          count: (count += symbol),
        });
      },
      { once: true }
    );
  }

  onUpdate() {}

  onMounted() {}

  template() {
    const { count } = this.state;

    return `
    <input value="${count}" type="text" readonly>
      <div id="container">
        <div id="number-group">
            <button tpye="button" data-count="7">7</button>
            <button tpye="button" data-count="8">8</button>
            <button tpye="button" data-count="9">9</button>
            <button tpye="button" data-count="4">4</button>
            <button tpye="button" data-count="5">5</button>
            <button tpye="button" data-count="6">6</button>
            <button tpye="button" data-count="1">1</button>
            <button tpye="button" data-count="2">2</button>
            <button tpye="button" data-count="3">3</button>
            <button tpye="button" data-count="0">0</button>
        </div>
        <div id="calculate-group">
            <button type="button" data-symbol="+">+</button>
            <button type="button" data-symbol="-">-</button>
            <button type="button" data-symbol="*">x</button>
            <button type="button" data-symbol="/">÷</button>
        </div>
        <button type="button" class="calculate" data-symbol="calculate">=</button>
      </div>
    `;
  }
}
