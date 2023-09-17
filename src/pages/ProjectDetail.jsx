import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import bannerimg from '../asset/img/RedFlagsOut_main.png';
import { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { contents } from './ProjectsContent';


function ProjectDetail(props) {
    //read url param (App Route path)
    const { title } = useParams();
    // const [title, setTitle] = useState("");
    // const [img, setImg] = useState();
    const content = contents[title]


    // setTitle(pam)
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6} className="my-auto">
                        <h1 className="display">{title}</h1>
                        {/* <h2 className="shortdesc">A dating app focusing on Red Flags</h2> */}
                        <h2 className="shortdesc">{content.subtitle}</h2>
                    </Col>
                    <Col xs={12} md={6} className="py-3">
                        <img src={bannerimg} className="img-fluid" alt="Banner img" />
                    </Col>
                </Row>
            </Container>
            <div className="bg-theme">
                <Container >
                    <Row className="py-3">
                        <Col xs={12} md={12} className="py-3">
                            <h3>Overview</h3>
                            <p>Red Flags Out is dedicated to fostering healthy and respectful relationships by addressing the frequently overlooked issue of red flags in the realm of dating.</p>
                            <p>Our primary objective is to establish a dating environment that prioritizes respect, communication, and trust. Through our platform, we encourage open and honest conversations about boundaries and dealbreakers, empowering individuals to recognize and address potential red flags before entering into relationships. We equip users with the necessary tools, resources, and guidance to identify and navigate these warning signs during the process of forming meaningful connections.</p>
                            <p>By proactively promoting a safe and supportive space, we aim to prevent potentially dangerous or unhealthy relationships from taking root. Red Flags Out aims to revolutionize the dating landscape, facilitating the cultivation of healthy, fulfilling relationships based on mutual respect and shared values.</p>
                        </Col>
                        <Col xs={12} md={12} className="py-3">
                            <h3>Duration</h3>
                            <p>9 Weeks<br />
                                9 March - 11 May 2023</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    );


}



export default ProjectDetail;

