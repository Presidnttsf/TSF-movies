import MovieComponent from "../component/MovieComponent";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


export default function AddedByUser(props) {
    const [movieData, setMovieData] = useState([]);
    const params = useParams();

    const remove = async (tid) => {
        let res = await axios.delete('http://fsimdbbackend-env.eba-6xb8tzsg.ap-south-1.elasticbeanstalk.com/title-basics/' + tid);
        alert(tid + " Movie deleted successfully");
        await getMovies()

    };

    const getMovies = async () => {
        try {
            const response = await axios.get('http://fsimdbbackend-env.eba-6xb8tzsg.ap-south-1.elasticbeanstalk.com/title-basics?filter[where][addedByUser]=1&filter[order]=tid DESC');
            console.log('check res', response);
            setMovieData(response.data)
            console.log(setMovieData)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const init = async () => {
            await getMovies()
        };


        init();
    }, []);




    return (
        <>
            <Row>
                <h2>Showing {movieData.length} movies added by User </h2 >
                {movieData.map(
                    (m, index) => {
                        return (
                            <Col xs={12} md={3} >
                                <MovieComponent
                                    index={index}
                                    movie={{ id: index + 1, ...m }}
                                    button={< Button onClick={() => remove(m.tid)}>Delete</Button>}
                                    theme={props.theme}
                                />

                            </Col>

                        )
                    }
                )}

            </Row>



        </>
    )
}
