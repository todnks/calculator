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
  eventInit() {}
  CalculateAction() {}
  setup() {
    this.state = this.stateInit();
  }
  onMounted() {}
  onUpdate() {}
  setState(updateState) {
    this.state = { ...this.state, ...updateState };
    this.render(true);
  }

  template() {
    return "";
  }

  render(isUpdate = false) {
    if (this.#element) this.#element.innerHTML = this.template();
    this.eventInit();
    this.CalculateAction();
    if (isUpdate) {
      this.onUpdate();
      return;
    }

    this.onMounted();
  }
}
