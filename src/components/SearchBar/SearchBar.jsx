import propTypes from "prop-types";
import { Wrapper } from "./SearchBar.styled"

export const SearchForm = ({onSubmit}) => {
    return (
        <Wrapper>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    name="search" 
                    placeholder="Search movie"
                    autoComplete="off" />
                <button type="submit">Search</button>
            </form>
        </Wrapper>
        
    )
};

SearchForm.prototype = {
    onSubmit: propTypes.func.isRequired,
};