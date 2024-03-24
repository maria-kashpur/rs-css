export enum LampColor {
  red = "svg-lamp-red",
  blue = "svg-lamp-blue",
  yellow = "svg-lamp-yellow",
}

export enum LampStatus {
  turnОn = "active",
  sway = "swaying",
  current = "light",
}

export interface LevelData {
  name: string;
  order: string;
  layoutRows: LayoutRow[];
  validSelectors: string[];
}

export interface LayoutRow {
  line: [string, string];
  lamps: Lamp[];
}

export interface Lamp {
  color: LampColor;
  lampStatus: LampStatus | null;
  htmlEditorData: string;
  title: string;
}

export enum LevelStatus {
  check = "check",
  current = "active",
  help = "help",
}

export interface SaveData {
  currentLevel: number;
  checkedLevels: number[];
  helpedLevels: number[];
}

export enum InputResults {
  win = "win",
  fail = "fail",
  help = "help",
}
