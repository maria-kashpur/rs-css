import { LampColor, LayoutRow, LevelData, Lamp, LampStatus } from "./types";
import createEl from "./createEl";

class Layout {
  private rows: LayoutRow[];

  public readonly box: HTMLElement;

  public readonly titleBox: HTMLElement;

  public readonly helpBTN: HTMLElement;

  private readonly data: LevelData[];

  constructor(data: LevelData[], currentLevel = 0) {
    this.data = data;
    this.titleBox = document.getElementById("task-desctiption") as HTMLElement;
    if (!this.titleBox) throw new Error("#task-desctiption is not found");

    this.rows = data[currentLevel].layoutRows;
    this.box = document.getElementById("task-box") as HTMLElement;
    if (!this.box) throw new Error("#task-box is not found");

    this.helpBTN = document.getElementById("task-help") as HTMLElement;
    if (!this.helpBTN) throw new Error("#task-help is not found");

    this.addTitle(data[currentLevel].order);
    this.clear();
    this.create();
    Layout.illuminate();
  }

  public draw(level: number): void {
    this.rows = this.data[level].layoutRows;
    this.addTitle(this.data[level].order);
    this.clear();
    this.create();
    Layout.illuminate();
  }

  private create(): void {
    this.rows.forEach((row: LayoutRow, lineIndex: number) => {
      const line = createEl("div", "line");
      line.setAttribute("rs-illuminator", `L${lineIndex}`);
      line.setAttribute("teg-behold", row.line.join(" "));

      row.lamps.forEach((lampData: Lamp, lampIndex: number) => {
        const lamp = createEl("div", "lamp");
        if (lampData.lampStatus !== null)
          lamp.classList.add(lampData.lampStatus);

        lamp.setAttribute("rs-illuminator", `L${lineIndex}L${lampIndex}`);
        lamp.setAttribute("teg-behold", lampData.title);
        lamp.innerHTML = Layout.createLamp(lampData.color);

        line.append(lamp);
      });
      this.box.append(line);
    });
  }

  private clear(): void {
    this.box.innerHTML = "";
  }

  public addTitle(str: string): void {
    this.titleBox.textContent = str;
  }

