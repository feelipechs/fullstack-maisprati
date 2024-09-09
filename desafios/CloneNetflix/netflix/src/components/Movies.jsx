import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #1c1c1c;
  min-height: 100vh;
  padding: 20px;
  color: #fff;
`;

const MovieRow = styled.div`
  margin-bottom: 40px;
`;

const RowTitle = styled.h2`
  color: #9b94bf;
  margin-left: 20px;
  font-size: 24px;
`;

const MovieList = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

const MovieCard = styled.div`
  background: #ffffff03;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: auto;
`;

const MovieTitle = styled.h3`
  font-size: 14px;
  margin: 10px 0;
  color: #c4c4c4;
`;

const Movies = () => {
  const [dramas, setDramas] = useState([]);
  const [comedies, setComedies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);

  const fetchMoviesByGenre = async (genreId, setterFunction) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=pt-BR&with_genres=${genreId}`
      );
      setterFunction(response.data.results);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
  };

  useEffect(() => {
    // IDs dos gêneros (drama = 18, comédia = 35, ação = 28)
    fetchMoviesByGenre(18, setDramas);
    fetchMoviesByGenre(35, setComedies);
    fetchMoviesByGenre(28, setActionMovies);
  }, []);

  const renderMovieRow = (movies, title) => (
    <MovieRow>
      <RowTitle>{title}</RowTitle>
      <MovieList>
        {movies.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id}>
            <MovieImage
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <MovieTitle>{movie.title}</MovieTitle>
          </MovieCard>
        ))}
      </MovieList>
    </MovieRow>
  );

  return (
    <Wrapper>
      <img src="./imgs/logo.png" alt="logo" width="250px" />
      {renderMovieRow(dramas, 'Dramas')}
      {renderMovieRow(comedies, 'Comédias')}
      {renderMovieRow(actionMovies, 'Ação')}
    </Wrapper>
  );
};

export default Movies;
