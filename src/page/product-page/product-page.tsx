import styles from '../page.module.css';
import { Sidebar } from '../../layouts/sidebar/sidebar';
import { Header } from '../../layouts/header/header';
import { type ReactElement } from 'react';

export const ProductPage = ({ contentLayout }: { contentLayout: ReactElement }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.headerContainer}>
                <Header />
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
