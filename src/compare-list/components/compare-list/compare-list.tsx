import { CompareArrows } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import {
    selectCategoriesWithCount,
    selectCountCompareProduct,
} from '../../../store/compare-list/compare-list-selector';
import { useState } from 'react';
import { CompareListDialog } from '../../dialogs/comapare-list-dialog/CompareListDialog';
import { NavLink } from 'react-router-dom';

export const CompareList = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const countCompareProducts = useSelector(selectCountCompareProduct);
    const categoriesWithCount = useSelector(selectCategoriesWithCount);

    const content = categoriesWithCount.map((categoryWithCount, index) => {
        return <NavLink key={index} to={`compare-list/${categoryWithCount.title}`}>
            <div>{categoryWithCount.title} ({categoryWithCount.countProducts})</div>
        </NavLink>;
    });

    const handleOpenDialog = () => {
        setIsOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setIsOpenDialog(false);
    };

    return (
        <>
            <IconButton onClick={() => { handleOpenDialog(); } }>
                <Badge color='secondary' badgeContent={countCompareProducts}>
                    <CompareArrows />
                </Badge>
            </IconButton>
            <CompareListDialog isOpen={isOpenDialog} onClose={handleCloseDialog} content={<>{content}</>} />
        </>
    );
};
