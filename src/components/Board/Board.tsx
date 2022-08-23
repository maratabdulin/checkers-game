import React, { Fragment, ReactElement } from 'react';
import './Board.css';
import { Cell } from '../Cell';
import BoardModel from '../../models/BoardModel';

type BoardPropsType = {
    board: BoardModel;
    onSetBoard: (board: BoardModel) => void;
};

export const Board = ({ board, onSetBoard }: BoardPropsType): ReactElement => {
    return (
        <div className="board">
            {board.cells.map((row, index) => (
                <Fragment key={index}>
                    {row.map((cell, index) => (
                        <Cell label={cell.labels} key={cell.key} />
                    ))}
                </Fragment>
            ))}
        </div>
    );
};
