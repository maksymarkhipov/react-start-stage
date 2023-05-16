
import styles from './SearchSelector.module.css';
import { Search } from '@mui/icons-material';

export const SearchSelector = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.searchSelector}>
                <div className={styles.inputContainer}>
                    <input className={`${styles.text} ${styles.input}`} placeholder='Search for products'/>
                </div>
                <div className={`${styles.text} ${styles.category}`}>
                    All Categories
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <Search />
            </div>
        </div>
    );
};