  public static createLamp(color: LampColor): string {
    return `<svg class="${color}" width="158" height="154" viewBox="0 0 158 154" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g class="lamp_light" filter="url(#filter_light)">
        <ellipse cx="79" cy="84.5" rx="56" ry="46.5" fill="#FE7044" fill-opacity="0.66" />
      </g>
      <g class="lamp-body">
        <path class="lamp-body_pomp" d="M75.231 29.431C72.011 29.275 69.208 31.485 68.648 34.575C66.53 45.635 60.562 55.962 53.779 64.907C50.144 69.672 47.903 75.635 47.499 82.122C46.581 98.632 59.067 113.262 75.491 114.896C93.213 116.656 108.777 103.359 109.911 85.73C110.361 79.332 108.754 73.305 105.813 68.182C100.248 58.559 95.433 47.322 94.733 36.235C94.487 33.105 92.055 30.528 88.923 30.325L75.233 29.433L75.231 29.431Z" fill="url(#paint_radial_red)" />
        <path d="M79.413 4.69301L88.675 5.25701C95.297 5.70501 100.299 11.351 99.851 17.973L98.967 32.782C98.8502 34.3407 98.1295 35.7922 96.9584 36.8274C95.7873 37.8625 94.2582 38.3995 92.697 38.324L71.267 36.992C69.7084 36.8755 68.2569 36.155 67.2217 34.984C66.1865 33.813 65.6495 32.2841 65.725 30.723L66.609 15.914C67.057 9.29201 72.791 4.24501 79.413 4.69301Z" fill="url(#paint_linear_cap)" />
        <path class="lamp_selected" d="M65.7233 36.3087C65.8529 36.4553 65.9874 36.5966 66.1264 36.7324C63.7223 46.421 58.3497 55.569 52.1872 63.6961C48.3053 68.7857 45.9306 75.1295 45.5029 81.9977L45.5028 81.9977L45.5021 82.011C44.5249 99.5852 57.7989 115.146 75.293 116.886L75.2934 116.886C94.1412 118.758 110.697 104.618 111.906 85.8647C112.385 79.04 110.668 72.6227 107.548 67.1862L107.544 67.1807C102.58 58.5961 98.315 48.8649 97.0362 39.23C97.4769 38.9712 97.8946 38.6691 98.2829 38.3259C99.8447 36.9455 100.806 35.0099 100.961 32.9314L100.963 32.9012L101.847 18.0999C102.366 10.3628 96.5148 3.78282 88.81 3.26157L88.81 3.26153L88.7966 3.26071L79.548 2.69757C79.5457 2.69741 79.5434 2.69726 79.541 2.6971C71.8108 2.17794 65.1354 8.06641 64.6136 15.779L64.6126 15.7948L63.7286 30.6038L63.7273 30.6264C63.6266 32.7082 64.3428 34.7471 65.7233 36.3087Z" stroke="white" stroke-width="4" stroke-linejoin="round" />
      </g>
      <defs>
        <filter id="filter_light" x="0" y="15" width="158" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="11.5" result="effect1_foregroundBlur_8_30" />
        </filter>
        <radialGradient id="paint_radial_red" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(79.453 60.1533) rotate(-175.352) scale(37.4467 48.1474)">
          <stop stop-color="#FF925C" /> <stop offset="1" stop-color="#FF3100" />
        </radialGradient>
        <radialGradient id="paint_radial_yellow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(79.453 60.1533) rotate(-175.352) scale(37.4467 48.1474)">
          <stop stop-color="#FFD15C" /> <stop offset="1" stop-color="#FAFF00" />
        </radialGradient>
        <radialGradient id="paint_radial_blue" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(79.453 60.1533) rotate(-175.352) scale(37.4467 48.1474)">
          <stop stop-color="#5CFFF5" /> <stop offset="1" stop-color="#1FAEDB" />
        </radialGradient>
        <linearGradient id="paint_linear_cap" x1="99.637" y1="22.3527" x2="66.3912" y2="20.2555"
          gradientUnits="userSpaceOnUse"> <stop stop-color="#001F1C" /> 
          <stop offset="0.0459572" stop-color="#002C26" /> <stop offset="0.1178" stop-color="#003730" />
          <stop offset="0.219" stop-color="#003E35" /> <stop offset="0.5" stop-color="#004037" /> 
          <stop offset="0.781" stop-color="#003E35" /> <stop offset="0.8822" stop-color="#003730" /> 
          <stop offset="0.954" stop-color="#002C26" /> <stop offset="1" stop-color="#001F1C" />
        </linearGradient>
      </defs>
      </svg>`;
  }

  // eslint-disable-next-line max-lines-per-function
  private static illuminate(): void {
    document.querySelectorAll(".lamp").forEach((lamp) => {
      const line = lamp.parentElement;

      lamp.addEventListener("mouseover", () => {
        const attr = lamp.getAttribute("rs-illuminator");
        document
          .querySelectorAll(`[rs-illuminator=${attr}]`)
          .forEach((item) => item.classList.add("light"));

        (line as HTMLElement).style.borderTop = "#d9a209 dotted 10px;";
      });

      lamp.addEventListener("mouseout", () => {
        const attr = lamp.getAttribute("rs-illuminator");
        document
          .querySelectorAll(`[rs-illuminator=${attr}]`)
          .forEach((item) => item.classList.remove("light"));

        (line as HTMLElement).style.borderTop = "";
      });
    });

    document.querySelectorAll(".line").forEach((teg) => {
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

  public swichOnIlluminate(): void {
    this.box.querySelectorAll(`.lamp.${LampStatus.sway}`).forEach((lamp) => {
      lamp.classList.remove(`${LampStatus.sway}`);
      lamp.classList.add(`${LampStatus.turnОn}`);
    });
  }
}

export default Layout;
