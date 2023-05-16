import styles from '../Page.module.css';
import { Sidebar } from '../../layouts/Sidebar/Sidebar';
import { Header } from '../../layouts/Header/Header';
import { type ReactElement } from 'react';

export const ProductPage = ({ contentLayout }: { contentLayout: ReactElement }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.headerContainer}>
                < Header />
            </div>
            <div className={styles.content}>
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
                <div className={styles.main}>
                    {contentLayout}
                </div>
            </div>
        </div>
    );
};
