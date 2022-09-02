import CellModel from './CellModel';
import { Labels } from './Labels';
import pieceImageLight from './../images/light.png';
import pieceImageDark from './../images/brown.png';
import { FigureNames } from './FigureNames';

class FigureModel {
    label: Labels;
    imgSrc: string;
    isDame: boolean;
    cell: CellModel;
    name: FigureNames;

    constructor(label: Labels, cell: CellModel) {
        this.label = label;
        this.cell = cell;
        this.cell.figure = this;
        this.isDame = false;
        this.name = FigureNames.Piece;
        this.imgSrc = label === Labels.Light ? pieceImageLight : pieceImageDark;
    }
}

export { FigureModel };
