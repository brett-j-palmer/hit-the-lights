
import type { Cell } from '.././types/cell.ts';
import { Grid } from '.././game/grid.ts';
import '.././style.css'

export function mountWebApp(root: HTMLElement): void {
    const heading = document.createElement('h1');
    heading.textContent = 'Hit the Lights!';

    const content = document.createElement('div');
    content.className = 'grid';

    const congrats = document.createElement('h2');
    congrats.className = 'congrats';

    let cell1: Cell = {row:0, column:0, lit:false, type:'self', icon:'⏺'}
    let cell2: Cell = {row:0, column:1, lit:false, type:'self', icon:'⏺'}
    let cell3: Cell = {row:0, column:2, lit:false, type:'column', icon:'⭥'}
    let cell4: Cell = {row:1, column:0, lit:false,type:'row', icon:'⭤'}
    let cell5: Cell = {row:1, column:1, lit:false, type:'self', icon:'⏺'}
    let cell6: Cell = {row:1, column:2, lit:false, type:'self', icon:'⏺'}
    let cell7: Cell = {row:2, column:0, lit:false, type:'column', icon:'⭥'}
    let cell8: Cell = {row:2, column:1, lit:false,type:'row', icon:'⭤'}
    let cell9: Cell = {row:2, column:2, lit:false,type:'self', icon:'⏺'}

    const grid = new Grid([[cell1,cell2,cell3],[cell4,cell5,cell6],[cell7,cell8,cell9]]);

    function renderCell (cell: Cell) {
      var button = document.createElement("BUTTON"); 
      var text;
      if (cell.lit) {
        //text = document.createTextNode("On");
        button.className = "button buttonOn";
      }
      else {
        //text = document.createTextNode("Off");
        button.className = "button buttonOff";
      }
      text = document.createTextNode(cell.icon);
      button.appendChild(text);
      button.addEventListener("click",function() {
        grid.triggerCell(cell.row,cell.column);
        renderGrid(grid);
      });
      content.appendChild(button);
      return button;
    }
    
    function renderGrid (grid: Grid) {
        content.innerHTML = '';
        var cellOff = false;
        for (var i = 0; i < grid.rows; i++) {
            for (var j = 0; j < grid.rows; j++) {
                if (grid.cells[i][j].lit == false) {
                  cellOff = true;
                }
                content.appendChild(renderCell(grid.cells[i][j]));

            }
        }
        console.log(cellOff)
        if (cellOff == false) {
          congrats.textContent = 'Congrats!';
        }
        else {
          congrats.textContent = '';
        }
    }

    renderGrid(grid);
    root.replaceChildren(heading, content, congrats);
}
