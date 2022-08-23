import React, { ReactElement } from 'react';
import './Cell.css';
import { Labels } from '../../models/Labels';
import { mergeClasses } from '../../utils/utils';

type CellPropsType = {
    label: Labels;
};

export const Cell = ({ label }: CellPropsType): ReactElement => {
    return <div className={mergeClasses('cell', label)}></div>;
};
