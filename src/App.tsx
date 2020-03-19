import React, { Suspense } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import styled from "@emotion/styled";
import { query, movies, characters } from "./movies_api";
import { graphql } from "@gqless/react";

const StyledMovies = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledCharacter = styled.div`
  display: flex;
  align-items: center;
`;

const CharacterImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin: 10px;
`;

const Movies = graphql(() => {
  return (
    <StyledMovies>
      {query.movies.map(movie => {
        return (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            {movie.name}
          </Link>
        );
      })}
    </StyledMovies>
  );
});

const Movie = graphql(({ movie }: { movie: movies }) => {
  return (
    <div>
      <h3>
        <Link to={`/movie/${movie.id}`}>{movie.name}</Link>
      </h3>
      <Suspense fallback="loading">
        <Characters movie={movie} />
      </Suspense>
    </div>
  );
});

const Characters = graphql(({ movie }: { movie: movies }) => {
  return (
    <div>
      {movie.characters.map(character => {
        return <Character key={character.id} character={character} />;
      })}
    </div>
  );
});

const Character = graphql(({ character }: { character: characters }) => {
  return (
    <StyledCharacter>
      <CharacterImg src={character.image_url} />
      {character.name}
    </StyledCharacter>
  );
});

export const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="loading">
        <Switch>
          <Route path="/movie/:id">
            {({ match }) => {
              const movie = query.movies_by_pk({ id: match?.params.id! });
              return movie && <Movie movie={movie}></Movie>;
            }}
          </Route>
          <Movies />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
