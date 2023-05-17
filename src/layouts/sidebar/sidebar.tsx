import { ProductCategories } from '../../product/components/product-categories/product-categories';
import { PriceFilter } from '../../product/components/price-filter/price-filter';
import styles from './sidebar.module.css';

export const Sidebar = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <ProductCategories />
            </div>
            <div>
                <PriceFilter />
            </div>
        </div>
    );
};
