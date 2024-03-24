function createEl(teg: string, ...className: string[]): Element {
  const el = document.createElement(teg);
  className.forEach((item) => {
    el.classList.add(item);
  });
  return el;
}

export default createEl;
