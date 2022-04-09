
import { useEffect, useState } from 'react';
import axios from "axios";
import { Carousel, Card, ListGroup, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";
function ViewDetails(props) {

    const [movieData, setMovieData] = useState([]);
    const [movieRating, setMovieRating] = useState([]);
    const [movieCrew, setMovieCrew] = useState([]);
    const params = useParams();
    console.log(params)


    useEffect(() => {

        const init = async () => {
            try {
                const titleResponse = await axios.get('http://fsimdbbackend-env.eba-6xb8tzsg.ap-south-1.elasticbeanstalk.com/title-basics/' + params.tid);
                if (titleResponse.data.addedByUser == 0) {
                    const ratingResponse = await axios.get('http://fsimdbbackend-env.eba-6xb8tzsg.ap-south-1.elasticbeanstalk.com/title-ratings?filter[where][tconst]=' + titleResponse.data.tconst);

                    const crewResponse = await axios.get('http://fsimdbbackend-env.eba-6xb8tzsg.ap-south-1.elasticbeanstalk.com/title-crews?filter[where][tconst]=' + titleResponse.data.tconst);


                    console.log('titleResponse:', titleResponse);
                    console.log('ratingResponse:', ratingResponse);
                    console.log('crewResponse:', crewResponse);

                    setMovieRating(ratingResponse.data[0])
                    setMovieCrew(crewResponse.data[0])
                }
                setMovieData(titleResponse.data)
            } catch (error) {
                console.error(error);
            }
        };


        init();
    }, [params.tid]);



    return (
        <>
            <h3>Showing {params.tid}</h3>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://picsum.photos/800/300?humans"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>{movieData.primaryTitle}</h1>
                            <p>{movieData.genres} </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://picsum.photos/800/300?grayscale"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1> {movieData.startYear} </h1>
                            <p>Started shooting in.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://picsum.photos/800/300?sea"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1>{movieData.runtimeMinutes} minutes</h1>
                            <p>minutes of runtime.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://picsum.photos/800/300?mango"
                            alt="Fourth slide"
                        />

                        <Carousel.Caption>
                            <h1>{movieCrew.directors}</h1>
                            <p>Crews</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <br />
            <br />

            <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>TID: {movieData.tid}</ListGroup.Item>
                    <ListGroup.Item>TCONST: {movieData.tconst}</ListGroup.Item>
                    <ListGroup.Item>TitleType: {movieData.titleType}</ListGroup.Item>
                    <ListGroup.Item>PrimaryTitle: {movieData.primaryTitle}</ListGroup.Item>
                    <ListGroup.Item>OriginalTitle: {movieData.originalTitle}</ListGroup.Item>
                    <ListGroup.Item>IsAdult: {movieData.isAdult}</ListGroup.Item>
                    <ListGroup.Item>StartYear: {movieData.startYear}</ListGroup.Item>
                    <ListGroup.Item>RunTimeMinutes: {movieData.runtimeMinutes}</ListGroup.Item>
                    <ListGroup.Item>EndYear: {movieData.endYear}</ListGroup.Item>
                    <ListGroup.Item>Genres: {movieData.genres}</ListGroup.Item>
                    <ListGroup.Item>Ratings: {movieRating.averageRating}</ListGroup.Item>
                    <ListGroup.Item>Num Votes: {movieRating.numVotes}</ListGroup.Item>

                </ListGroup>
            </Card>

            <Row xs={1} md={2} className="g-4">


                <Card border='secondary'>

                    <Card.Body className='bodyCard'>
                        <Card.Title>Genres</Card.Title>
                        <Card.Text>
                            {movieData.genres}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border='secondary'>

                    <Card.Body className='bodyCard'>
                        <Card.Title>Adult</Card.Title>
                        <Card.Text>
                            {movieData.isAdult}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border='secondary'>
                    <Card.Body className='bodyCard'>
                        <Card.Title>Ratings</Card.Title>
                        <Card.Text>
                            {movieRating.averageRating}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border='secondary'>

                    <Card.Body className='bodyCard'>
                        <Card.Title>Num Votes</Card.Title>
                        <Card.Text>
                            {movieRating.numVotes}
                        </Card.Text>
                    </Card.Body>
                </Card>


            </Row>






        </>


    )

}

export default ViewDetails;