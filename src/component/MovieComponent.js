import { useState } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";


function MovieComponent(props) {


    return (
        <Container fluid className={props.theme ? 'dark' : 'light'}>
            {/* {console.log(props, "checking moviecomponent")} */}



            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/150/150" />
                <div className={props.theme ? 'dark' : 'light'}>
                    <Card.Body >
                        <Card.Title>{props.movie.id + ': ' + props.movie.primaryTitle}</Card.Title>


                        <Card.Text>
                            TID: {props.movie.tid}<br />
                            Type: {props.movie.titleType} <br />
                            total: {props.total}

                        </Card.Text>
                        <div className='anime' ><Button variant="secondary"><Link className='Tsf-movies' to={'/viewDetails/' + props.movie.tid}>View Details</Link></Button>
                        </div>



                    </Card.Body>
                </div>
            </Card >
        </Container>

    )

}

export default MovieComponent;