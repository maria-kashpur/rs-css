import { LevelData, LevelStatus } from "./types";
import createEl from "./createEl";
// import Layout from "./layout";
// import rsCssData from "./rsCssData";
// import HTMLEditor from "./HTMLEditor";

class Levels {
  private readonly data: LevelData[];

  public readonly box: HTMLElement;

  public readonly elements: HTMLCollection;

  public resetBTN: HTMLElement | null;

  private currentLevel: number;

  constructor(data: LevelData[], currentLevel = 0) {
    this.data = data;

    this.box = document.getElementById("levels") as HTMLElement;
    if (!this.box) throw new Error("#levels__box is not found");

    this.resetBTN = document.getElementById("reset");

    this.elements = this.box.children;
    this.currentLevel = currentLevel;

    this.clear();

    this.draw();
  }

  public draw(): void {
    this.data.forEach((el, index) => {
      const level = createEl("li", "level");
      if (index === this.currentLevel) level.classList.add(LevelStatus.current);
      level.append(createEl("span", "checkmark"));
      const levelNum = createEl("span", "level__num");
      levelNum.textContent = `${index + 1}. `;
      level.append(levelNum);

      const levelName = createEl("span", "level__name");
      levelName.textContent = el.name;
      level.append(levelName);

      this.box.append(level);
    });
  }

  private clear(): void {
    this.box.innerHTML = "";
  }

  public switchLevel(current: number, next: number): number {
    this.elements[current].classList.remove(LevelStatus.current);
    this.elements[next].classList.add(LevelStatus.current);
    return next;
  }

  public showStatus(data: number[], status: LevelStatus): void {
    Array.from(this.elements).forEach((level, index) => {
      if (data.includes(index)) {
        level.classList.add(status);
      } else {
        level.classList.remove(status);
      }
    });
  }
}

export default Levels;
