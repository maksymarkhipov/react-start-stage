import styles from '../page.module.css';
import { Header } from '../../layouts/header/header';

export const PrivacyPolicy = () => {
    const countPhrase = 100;
    const content = 'We at Meta want you to understand what information we collect'.repeat(countPhrase);

    return (
        <div className={styles.wrapper}>
            <div className={styles.headerContainer}>
                < Header />
            </div>
            <div className={styles.content}>
                <div className={styles.main}>
                    <p>
                        {content}
                    </p>
                    <p>
                        {content}
                    </p>
                    <p>
                        {content}
                    </p>
                </div>
            </div>
        </div>
    );
};
