import MovieComponent from "../component/MovieComponent";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";
function ViewDetails(props) {

    const [movieData, setMovieData] = useState([]);
    const params = useParams();
    console.log(params)


    useEffect(() => {
        const init = async () => {
            try {
                const response = await axios.get('http://fsimdbbackend-env.eba-6xb8tzsg.ap-south-1.elasticbeanstalk.com/title-basics/' + params.tid);
                console.log(response);
                setMovieData(response.data)
                console.log(setMovieData)
            } catch (error) {
                console.error(error);
            }
        };


        init();
    }, [params.tid]);



    return (
        <>
            <h3>Showing {params.tid}</h3>

            <p>TID: {movieData.tid}</p>
            <p>TCONST: {movieData.tconst}</p>
            <p>TitleType: {movieData.titleType}</p>
            <p>PrimaryTitle: {movieData.primaryTitle}</p>
            <p>OriginalTitle: {movieData.originalTitle}</p>
            <p>IsAdult: {movieData.isAdult}</p>
            <p>StartYear: {movieData.startYear}</p>
            <p>EndYear: {movieData.endYear}</p>
            <p>RunTimeMinutes: {movieData.runtimeMinutes}</p>
            <p>Genres: {movieData.genres}</p>
            <p>AddedByUser: {movieData.addedByUser}</p>
        </>


    )

}

export default ViewDetails;