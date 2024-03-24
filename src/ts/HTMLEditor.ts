import { LayoutRow, LevelData, Lamp } from "./types";
import createEl from "./createEl";

class HTMLEditor {
  private rows: LayoutRow[];

  public readonly box: HTMLElement;

  private readonly data: LevelData[];

  constructor(data: LevelData[], currentLevel = 0) {
    this.data = data;
    this.rows = data[currentLevel].layoutRows;
    this.box = document.getElementById("tegs-box") as HTMLElement;
    if (!this.box) throw new Error("#tegs-box is not found");

    this.clear();
    this.create();
    HTMLEditor.illuminate();
  }

  public draw(level: number): void {
    this.rows = this.data[level].layoutRows;
    this.clear();
    this.create();
    HTMLEditor.illuminate();
  }

  private create(): void {
    this.rows.forEach((row: LayoutRow, lineIndex: number) => {
      const [lineTextOpenedTeg, lineTextClosedTeg] = row.line;

      const lineOpenedTeg = createEl("div", "tegs__el");
      lineOpenedTeg.setAttribute("rs-illuminator", `L${lineIndex}`);
      lineOpenedTeg.textContent = lineTextOpenedTeg;
      this.box.append(lineOpenedTeg);

      row.lamps.forEach((lampData: Lamp, lampIndex: number) => {
        const lampTeg = createEl("div", "tegs__el");
        lampTeg.setAttribute("rs-illuminator", `L${lineIndex}L${lampIndex}`);
        lampTeg.textContent = lampData.htmlEditorData;
        this.box.append(lampTeg);
      });

      const lineClosedTeg = createEl("div", "tegs__el");
      lineClosedTeg.setAttribute("rs-illuminator", `L${lineIndex}`);
      lineClosedTeg.textContent = lineTextClosedTeg;
      this.box.append(lineClosedTeg);
    });
  }

  private clear(): void {
    this.box.innerHTML = "";
  }

  private static illuminate(): void {
    document.querySelectorAll(".tegs__el").forEach((teg) => {
      teg.addEventListener("mouseover", (e) => {
        const el = e.target as HTMLElement;
        const attr = el.getAttribute("rs-illuminator");
        document
          .querySelectorAll(`[rs-illuminator=${attr}]`)
          .forEach((item) => item.classList.add("light"));
      });

      teg.addEventListener("mouseout", (e) => {
        const el = e.target as HTMLElement;
        const attr = el.getAttribute("rs-illuminator");
        document
          .querySelectorAll(`[rs-illuminator=${attr}]`)
          .forEach((item) => item.classList.remove("light"));
      });
    });
  }
}

export default HTMLEditor;
