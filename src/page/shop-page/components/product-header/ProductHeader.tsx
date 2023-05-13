import {
    Card,
    CardContent,
    FormControl,
    IconButton,
} from '@mui/material';
import { List, Widgets } from '@mui/icons-material';

import './ProductHeader.css';
import { ProductSortSelector } from '../product-sort-selector/ProductSortSelector';

export function ProductHeader() {
    return (
        <Card>
            <CardContent className="product-header-content">
                <div className="top">
                    <div className="title">
                        Shop
                    </div>
                </div>
                <div className="delimiter">

                </div>
                <div className="bottom">
                    <div className="change-view-buttons-container">
                        <IconButton aria-label="delete">
                            <Widgets />
                        </IconButton>
                        <IconButton aria-label="delete">
                            <List />
                        </IconButton>
                    </div>
                    <div className="sorting-container">
                        <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                            <ProductSortSelector />
                        </FormControl>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}