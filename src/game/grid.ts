import type { Cell } from '.././types/cell.ts'

export class Grid{
  cells :Cell[][]
  rows : number
  columns: number

  constructor(cells: Cell[][]) {
    this.cells = cells
    this.rows = this.cells.length;
    this.columns = this.cells[0].length;
  }

  // Toggles the lit state of the cell
  toggleCell(cell: Cell) : void {
    cell.lit = !cell.lit
  }

  // Triggers the select cell's power-up
  triggerCell(row: number, column:number) : void {

    // Return if accessing attempt is out of bounds
    if (row >= this.rows || column >= this.columns) return;

    const triggeredCell = this.cells[row][column]

    console.log(this.cells[row][column].lit)

    // Trigger the cell's power up depending on its type
    if (triggeredCell.type == 'self') {
        this.toggleCell(triggeredCell)
    }
    else if (triggeredCell.type =='row') {
        for (let j=0; j<this.columns; j++) {
            this.toggleCell(this.cells[row][j])
        }
    }
    else if (triggeredCell.type =='column') {
        for (let i=0; i<this.rows; i++) {
            this.toggleCell(this.cells[i][column])
        }
    }

    console.log(this.cells[row][column].lit)
  }

  // Text-only representation of grid for debugging 
  toString() : string {
    let output = ''

    for (let i = 0; i<this.rows; i++) {
      for(let j=0; j<this.columns; j++){
        if (this.cells[i][j].lit){
          output = output.concat('1 ');
        }
        else {
          output = output.concat('0 ');
        }
      }
      output = output.concat('\n');
    }
    return output;
  }
}