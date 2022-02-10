import MovieComponent from "../component/MovieComponent";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";


function TitleTypeComponent(props) {

    const [movieData, setMovieData] = useState([]);
    const params = useParams();
    console.log(params)
    useEffect(() => {
        const init = async () => {
            try {
                const response = await axios.get('http://fsimdbbackend-env.eba-6xb8tzsg.ap-south-1.elasticbeanstalk.com/title-basics?filter[where][titleType]=' + params.type);
                console.log(response);
                setMovieData(response.data)
                console.log()
            } catch (error) {
                console.error(error);
            }
        };


        init();
    }, [params.type]);



    return (
        <>
            <Row>
                <h2>Showing Title {params.type}</h2 >
                {movieData.map(
                    (m, index) => {
                        return (
                            <Col xs={12} md={3} >
                                <MovieComponent index={index} movie={{ id: index + 1, ...m }} />
                            </Col>
                        )
                    }
                )}

            </Row>
        </>


    )

}

export default TitleTypeComponent;