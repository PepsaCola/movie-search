import { useEffect, useState } from "react";
import { getMovieByQuery } from "../../movieAPI/movieAPI";
import {
    Button,
    Buttons,
    DefaultLink,
    HomeImg,
    HomeItem,
    HomeList,
    Input,
    ItemTitle,
} from "../../styled";
import { useLocation, useSearchParams } from "react-router-dom";

export const Movies = () => {
    const [results, setResults] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    // Отримуємо значення параметрів з URL
    const movieQuery = searchParams.get("query") ?? "";
    const page = Number(searchParams.get("page")) || 1; // Перетворюємо в число

    const handleChange = (e) => {
        const query = e.target.value;
        setSearchParams(query !== "" ? { query, page: 1 } : {});
    };

    const handleRequest = async (query, pageNum) => {

        const res = await getMovieByQuery(query, pageNum);
        setResults(res.results);
    };

    const decrementClick = () => {
        if (page > 1) {
            setSearchParams({ query: movieQuery, page: page - 1 });
        }
    };

    const incrementClick = () => {
        setSearchParams({ query: movieQuery, page: page + 1 });
    };

    useEffect(() => {

        handleRequest(movieQuery.toLowerCase(), page);
    }, [movieQuery, page]);

    const IMG_URL = "https://image.tmdb.org/t/p/w200";

    return (
        <main>
            <Input value={movieQuery} onChange={handleChange} type="text" />
            <HomeList>
                {results.map((item) => (
                    <DefaultLink key={item.id} to={`/movies/${item.id}`} state={{ from: location }}>
                        <HomeItem>
                            <ItemTitle>{item.original_title}</ItemTitle>
                            <HomeImg src={`${IMG_URL + item.poster_path}`} alt={item.original_title} />
                        </HomeItem>
                    </DefaultLink>
                ))}
            </HomeList>
            {results.length!==0 && (
                <Buttons>
                    <Button disabled={page === 1} onClick={decrementClick}>
                        &lt;
                    </Button>
                    <span>{page}</span>
                    <Button disabled={results.length !== 20} onClick={incrementClick}>
                        &gt;
                    </Button>
                </Buttons>
            )}
        </main>
    );
};
