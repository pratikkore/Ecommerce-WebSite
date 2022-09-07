import Carousel from 'react-bootstrap/Carousel';
import logo from '../logo.svg'
import './Css/Home.css'
function Home() {
  return (
    <Carousel slide>
    <Carousel.Item>
      <img
        className="d-block w-100 padd-img"
        src="/images/home/garments.jpg"
        style={{borderRadius:"15px"}}
        height="500"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 padd-img"
        src="/images/home/tools.jpg"
        style={{borderRadius:"15px"}}
        height="500"
        alt="Second slide"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 padd-img"
        src="/images/home/toys.webp"
        style={{borderRadius:"15px"}}
        height="500"
        alt="Third slide"
      />

    </Carousel.Item>
  </Carousel>
  );
}

export default Home;