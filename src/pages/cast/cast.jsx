import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetCreditsByID } from "../../movieAPI/movieAPI";
import { CastSlider } from "../../components/castSlider";

export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCast = async () => {
            try {
                const data = await GetCreditsByID(movieId);
                setCast(data.cast || []);
            } catch (error) {
                console.error("Error fetching cast:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCast();
    }, [movieId]);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2 style={{ marginTop: '20px', textAlign: "center"}}>Cast</h2>
            <CastSlider cast={cast} />
        </div>
    );
};
