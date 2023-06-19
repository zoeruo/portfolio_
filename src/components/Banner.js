import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import TrackVisibility from 'react-on-screen';
import bannerimg from '../asset/img/bannerimg.png';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["I Design,", "I Write Codes,", "I Play the Piano"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner bg-theme pt-3" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} className="my-auto">
            <h1>Hi, this is Zoe Lo</h1>
            <h1><span className="wrap">{text}</span></h1>
          </Col>
          <Col xs={12} md={6}>
            <img src={bannerimg} className="img-fluid" alt="Banner img" />
          </Col>
        </Row>
      </Container>
    </section>

  )
}