import MovieComponent from "../component/MovieComponent";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Row, Col } from 'react-bootstrap';
function HomeComponent(props) {

    const [movieData, setMovieData] = useState([]);


    useEffect(() => {
        const init = async () => {
            try {
                const response = await axios.get('http://fsimdbbackend-env.eba-6xb8tzsg.ap-south-1.elasticbeanstalk.com/title-basics');
                console.log(response);
                setMovieData(response.data)
                console.log(setMovieData)
            } catch (error) {
                console.error(error);
            }
        };


        init();
    }, []);



    return (
        <>
            <Row>

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

export default HomeComponent;