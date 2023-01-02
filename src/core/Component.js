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

  addEvent(eventType, selector, callback, option = {}) {
    const selectList = [...document.querySelectorAll(selector)];

    if (selectList.length > 1) {
      selectList.forEach((item) =>
        item.addEventListener(eventType, callback, option)
      );
      return;
    }

    const selectItem = selectList.pop();
    if (!selectItem) return;
    selectItem.addEventListener(
      eventType,
      (event) => {
        callback(event);
      },
      option
    );
  }

  CalculateAction() {}

  setup() {
    this.state = this.stateInit();
  }
  onMounted() {
    this.CalculateAction();
  }
  setState() {
    this.state = { ...this.state };
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
