import React, { ReactElement } from 'react';
import './Cell.css';
import { mergeClasses } from '../../utils/utils';
import CellModel from '../../models/CellModel';

type CellPropsType = {
    cell: CellModel;
};

export const Cell = ({ cell }: CellPropsType): ReactElement => {
    const { figure, labels } = cell;
    return (
        <div className={mergeClasses('cell', labels)}>
            {figure?.imgSrc && <img className="icon" src={figure.imgSrc} alt={figure.name} />}
        </div>
    );
};
