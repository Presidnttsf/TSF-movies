import { useForm } from "react-hook-form";
import { Col, Form, Button, Container, Row } from "react-bootstrap";
import axios from "axios";
export default function AddMovie() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        data.isAdult = Number(data.isAdult);
        data.startYear = Number(data.startYear);
        data.runtimeMinutes = Number(data.runtimeMinutes);
        data.addedByUser = 1;
        console.log(data);
        let res = await axios.post('http://fsimdbbackend-env.eba-6xb8tzsg.ap-south-1.elasticbeanstalk.com/title-basics', data);
        console.log("Res", res.data);
        alert("Movie Added: ", res.data.tid)
        refreshPage();
    };

    const refreshPage = () => {
        window.location.reload(false);
    };

    return (
        <div>

            <Container>
                <br />
                <br />

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col sm={6} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Tconst</Form.Label>
                                <Form.Control type="text" placeholder="Tconst" {...register("tconst")} />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Col>
                        <Col sm={6}  >
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>TitleType</Form.Label>
                                <Form.Control type="text" placeholder="TitleType" {...register("titleType")} />
                            </Form.Group>
                        </Col>
                        <Col sm={6} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>primaryTitle</Form.Label>
                                <Form.Control type="text" placeholder="primaryTitle" {...register("primaryTitle")} />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>

                        </Col>
                        <Col sm={6} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>originalTitle</Form.Label>
                                <Form.Control type="text" placeholder="originalTitle"  {...register("originalTitle")} />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>

                        </Col>


                        <Col sm={6} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>startYear</Form.Label>
                                <Form.Control type="text" placeholder="startYear"  {...register("startYear")} />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>

                        </Col>
                        <Col sm={6} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>End year</Form.Label>
                                <Form.Control type="text" placeholder="End year"  {...register("endYear")} />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>

                        </Col>
                        <Col sm={6} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>runtimeMinutes</Form.Label>
                                <Form.Control type="text" placeholder="runtimeMinutes"  {...register("runtimeMinutes")} />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>

                        </Col>
                        <Col sm={6} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>genres</Form.Label>
                                <Form.Control type="text" placeholder="genres"  {...register("genres")} />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>

                        </Col>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="isAdult" {...register("isAdult")} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Row >
                </Form>

            </Container>
        </div>
    )
}
