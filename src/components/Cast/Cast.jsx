import propTypes from 'prop-types';
import NoImage from '../../images/NoImageAvailable.png';
import { CastWrap, List, ActorCard, ActorName } from './Cast.styled';

export const CastList = ({actors}) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w200';

    return (
        <CastWrap>
            <List>
                {actors.map(({ id, character, name, profile_path }) => {
                    return (
                        <li key={id}>
                            <ActorCard>
                                <img
                                    src={profile_path ? `${imgUrl}${profile_path}` : `${NoImage}`}
                                    alt={name}
                                />
                                <div>
                                    <ActorName>{name}</ActorName>
                                    <p>Character: {character}</p>
                                </div>
                            </ActorCard>
                        </li>
                    )
                })}
            </List>
        </CastWrap>
    )
};

CastList.propTypes = {
    actors: propTypes.arrayOf(propTypes.object).isRequired,
}