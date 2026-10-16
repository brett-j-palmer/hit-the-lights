import './style.css'
import { setupCounter } from './counter.ts'

import { mountWebApp } from './web/mountWebApp';
import type { Cell } from './types/cell.ts'
import { Grid } from './game/grid.ts'

let cell1: Cell = {row:1, column:1, lit:true, type:'self', icon:'⏺'}
let cell2: Cell = {row:1, column:1, lit:false, type:'self', icon:'⏺'}
let cell3: Cell = {row:1, column:1, lit:true, type:'column', icon:'⏺'}
let cell4: Cell = {row:1, column:1, lit:true,type:'row', icon:'⏺'}

const grid = new Grid([[cell1,cell2],[cell3,cell4]]);

// Initial state
console.log(grid);
console.log(grid.toString());

// Trigger self
grid.triggerCell(0,0)
console.log(grid.toString());

//Trigger row
grid.triggerCell(1,1)
console.log(grid.toString());

//Trigger column
grid.triggerCell(1,0)
console.log(grid.toString());

//Trigger out of bounds
grid.triggerCell(2,0)
console.log(grid.toString());

// function renderCell (cell: Cell) {
//   if (cell.lit) {
//     return `<button> On </button>`
//   }
//   else {
//     return `<button> Off </button>`
//   }
// }

// function renderGrid (grid: Grid) {
//   return grid.cells.map((row) => 
//     row.map((cell)=> 
//       renderCell(cell)
//     ).join(' ')
//   ).join(' ')
// }

// function renderCell1 (cell: Cell) {
//   var button = document.createElement("BUTTON"); 
//   var text;
//   if (cell.lit) {
//     text = document.createTextNode("On");
//   }
//   else {
//     text = document.createTextNode("Off");
//   }
//   button.appendChild(text);
//   document.body.appendChild(button);
//   return button;
// }

// function renderGrid1 (grid: Grid) {
//   return grid.cells.map((row) => 
//     row.map((cell)=> 
//       renderCell(cell)
//     ).join(' ')
//   ).join(' ')
// }

const root = document.querySelector<HTMLElement>('#app');

if (root) {
  mountWebApp(root);
} else {
  throw new Error('App root element #app was not found');
}


// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
// <section id="center">
//   <div class="hero">
//     <img src="${heroImg}" class="base" width="170" height="179">
//     <img src="${typescriptLogo}" class="framework" alt="TypeScript logo"/>
//     <img src="${viteLogo}" class="vite" alt="Vite logo" />
//   </div>
//   <div>
//     <h1>Get started</h1>
//     <p>Edit <code>src/main.ts</code> and save to test <code>HMR</code></p>

//     <!--
//     <p>${grid.toString()}<p>
//     <div>
//       ${grid.cells.map((row) => 
//         `<div> ${row.map((cell) => 
//             `${cell.lit} `).join('')}</div>`
//       ).join('')}
//     </div>
//     -->

//     <div class= "grid">
//       ${renderGrid(grid)}
//       ${renderCell1(cell1)}
//     </div>
//   </div>
//   <button id="counter" type="button" class="counter"></button>
// </section>

// <div class="ticks"></div>

// <section id="next-steps">
//   <div id="docs">
//     <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#documentation-icon"></use></svg>
//     <h2>Documentation</h2>
//     <p>Your questions, answered</p>
//     <ul>
//       <li>
//         <a href="https://vite.dev/" target="_blank">
//           <img class="logo" src="${viteLogo}" alt="" />
//           Explore Vite
//         </a>
//       </li>
//       <li>
//         <a href="https://www.typescriptlang.org" target="_blank">
//           <img class="button-icon" src="${typescriptLogo}" alt="">
//           Learn more
//         </a>
//       </li>
//     </ul>
//   </div>
//   <div id="social">
//     <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
//     <h2>Connect with us</h2>
//     <p>Join the Vite community</p>
//     <ul>
//       <li><a href="https://github.com/vitejs/vite" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
//       <li><a href="https://chat.vite.dev/" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#discord-icon"></use></svg>Discord</a></li>
//       <li><a href="https://x.com/vite_js" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#x-icon"></use></svg>X.com</a></li>
//       <li><a href="https://bsky.app/profile/vite.dev" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#bluesky-icon"></use></svg>Bluesky</a></li>
//     </ul>
//   </div>
// </section>

// <div class="ticks"></div>
// <section id="spacer"></section>
// `



setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
