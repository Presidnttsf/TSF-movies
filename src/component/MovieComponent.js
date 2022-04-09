import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


function MovieComponent(props) {


    return (


        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/150/150" />
                <div className={props.theme ? 'dark' : 'light'}>
                    <Card.Body >
                        <Card.Title>{props.movie.id + ': ' + props.movie.primaryTitle}</Card.Title>


                        <Card.Text>
                            TID: {props.movie.tid}<br />
                            Type: {props.movie.titleType} <br />
                            total: {props.total}

                        </Card.Text>
                        <div className='anime' ><Button variant="secondary"><Link className='Tsf-movies' to={'/viewDetails/' + props.movie.tid}>View Details</Link></Button>  {props.button}
                        </div>



                    </Card.Body>
                </div>
            </Card >
        </div>

    )

}

export default MovieComponent;