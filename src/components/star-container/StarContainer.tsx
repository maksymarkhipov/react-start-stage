import { Grade } from '@mui/icons-material';

export const StarContainer = ({count} : {count: number}) => {
    const stars = Array(count).fill(<></>);

    return (
        <>
            {stars.map((star, index) => <Grade key={index} />)}
        </>
    );
}