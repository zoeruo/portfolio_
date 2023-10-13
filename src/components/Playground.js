import { Container, Row, Col } from "react-bootstrap";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { Link } from "react-router-dom";
import starrywavesimg from '../asset/img/SW_m0.png';
import thewindowimg from '../asset/img/TW_m0.png';
import arrowright from '../asset/img/arrow_right.png';
import arrowleft from '../asset/img/arrow_left.png';
import '@splidejs/react-splide/css';

export const Playground = () => {

    return (
        <section id ="Playground" className="bg-theme">
            <Container>
                <Row className="py-2">
                    <Col md={12}>
                        <h3>PLAYGROUND</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Link to="https://zoeruo.github.io/Audio-visualization-and-Sound-with-p5.js/" className="nav-link" target="_blank"><img src={starrywavesimg} className="img-fluid mb-3" alt="" /></Link>
                        <h5 className="mb-1">Srarry Waves | 2023</h5>
                        <p>An interactive sound canvas created by P5.js</p>
                    </Col>
                    <Col md={4}>
                        <Link to="/ProjectDetail/TheWindow" className="nav-link"><img src={thewindowimg} className="img-fluid mb-3" alt="" /></Link>
                        <h5 className="mb-1">The Window | 2017</h5>
                        <p>Installaton Art</p>
                    </Col>
                    {/* <Col md={4}>
                        <Link to="/ProjectDetail/CHGH" className="nav-link"><img src={chghimg} className="img-fluid mb-3" alt="" /></Link>
                        <h5 className="mb-1">Cheng Hsin General Hospital | 2020</h5>
                        <p>Responsive Web Design</p>
                    </Col> */}
                    

                </Row>
                {/* <Row>
                    <Col md={12}>
                        <Splide hasTrack={false} options={{
                            type: 'loop',
                            perPage: 3,
                            rewind : true
                            
                        }}
                            aria-label=""
                        >
                            
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
                                <button className="splide__arrow splide__arrow--prev my-arrow"><img src={arrowleft} style={{ width: 40 }} /></button>
                                <button className="splide__arrow splide__arrow--next my-arrow"><img src={arrowright} /></button>
                            </div>
                        </Splide>
                    </Col>
                </Row> */}



            </Container>
        </section>
    )

}