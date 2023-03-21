import MovieComponent from "../component/MovieComponent";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Row, Col, Container, Button } from 'react-bootstrap';
import Loading from "../component/Loading";

function HomeComponent(props) {



    const [movieData, setMovieData] = useState([]);
    const [isLoading, setIsLoading] = useState("");



    useEffect(() => {
        const init = async () => {
            try {
                setIsLoading(<Loading />)
                const response = await axios.get('http://fsimdbbackend-env.eba-6xb8tzsg.ap-south-1.elasticbeanstalk.com/title-basics/');
                console.log(response);
                setMovieData(response.data)
                console.log(setMovieData)
                setIsLoading(" ")
            } catch (error) {
                console.error(error);
            }
        };


        init();
    }, []);


    return (
        <Container fluid className={props.theme ? 'dark' : 'light'}>

            <Row>
                <h2>Showing {movieData.length} Movies {isLoading}</h2 >
                {movieData.map(
                    (m, i) => {

                        return (

                            < Col xs={12} md={3} >
                                <MovieComponent movie={{ id: i + 1, ...m }} theme={props.theme} />

                            </Col>

                        )
                    }

                )}

            </Row>
        </Container >


    )

}

export default HomeComponent;