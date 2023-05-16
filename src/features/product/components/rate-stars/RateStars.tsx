import { Grade } from '@mui/icons-material';

export const RateStars = ({ count }: { count: number }) => {
    const stars = Array(count).fill(<></>);

    return (
        <>
            {stars.map((star, index) => <Grade key={index} />)}
        </>
    );
};
