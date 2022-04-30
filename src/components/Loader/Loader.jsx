import { RotatingLines } from  'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
    return (
        <LoaderWrapper>
            <RotatingLines 
                width="100" 
                strokeColor="#a7a7a7"
            />
        </LoaderWrapper>
    );
}; 