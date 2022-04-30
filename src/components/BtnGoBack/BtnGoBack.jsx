import { useLocation } from 'react-router-dom';
import { GoBackBtn } from './BtnGoBack.styled';

export const BtnGoBack = () => {
    const location = useLocation();

    return (
        <>
            <GoBackBtn to={location?.state?.from ?? '/'}>Go Back</GoBackBtn>
        </>
    )
}