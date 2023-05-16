import { ProductCategories } from '../../features/product/components/product-categories/ProductCategories';
import { PriceFilter } from '../../features/product/components/price-filter/PriceFilter';
import styles from './Sidebar.module.css';

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
