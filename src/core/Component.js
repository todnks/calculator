export class Component {
  #element;
  state = {};

  constructor(element) {
    this.#element = element;

    this.setup();
    this.render();
  }

  stateInit() {
    return {};
  }
  NumberAction() {}
  CalculateAction() {}
  setup() {
    this.state = this.stateInit();
  }
  onMounted() {
    this.CalculateAction();
  }
  setState(updateState) {
    this.state = { ...this.state, ...updateState };
    this.render(true);
  }

  template() {
    return '';
  }

  render() {
    if (this.#element) this.#element.innerHTML = this.template();
    this.NumberAction();
    this.onMounted();
  }
}
