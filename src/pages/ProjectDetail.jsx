import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import bannerimg from '../asset/img/RedFlagsOut_main.png';
import { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import parse from "html-react-parser";
import { contents } from './ProjectsContent';
import Youtube from "../components/Youtube";


function ProjectDetail(props) {
    //read url param (App Route path)
    const { title } = useParams();
    // const [title, setTitle] = useState("");
    // const [img, setImg] = useState();
    const content = contents[title]

    const [show, setShow] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true);
        setImgSrc(e.target.src);
    }



    return (
        <div className="bg-theme">
            <Container>
                <Row>
                    <Col xs={12} md={5} className="my-auto">
                        <h1 className="display">{content.title}</h1>
                        <h2 className="shortdesc">{content.subtitle}</h2>
                    </Col>
                    <Col xs={12} md={7} className="py-3">
                        <img src={content.img} className="img-fluid" alt="Banner img" />
                    </Col>
                </Row>
                <Row className="py-c">
                    <Col xs={12} md={5} className="py-c">
                        <h3>Overview</h3>
                    </Col>
                    <Col xs={12} md={7} className="py-c">
                        <p><React.Fragment>{parse(content.overview)}</React.Fragment></p>
                    </Col>
                    <Col xs={12} md={5} className="py-c">
                        <h3>Duration</h3>
                    </Col>
                    <Col xs={12} md={7} className="py-c">
                        <p><React.Fragment>{parse(content.duration)}</React.Fragment></p>
                    </Col>
                    {content.hasOwnProperty('role') &&
                        <><Col xs={12} md={5} className="py-c">
                            <h3>Key Achievements in my Role</h3>
                        </Col><Col xs={12} md={7} className="py-c">
                                <React.Fragment>{parse(content.role)}</React.Fragment>
                            </Col></>
                    }
                    {content.hasOwnProperty('creatingprocess') &&
                        <><Col xs={12} md={5} className="py-c">
                            <h3>Creating Process</h3>
                        </Col><Col xs={12} md={7} className="py-c">
                                <React.Fragment>{parse(content.creatingprocess.txt)}</React.Fragment>
                                {content.creatingprocess.img.map(item => (
                                    <>
                                        <img src={item.img} className="img-fluid mt-3" alt="" onClick={handleShow} />
                                        <p className=''>{item.txt}</p>

                                    </>
                                ))}
                            </Col></>
                    }
                    {content.hasOwnProperty('youtube') &&
                        <><Col xs={12} md={5} className="py-c">
                            <h3>Documentation Video</h3>
                        </Col><Col xs={12} md={7} className="py-c">
                                <Youtube videoID={content.youtube} />
                            </Col></>
                    }

                    {content.hasOwnProperty('teammembers') &&
                        <><Col xs={12} md={5} className="py-c">
                            <h3>Team Members</h3>
                        </Col><Col xs={12} md={7} className="py-c">
                                <React.Fragment>{parse(content.teammembers)}</React.Fragment>
                            </Col></>
                    }
                    {content.hasOwnProperty('problemstatement') &&
                        <>
                            <Col xs={12} md={5} className="py-c">
                                <h3>Problem Statement</h3>
                            </Col>
                            <Col xs={12} md={7} className="py-c">
                                <p><React.Fragment>{parse(content.problemstatement)}</React.Fragment></p>
                            </Col>
                        </>
                    }
                    {content.hasOwnProperty('requirements') &&
                        <><Col xs={12} md={5} className="py-c">
                            <h3>Requirements</h3>
                        </Col><Col xs={12} md={7} className="py-c">
                                <React.Fragment>{parse(content.requirements)}</React.Fragment>
                            </Col></>
                    }

                    {content.hasOwnProperty('persona') &&
                        <>
                            <Col xs={12} md={5} className="py-c">
                                <h3>Personas</h3>
                            </Col>
                            <Col xs={12} md={7} className="py-c">
                                {content.persona.map(item => (
                                    <img src={item} className="img-fluid mb-2" alt="" onClick={handleShow} />

                                ))}

                            </Col>
                        </>
                    }

                    {content.hasOwnProperty('storyboards') &&
                        <>
                            <Col xs={12} md={5} className="py-c">
                                <h3>Storyboards</h3>
                            </Col>
                            <Col xs={12} md={7} className="py-c">
                                <img src={content.storyboards} className="img-fluid mb-2" alt="" onClick={handleShow} />
                            </Col>
                        </>
                    }
                    {content.hasOwnProperty('IA') &&
                        <>
                            <Col xs={12} md={5} className="py-c">
                                <h3>Information Architecture</h3>
                            </Col>
                            <Col xs={12} md={7} className="py-c">
                                <div className="zoom">
                                    <img src={content.IA} className="img-fluid" alt="" onClick={handleShow} />
                                </div>
                            </Col>
                        </>
                    }
                    {content.hasOwnProperty('lowfidelity') &&
                        <>
                            <Col xs={12} md={5} className="py-c">
                                <h3>Low-Fidelity Prototypes</h3>
                            </Col>
                            <Col xs={12} md={7} className="py-c">
                                {content.lowfidelity.map(item => (
                                    <>
                                        <h4 className='mt-3'>{item.txt}</h4>
                                        <img src={item.img} className="img-fluid mb-2" alt="" onClick={handleShow} />
                                    </>
                                ))}
                                {/* <Row>
                                    <Col xs={12} md={6} className="">
                                        <img src={content.lowfidelity.img[0]} className="img-fluid mb-2" alt="" onClick={handleShow} />
                                        {content.lowfidelity.txt[0]}
                                    </Col>
                                    <Col xs={12} md={6} className="">
                                        <img src={content.lowfidelity.img[1]} className="img-fluid mb-2" alt="" onClick={handleShow} />
                                        {content.lowfidelity.txt[1]}
                                    </Col>
                                </Row> */}
                            </Col>
                        </>
                    }
                    {content.hasOwnProperty('wireframe') &&
                        <>
                            <Col xs={12} md={5} className="py-c">
                                <h3>Wireframes</h3>
                            </Col>
                            <Col xs={12} md={7} className="py-c">
                                {content.wireframe.map(item => (
                                    <>
                                        <h4 className='mt-3'>{item.txt}</h4>
                                        <img src={item.img} className="img-fluid mb-2" alt="" onClick={handleShow} />
                                    </>
                                ))}
                            </Col>
                        </>
                    }
                    {content.hasOwnProperty('components') &&
                        <>
                            <Col xs={12} md={5} className="py-c">
                                <h3>Components</h3>
                            </Col>
                            <Col xs={12} md={7} className="py-c">
                                <img src={content.components.img} className="img-fluid mb-2" alt="" onClick={handleShow} />
                                {content.components.txt}
                            </Col>
                        </>
                    }
                    {content.hasOwnProperty('highfidelity') &&
                        <>
                            <Col xs={12} md={5} className="py-c">
                                <h3>High-Fidelity Prototypes</h3>
                            </Col>
                            <Col xs={12} md={7} className="py-c">
                                <Carousel data-bs-theme="dark" slide={false} indicators={false} interval={5000}>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={content.highfidelity.img[0]}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h4>{content.highfidelity.title[0]}</h4>
                                            <p>{content.highfidelity.txt[0]}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={content.highfidelity.img[1]}
                                            alt="Second slide"
                                        />
                                        <Carousel.Caption>
                                            <h4>{content.highfidelity.title[1]}</h4>
                                            <p>{content.highfidelity.txt[1]}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={content.highfidelity.img[2]}
                                            alt="Third slide"
                                        />
                                        <Carousel.Caption>
                                            <h4>{content.highfidelity.title[2]}</h4>
                                            <p>{content.highfidelity.txt[2]}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={content.highfidelity.img[3]}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h4>{content.highfidelity.title[3]}</h4>
                                            <p>{content.highfidelity.txt[3]}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={content.highfidelity.img[4]}
                                            alt="Second slide"
                                        />
                                        <Carousel.Caption>
                                            <h4>{content.highfidelity.title[4]}</h4>
                                            <p>{content.highfidelity.txt[4]}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={content.highfidelity.img[5]}
                                            alt="Third slide"
                                        />
                                        <Carousel.Caption>
                                            <h4>{content.highfidelity.title[5]}</h4>
                                            <p>{content.highfidelity.txt[5]}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </>
                    }
                    {content.hasOwnProperty('development') &&
                        <>
                            <Col xs={12} md={5} className="py-c">
                                <h3>Development</h3>
                            </Col>
                            <Col xs={12} md={7} className="py-c">
                                <p><React.Fragment>{parse(content.development)}</React.Fragment></p>
                            </Col>
                        </>
                    }
                                        {content.hasOwnProperty('achievement') &&
                        <><Col xs={12} md={5} className="py-c">
                            <h3>Achievements</h3>
                        </Col><Col xs={12} md={7} className="py-c">
                                <React.Fragment>{parse(content.achievement)}</React.Fragment>
                            </Col></>
                    }
                    {content.hasOwnProperty('reflection') &&
                        <>
                            <Col xs={12} md={5} className="py-c">
                                <h3>Reflection</h3>
                            </Col>
                            <Col xs={12} md={7} className="py-c">
                                <p><React.Fragment>{parse(content.reflection)}</React.Fragment></p>
                            </Col>
                        </>
                    }
                </Row>
                {/* <Row>
                    <Col xs={12} className="my-auto text-center py-c">
                        © 2023. All Rights Reserved to Zoe Lo.
                    </Col>
                </Row> */}
            </Container>


            <Modal show={show} fullscreen={true} onHide={handleClose}>
                <Modal.Header closeButton>
                    {/* <Modal.Title>Modal heading</Modal.Title> */}
                </Modal.Header>
                <Modal.Body className="text-center"><img src={imgSrc} className="img-fluid" alt="" onClick={handleShow} /></Modal.Body>
            </Modal>
        </div>





    );


}



export default ProjectDetail;

