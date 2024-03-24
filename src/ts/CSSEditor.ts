import { LevelData } from "./types";

class CSSEditor {
  public readonly enterBTN: HTMLElement;

  public readonly input: HTMLInputElement;

  private data: LevelData[];

  constructor(data: LevelData[]) {
    this.data = data;

    this.enterBTN = document.getElementById("enter-css") as HTMLElement;
    if (!this.enterBTN) throw new Error("#enter-css is not found");

    this.input = document.getElementById("input-css") as HTMLInputElement;
    if (!this.input) throw new Error("#input-css is not found");
    if (this.input.tagName !== "INPUT")
      throw new Error("#input-css is not input");
  }

  public checkInput(level: number): boolean {
    const { validSelectors } = this.data[level];
    const inputSelector: string = this.getInput();
    return validSelectors.includes(inputSelector);
  }

  public getInput(): string {
    return this.input.value.replace(/\s+/g, " ").trim();
  }

  public getValidInput(level: number): string {
    return this.data[level].validSelectors[0];
  }

  public clearInput(): void {
    this.input.value = "";
  }

  public async typeWriter(text: string, speed: number): Promise<void> {
    const outHTML = this.input;
    outHTML.value = "";

    function type(c: string): Promise<void> {
      return new Promise((resolve) => {
        setTimeout(() => {
          outHTML.value += c;
          resolve();
        }, speed);
      });
    }

    const out = text.split("");
    for (let i = 0; i < out.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await type(out[i]);
    }
  }
}

export default CSSEditor;
