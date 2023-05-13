import { Card, CardContent } from '@mui/material';

import styles from './ProductFilterGroup.module.css';

export function ProductFilterGroup({title}: {title: string}) {
    return (
        <Card>
            <CardContent className={styles.content}>
                <div className={styles.title}>
                    {title}
                </div>
            </CardContent>
        </Card>
    )
}