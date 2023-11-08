import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Produto() {
  return (
    <div>
      <h1 className="d-flex justify-content-center">PRODUTOS EM DESTAQUE</h1>
      <br /> 
      <div className="d-flex p-2 justify-content-around">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://img.irroba.com.br/fit-in/500x500/filters:format(webp):fill(fff):quality(80)/naturalf/catalog/wallball/16-03/24-03/30-03/esteira-curva-humanizada-bianca-ambientado.jpg"
          />
          <Card.Body>
            <Card.Title>Esteira Curva Simulador de Corrida Consport</Card.Title>
            <Card.Text>
              Esteria para simular corrida.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://img.irroba.com.br/fit-in/500x500/filters:format(webp):fill(transparent):quality(80)/naturalf/catalog/wallball/16-03/24-03/30-03/30-mob/suporte-banqueta-ambientado-2.png"
          />
          <Card.Body>
            <Card.Title>Suporte Cavalete regulável</Card.Title>
            <Card.Text>
              Suporte para academia.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://img.irroba.com.br/fit-in/500x500/filters:format(webp):fill(fff):quality(80)/naturalf/catalog/descricao-nova/suporte-de-agachamento-livre-descricao-nova.jpg"
          />
          <Card.Body>
            <Card.Title>Suporte para agachamento livre</Card.Title>
            <Card.Text>
              Suporte para realizar agachamento livre.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Produto;
