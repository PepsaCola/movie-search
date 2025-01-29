import {useEffect, useState} from "react";
import {GetReviewsByID} from "../../movieAPI/movieAPI";
import {useParams} from "react-router-dom";
import {ReviewItem, ReviewsList, ReviewText, ReviewTitle} from "../../styled";

export const Reviews=()=> {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const data = await GetReviewsByID(movieId);
                console.log(data.results);
                setReviews(data.results || []);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [movieId]);

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <h2 style={{marginTop: '20px', textAlign: "center"}}>Reviews</h2>
            {reviews.length!==0?<ReviewsList>
                {reviews.map((review) => <ReviewItem>
                    <ReviewTitle>{review.author_details.username}</ReviewTitle>
                    <ReviewText>{review.content}</ReviewText>
                </ReviewItem>)}
            </ReviewsList>:<ReviewText style={{margin: '20px', textAlign: "center"}}>It is no reviews here</ReviewText>}
        </>
    )
}