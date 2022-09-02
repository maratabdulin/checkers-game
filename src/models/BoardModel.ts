import CellModel from './CellModel';
import { Labels } from './Labels';
import { FigureModel } from './FigureModel';

export default class BoardModel {
    cells: CellModel[][] = [];
    cellsInRow: number = 8;

    createCells() {
        for (let i = 0; i < this.cellsInRow; i += 1) {
            const row: CellModel[] = [];

            for (let j = 0; j < this.cellsInRow; j += 1) {
                if ((i + j) % 2 !== 0) {
                    row.push(new CellModel(i, j, Labels.Dark, this)); // dark
                } else {
                    row.push(new CellModel(i, j, Labels.Light, this)); // light
                }
            }
            this.cells.push(row);
        }
    }
    getCells(x: number, y: number): CellModel {
        return this.cells[x][y];
    }
    addFigure(label: Labels, x: number, y: number) {
        new FigureModel(label, this.getCells(x, y));
    }
}
