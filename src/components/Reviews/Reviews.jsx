import propTypes from "prop-types";
import { Wrap, List, AuthorName } from "./Reviews.styled";

export const ReviewsList = ({reviews}) => {
    return (
        <Wrap> 
            {reviews.length !== 0 ? (
                <List>
                    {reviews.map(({author, content, id}) => {
                        return (
                            <li key={id}>
                                <AuthorName>Author: {author}</AuthorName>
                                <p>{content}</p>
                            </li>
                        )
                    })}
                </List>
            ) : (
                <p>We don't have any reviews for this movie</p>
            )}
        </Wrap>
    );
};

ReviewsList.protoType = {
    reviews: propTypes.arrayOf(propTypes.object).isRequired
}