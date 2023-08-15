import { Container, Row, Col } from "react-bootstrap";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import redflagsimg from '../asset/img/RedFlagsOut_projects.png';
import chghimg from '../asset/img/CHGH_projects.png';
import deepdive from '../asset/img/Deepdive_projects.png';
import arrowright from '../asset/img/arrow_right.png';
import arrowleft from '../asset/img/arrow_left.png';
import '@splidejs/react-splide/css';

export const Project = () => {

    return (
        <section className="bg-white">
            <Container>
                <Row>
                    <Col md={12}>
                        <h3>PROJECT</h3>
                    </Col>
                </Row>
                {/* <Row>
                    <Col md={4}>
                        <a href="#"><img src={redflagsimg} className="img-fluid" alt="" /></a>
                        <h4>Red Flags Out | 2023</h4>
                        <p>A dating app focusing on RedFlags</p>
                    </Col>

                </Row> */}
                <Row>
                    <Col md={12}>
                        <Splide hasTrack={false} aria-label="..." data-splide='{"type":"loop","perPage":3}'>
                            <SplideTrack>
                                <SplideSlide>
                                    <div className="div_slider splide__slide__container">
                                        <img src={chghimg} alt="Cheng Hsin General Hospital project photo" />
                                        <h4>Cheng Hsin General Hospital</h4>
                                        <p>Responsive Web Design</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="div_slider splide__slide__container">
                                        <img src={deepdive} alt="Deepdive project photo" />
                                        <h4>Deepdive | 2023</h4>
                                        <p>A learning and tracking app for freedivers</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="div_slider splide__slide__container">
                                        <img src={redflagsimg} alt="RedFlagsOut project photo" />
                                        <h4>Red Flags Out | 2023</h4>
                                        <p>A dating app focusing on RedFlags</p>
                                    </div>
                                </SplideSlide>
                            </SplideTrack>
                            <div className="splide__arrows">
                                <button className="splide__arrow splide__arrow--prev my-arrow"><img src={arrowleft} /></button>
                                <button className="splide__arrow splide__arrow--next my-arrow"><img src={arrowright} /></button>
                            </div>
                        </Splide>
                    </Col>
                </Row>

            </Container>



        </section>
    )



}