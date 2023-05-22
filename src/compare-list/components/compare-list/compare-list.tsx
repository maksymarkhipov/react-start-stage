import { CompareArrows } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectCategoriesWithCount,
    selectCountCompareProduct,
} from '../../../store/compare-list/compare-list-selector';
import { useState } from 'react';
import { CompareListDialog } from '../../dialogs/comapare-list-dialog/CompareListDialog';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom';
import styles from './compare-list.module.css';
import { type Category } from '../../../core/types/category';
import { removeByCategory } from '../../../store/compare-list/compare-list-slice';
import { getCompareItemLink } from '../../../core/service/route-service';

export const CompareList = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const countCompareProducts = useSelector(selectCountCompareProduct);
    const categoriesWithCount = useSelector(selectCategoriesWithCount);
    const dispatch = useDispatch();

    const handleDeleteProductByCategory = (category: Category) => {
        dispatch(removeByCategory(category));
    };

    const getContent = () => {
        const links = categoriesWithCount.map((categoryWithCount, index) => {
            return <div className={styles.category} key={index}>
                <NavLink to={getCompareItemLink(categoryWithCount.title)}>
                    {categoryWithCount.title} ({categoryWithCount.countProducts})
                </NavLink>
                <div>
                    <IconButton onClick={() => { handleDeleteProductByCategory(categoryWithCount.title); }}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>;
        });

        return <div className={styles.categories}>{links}</div>;
    };

    const getEmptyLabel = () => {
        return (
            <div>
                You dont have products for compare
            </div>
        );
    };

    const handleOpenDialog = () => {
        setIsOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setIsOpenDialog(false);
    };

    const content = categoriesWithCount.length > 0
        ? getContent()
        : getEmptyLabel();

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
