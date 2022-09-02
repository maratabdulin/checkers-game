import { Labels } from './Labels';
import BoardModel from './BoardModel';
import { FigureModel } from './FigureModel';

export default class CellModel {
    readonly x: number;
    readonly y: number;
    readonly labels: Labels;
    figure: FigureModel | null;
    board: BoardModel;
    available: boolean;
    key: string;

    constructor(x: number, y: number, labels: Labels, board: BoardModel) {
        this.x = x;
        this.y = y;
        this.labels = labels;
        this.board = board;
        this.available = false;
        this.key = `${String(x)}${String(y)}`;
        this.figure = null;
    }
}
