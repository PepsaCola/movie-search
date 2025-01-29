import axios from "axios";

const link = "https://api.themoviedb.org/3/";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTMwMDA5ZmQ4ZmFkZTA1OGVhZWNjNGE5NDIwYzRhNCIsIm5iZiI6MTczODA3MjYyMi45Mjk5OTk4LCJzdWIiOiI2Nzk4ZTIyZTBlMWUwNDg2ZDYyYjc4ZmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cryxtiY6pbR4hq-8OHEVeQu66_1wJDmiPeb3CGDrFfQ",
    },
};

export async function getMovieByQuery(query,page) {
    try{
        const response = await axios.get(`${link}search/movie?query=${query}&language=en-US&region=Ukraine&page=${page}`, options);
        return response.data;
    }
    catch(error){
        console.error("Error fetching movies:", error);
        throw error;
    }
}

export  async function GetReviewsByID(id){
    try{
        const response = await axios.get(`${link}movie/${id}/reviews`, options);
        return response.data;
    }
    catch(error){
        console.error("Error fetching trending movies:", error);
        throw error;
    }
}

export  async function GetCreditsByID(id){
    try{
        const response = await axios.get(`${link}movie/${id}/credits`, options);
        return response.data;
    }
    catch(error){
        console.error("Error fetching trending movies:", error);
        throw error;
    }
}

export  async function GetMovieByID(id){
    try{
        const response = await axios.get(`${link}movie/${id}`, options);
        return response.data;
    }
    catch(error){
        console.error("Error fetching trending movies:", error);
        throw error;
    }
}

export async function getTrending ()  {
    try {
        const response = await axios.get(`${link}trending/movie/day`, options);
        return response.data;
    } catch (error) {
        console.error("Error fetching trending movies:", error);
        throw error;
    }
};

