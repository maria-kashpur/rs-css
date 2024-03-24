import { LevelData, LampColor, LampStatus } from "./types";

const rsCssData: LevelData[] = [
  {
    name: "Type Selector",
    order: "Select the lamp",
    layoutRows: [
      {
        line: ['<div class="line">', "</div>"],
        lamps: [
          {
            color: LampColor.red,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
          {
            color: LampColor.red,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
          {
            color: LampColor.red,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
        ],
      },
    ],
    validSelectors: ["lamp"],
  },
  {
    name: "ID Selector",
    order: "Select the yellow lamp",
    layoutRows: [
      {
        line: ['<div class="line">', "</div>"],
        lamps: [
          {
            color: LampColor.red,
            lampStatus: null,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
          {
            color: LampColor.yellow,
            lampStatus: LampStatus.sway,
            htmlEditorData: '  <lamp id="yellow">',
            title: '<lamp id="yellow"> </lamp>',
          },
          {
            color: LampColor.red,
            lampStatus: null,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
        ],
      },
    ],
    validSelectors: ["#yellow"],
  },
  {
    name: "Class Selector",
    order: "Select all red lamps",
    layoutRows: [
      {
        line: ['<div class="line">', "</div>"],
        lamps: [
          {
            color: LampColor.red,
            lampStatus: LampStatus.sway,
            htmlEditorData: `  <lamp class="red"/>`,
            title: '<lamp class="red"> </lamp>',
          },
          {
            color: LampColor.yellow,
            lampStatus: null,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
          {
            color: LampColor.blue,
            lampStatus: null,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
        ],
      },
      {
        line: ['<div class="line">', "</div>"],
        lamps: [
          {
            color: LampColor.red,
            lampStatus: LampStatus.sway,
            htmlEditorData: `  <lamp class="red"/>`,
            title: '<lamp class="red"> </lamp>',
          },
          {
            color: LampColor.yellow,
            lampStatus: null,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
          {
            color: LampColor.blue,
            lampStatus: null,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
        ],
      },
    ],
    validSelectors: [".red", "lamp.red"],
  },
  {
    name: "Descendant Selector",
    order: "Select all lamps in the first line",
    layoutRows: [
      {
        line: ["<line1>", "</line1>"],
        lamps: [
          {
            color: LampColor.yellow,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
          {
            color: LampColor.red,
            lampStatus: LampStatus.sway,
            htmlEditorData: `  <lamp>`,
            title: "<lamp> </lamp>",
          },
          {
            color: LampColor.blue,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
        ],
      },
      {
        line: ["<line2>", "</line2>"],
        lamps: [
          {
            color: LampColor.red,
            lampStatus: null,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
          {
            color: LampColor.yellow,
            lampStatus: null,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
          {
            color: LampColor.blue,
            lampStatus: null,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
        ],
      },
    ],
    validSelectors: ["line1 lamp"],
  },
  {
    name: "Universal Selector",
    order: "Select all lamps on the lines. Use universal Selector.",
    layoutRows: [
      {
        line: ["<line>", "</line>"],
        lamps: [
          {
            color: LampColor.yellow,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <yellow />",
            title: "<yellow> </yellow>",
          },
          {
            color: LampColor.red,
            lampStatus: LampStatus.sway,
            htmlEditorData: `  <red>`,
            title: "<red> </red>",
          },
          {
            color: LampColor.blue,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <blue />",
            title: "<blue> </blue>",
          },
        ],
      },
      {
        line: ["<line>", "</line>"],
        lamps: [
          {
            color: LampColor.red,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <red />",
            title: "<red> </red>",
          },
          {
            color: LampColor.yellow,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <yellow />",
            title: "<yellow> </yellow>",
          },
          {
            color: LampColor.blue,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <blue />",
            title: "<blue> </blue>",
          },
        ],
      },
    ],
    validSelectors: ["line *"],
  },
  {
    name: "Adjacent Sibling Selector",
    order: "Select every the blue lamps next to the red lamp.",
    layoutRows: [
      {
        line: ["<line>", "</line>"],
        lamps: [
          {
            color: LampColor.blue,
            lampStatus: null,
            htmlEditorData: "  <blue />",
            title: "<blue> </blue>",
          },
          {
            color: LampColor.red,
            lampStatus: null,
            htmlEditorData: `  <red>`,
            title: "<red> </red>",
          },
          {
            color: LampColor.blue,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <blue />",
            title: "<blue> </blue>",
          },
        ],
      },
      {
        line: ["<line>", "</line>"],
        lamps: [
          {
            color: LampColor.red,
            lampStatus: null,
            htmlEditorData: "  <red />",
            title: "<red> </red>",
          },
          {
            color: LampColor.blue,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <blue />",
            title: "<blue> </blue>",
          },
          {
            color: LampColor.blue,
            lampStatus: null,
            htmlEditorData: "  <blue />",
            title: "<blue> </blue>",
          },
        ],
      },
    ],
    validSelectors: ["red + blue"],
  },
  {
    name: "General Sibling Selector",
    order: "Select all the blue lamps that follows the red lamp.",
    layoutRows: [
      {
        line: ["<line>", "</line>"],
        lamps: [
          {
            color: LampColor.blue,
            lampStatus: null,
            htmlEditorData: "  <blue />",
            title: "<blue> </blue>",
          },
          {
            color: LampColor.red,
            lampStatus: null,
            htmlEditorData: `  <red>`,
            title: "<red> </red>",
          },
          {
            color: LampColor.blue,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <blue />",
            title: "<blue> </blue>",
          },
        ],
      },
      {
        line: ["<line>", "</line>"],
        lamps: [
          {
            color: LampColor.red,
            lampStatus: null,
            htmlEditorData: "  <red />",
            title: "<red> </red>",
          },
          {
            color: LampColor.blue,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <blue />",
            title: "<blue> </blue>",
          },
          {
            color: LampColor.blue,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <blue />",
            title: "<blue> </blue>",
          },
        ],
      },
    ],
    validSelectors: ["red ~ blue"],
  },
  {
    name: "Child Selector",
    order: "Select all the red lamps. Use child selector",
    layoutRows: [
      {
        line: ["<line>", "</line>"],
        lamps: [
          {
            color: LampColor.red,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <red />",
            title: "<red> </red>",
          },
          {
            color: LampColor.red,
            lampStatus: LampStatus.sway,
            htmlEditorData: `  <red>`,
            title: "<red> </red>",
          },
          {
            color: LampColor.blue,
            lampStatus: null,
            htmlEditorData: "  <blue />",
            title: "<blue> </blue>",
          },
        ],
      },
      {
        line: ["<line>", "</line>"],
        lamps: [
          {
            color: LampColor.red,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <red />",
            title: "<red> </red>",
          },
          {
            color: LampColor.red,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <red />",
            title: "<red> </red>",
          },
          {
            color: LampColor.blue,
            lampStatus: null,
            htmlEditorData: "  <blue />",
            title: "<blue> </blue>",
          },
          {
            color: LampColor.red,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <red />",
            title: "<red> </red>",
          },
        ],
      },
    ],
    validSelectors: ["line > red"],
  },
  {
    name: "Nth Child Pseudo-selector",
    order: "Select only the third red lamp.",
    layoutRows: [
      {
        line: ["<line>", "</line>"],
        lamps: [
          {
            color: LampColor.yellow,
            lampStatus: null,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
          {
            color: LampColor.blue,
            lampStatus: null,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
          {
            color: LampColor.red,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
          {
            color: LampColor.yellow,
            lampStatus: null,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
          {
            color: LampColor.blue,
            lampStatus: null,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
        ],
      },
    ],
    validSelectors: ["red:nth-child(3)"],
  },
  {
    name: "Empty Selector",
    order: "Select a non-empty line. Use empty selector",
    layoutRows: [
      {
        line: ["<line>", "</line>"],
        lamps: [],
      },
      {
        line: ["<line>", "</line>"],
        lamps: [
          {
            color: LampColor.yellow,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
          {
            color: LampColor.blue,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
          {
            color: LampColor.red,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
          {
            color: LampColor.yellow,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
          {
            color: LampColor.blue,
            lampStatus: LampStatus.sway,
            htmlEditorData: "  <lamp />",
            title: "<lamp> </lamp>",
          },
        ],
      },
      {
        line: ["<line>", "</line>"],
        lamps: [],
      },
    ],
    validSelectors: ["line:not(:empty)"],
  },
];

export default rsCssData;
