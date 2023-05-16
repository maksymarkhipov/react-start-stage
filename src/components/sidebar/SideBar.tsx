import { Categories } from '../categories/Categories';
import { PriceFilter } from '../price-filter/PriceFilter';
import styles from './SideBar.module.css';

export const SideBar = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <Categories />
            </div>
            <div>
                <PriceFilter />
            </div>
        </div>
    );
};
