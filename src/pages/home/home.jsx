import {getTrending} from "../../movieAPI/movieAPI";
import {useEffect, useState} from "react";
import {HomeImg, HomeItem, HomeList, ItemTitle, Title,DefaultLink} from "../../styled";
import {useLocation} from "react-router-dom";

export const Home=()=> {

    const IMG_URL = 'https://image.tmdb.org/t/p/w200'
    const [trends, setTrends] = useState([])
    const location = useLocation()

    const handleRequest = async () => {
        const res = await getTrending();
        console.log(res)
        setTrends(res.results);
    }

    useEffect(()=>{
        handleRequest()
    },[])

    return (
        <main>
            <Title>Trending today</Title>
            <HomeList>
                {trends.map((trend)=> <DefaultLink to={`/movies/${trend.id}`} state={{from:location}}>
                    <HomeItem key={trend.id}>
                        <ItemTitle>{trend.original_title}</ItemTitle>
                        <HomeImg src={`${IMG_URL+trend.poster_path}`} alt=""/>
                    </HomeItem>
                </DefaultLink> )}
            </HomeList>

        </main>
    )
}