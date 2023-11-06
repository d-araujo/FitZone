import Carousel from 'react-bootstrap/Carousel';

function Carrosel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-premium/contemporaneo-impecavel-centro-de-fitness-interior-generative-ai_391052-10889.jpg?w=740" 
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/homem-jovem-em-sportswear-um-classe-exercicio-em-um-ginasio_1150-12372.jpg?w=740&t=st=1699280355~exp=1699280955~hmac=285da60fdb5950045f1b853da283398c36af2a72a6ec2c3c0981f4ed0f350483"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/ginasio-com-equipamento-de-ciclismo-indoor_23-2149270210.jpg?w=740&t=st=1699280554~exp=1699281154~hmac=20d61de2a2d90432a555c44fd8f4407a331fd6f5a240a4def7ca51400bb703fe"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrosel;