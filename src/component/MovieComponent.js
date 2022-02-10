import { Card, Button } from 'react-bootstrap';

function MovieComponent(props) {


    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/150/150" />
                <Card.Body>
                    <Card.Title>{props.movie.id + ': ' + props.movie.primaryTitle}</Card.Title>


                    <Card.Text>
                        Year: {props.movie.startYear}<br />
                        {props.movie.titleType}

                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                </Card.Body>
            </Card>
        </>

    )

}

export default MovieComponent;