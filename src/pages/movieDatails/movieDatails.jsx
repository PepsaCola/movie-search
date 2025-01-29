import {
    BackLink,
    Detail,
    DetailAdd, DetailAddLink,
    DetailH3,
    DetailH4,
    DetailImg,
    DetailInfoDiv,
    DetailInfoWrap,
    DetailItem, DetailList,
    DetailP,
    DetailTitle
} from "../../styled";
import {Outlet, useLocation, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { GetMovieByID } from "../../movieAPI/movieAPI";

export const MovieDetails = () => {
    const [movie, setMovie] = useState(null); // Initial state is null
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const data = await GetMovieByID(movieId);
                console.log(data); // Log the movie data
                setMovie(data); // Update state with fetched movie data
            } catch (error) {
                console.error("Failed to fetch movie details:", error);
            }
        };

        fetchMovie();
    }, [movieId]); // Add movieId to the dependency array

    if (!movie) {
        return <p>Loading...</p>; // Show a loading state
    }

    // TMDb image base URL
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

    return (
        <>
            <Detail>
                <BackLink to={backLinkHref}>Go back</BackLink>
                <DetailInfoDiv>
                    <DetailImg
                        src={movie.poster_path ? `${imageBaseUrl}${movie.poster_path}` : ""}
                        alt={movie.title || "Movie Poster"}
                    />
                    <DetailInfoWrap>
                        <DetailTitle>{movie.title}</DetailTitle>
                        <DetailP>User scope: {movie.vote_average * 10}%</DetailP>
                        <DetailH3>Overview</DetailH3>
                        <DetailP>{movie.overview}</DetailP>
                        <DetailH4>Genres</DetailH4>
                        <DetailP>{movie.genres.map((genre) => genre.name).join(", ")}</DetailP>
                    </DetailInfoWrap>
                </DetailInfoDiv>
            </Detail>
            <DetailAdd>
                <DetailP>Additional information</DetailP>
                <DetailList>
                    <DetailItem>
                        <DetailAddLink to='cast' state={{from: backLinkHref}}>Cast</DetailAddLink>
                    </DetailItem>
                    <DetailItem>
                        <DetailAddLink to='reviews' state={{from: backLinkHref}}>Reviews</DetailAddLink>
                    </DetailItem>
                </DetailList>
            </DetailAdd>
            <Outlet />
        </>
    );
};