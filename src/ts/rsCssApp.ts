// import Layout  from './ts/layout'

// import HTMLEditor from './ts/HTMLEditor'
import Levels from "./levels";
import CSSEditor from "./CSSEditor";
import { LevelData, LevelStatus, InputResults, SaveData } from "./types";
import Layout from "./layout";
import HTMLEditor from "./HTMLEditor";
import { titleboxColor } from "./constants";

class RsCSSApp {
  private data: LevelData[];

  private levelBox: Levels;

  private cssEdinor: CSSEditor;

  private layout: Layout;

  private htmlEditor: HTMLEditor;

  private currentLevel: number;

  private checkedLevels: number[];

  private helpedLevels: number[];

  private isGameOver: () => boolean;

  private defaultProgressGame: SaveData;

  constructor(data: LevelData[]) {
    this.data = data;
    this.defaultProgressGame = {
      currentLevel: 0,
      checkedLevels: [],
      helpedLevels: [],
    };
    const saveData: SaveData = JSON.parse(
      `${localStorage.getItem("saveData")}`
    );
    this.currentLevel =
      saveData?.currentLevel || this.defaultProgressGame.currentLevel;
    this.checkedLevels =
      saveData?.checkedLevels || this.defaultProgressGame.checkedLevels;
    this.helpedLevels =
      saveData?.helpedLevels || this.defaultProgressGame.helpedLevels;

    this.levelBox = new Levels(data, this.currentLevel);
    this.levelBox.showStatus(this.checkedLevels, LevelStatus.check);
    this.levelBox.showStatus(this.helpedLevels, LevelStatus.help);
    this.cssEdinor = new CSSEditor(data);
    this.layout = new Layout(data, this.currentLevel);
    this.htmlEditor = new HTMLEditor(data, this.currentLevel);

    this.isGameOver = (): boolean =>
      this.checkedLevels.length === this.data.length;
  }

  public inite(): void {
    this.openLevel(this.currentLevel);
    this.clickLevel();
    this.reset();
    this.clickEnter();
    this.clickHelp();
    this.saveGame();
    if (this.isGameOver()) this.finishedGame();
  }

  private clickLevel(): void {
    this.levelBox.box.addEventListener("click", (e) => {
      const levelNum = Array.from(this.levelBox.elements).indexOf(
        e.target as HTMLElement
      );
      if (levelNum >= 0) this.openLevel(levelNum);
    });
  }

  private openLevel(index: number): void {
    if (index < this.levelBox.elements.length && index >= 0) {
      this.layout.draw(index);
      this.htmlEditor.draw(index);
      this.currentLevel = this.levelBox.switchLevel(this.currentLevel, index);
    } else if (index < 0) {
      this.openLevel(0);
    } else {
      this.openLevel(this.levelBox.elements.length - 1);
    }
    this.cssEdinor.clearInput();
  }

  private reset(): void {
    this.levelBox.resetBTN?.addEventListener("click", () => {
      this.checkedLevels = this.defaultProgressGame.checkedLevels;
      this.helpedLevels = this.defaultProgressGame.helpedLevels;
      this.levelBox.showStatus(this.checkedLevels, LevelStatus.check);
      this.layout.titleBox.style.color = "";
      this.levelBox.box.classList.remove("unactive");
      this.openLevel(this.defaultProgressGame.currentLevel);
    });
  }

  private setCheckedLevels(levelNum: number): void {
    if (!this.checkedLevels.includes(levelNum)) {
      this.checkedLevels.push(levelNum);
    }
    this.levelBox.showStatus(this.checkedLevels, LevelStatus.check);
  }

  private setHelpedLevels(levelNum: number): void {
    if (!this.helpedLevels.includes(levelNum)) {
      this.helpedLevels.push(levelNum);
    }
    this.levelBox.showStatus(this.checkedLevels, LevelStatus.check);
    this.levelBox.showStatus(this.helpedLevels, LevelStatus.help);
  }

  private clickEnter(): void {
    this.cssEdinor.enterBTN.addEventListener("click", () => {
      if (this.cssEdinor.checkInput(this.currentLevel)) {
        this.showCheckInputResult(InputResults.win);
      } else {
        this.showCheckInputResult(InputResults.fail);
      }
    });

    document.addEventListener("keyup", (e) => {
      if (
        document.activeElement === this.cssEdinor.input &&
        e.code === "Enter"
      ) {
        const event = new Event("click");
        this.cssEdinor.enterBTN.dispatchEvent(event);
        this.cssEdinor.enterBTN.style.animation = "click 500ms ease";
        setTimeout(() => {
          this.cssEdinor.enterBTN.style.animation = "";
        }, 550);
      }
    });
  }

  private showCheckInputResult(message: InputResults): void {
    if (message === InputResults.win || message === InputResults.help) {
      this.layout.swichOnIlluminate();
      this.setCheckedLevels(this.currentLevel);

      if (message === InputResults.help)
        this.setHelpedLevels(this.currentLevel);
      if (this.isGameOver()) {
        this.finishedGame();
      } else {
        setTimeout(() => {
          this.openLevel(this.currentLevel + 1);
        }, 1000);
      }
    } else if (message === InputResults.fail) {
      document.querySelectorAll(".editor").forEach((item) => {
        if (item && item instanceof HTMLElement) {
          const editorStyle = item.style;
          editorStyle.animation = "tremb 0.04s linear infinite alternate";
          setTimeout(() => {
            editorStyle.animation = "";
          }, 400);
        }
      });
    }
  }

  private clickHelp(): void {
    this.cssEdinor.clearInput();
    this.layout.helpBTN.addEventListener("click", () => {
      this.layout.helpBTN.style.pointerEvents = "none";
      this.cssEdinor
        .typeWriter(this.cssEdinor.getValidInput(this.currentLevel), 200)
        .then(() => this.showCheckInputResult(InputResults.help))
        .then(() => {
          this.layout.helpBTN.style.pointerEvents = "auto";
        });
    });
  }

  private saveGame(): void {
    window.addEventListener("beforeunload", () => {
      const saveData: SaveData = {
        currentLevel: this.currentLevel,
        checkedLevels: this.checkedLevels,
        helpedLevels: this.helpedLevels,
      };
      localStorage.setItem("saveData", JSON.stringify(saveData));
    });
  }

  private finishedGame(): void {
    if (this.helpedLevels.length === 0) {
      this.layout.addTitle("Congratulations! You have passed all levels.");
    } else {
      this.layout.addTitle(
        "You passed all the levels, but there are those levels that are passed with the help. Press reset to start over."
      );
    }
    this.layout.titleBox.style.color = titleboxColor;
    this.levelBox.box.classList.add("unactive");
  }
}

export default RsCSSApp;
