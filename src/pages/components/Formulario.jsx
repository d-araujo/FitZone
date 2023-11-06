import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from 'react-bootstrap/Button';

function Formulario() {
  return (
    <div>
      <div className="container">

        <InputGroup className="mb-3">
          <InputGroup.Text>ID produto</InputGroup.Text>
          <Form.Control aria-label="First name" />
        </InputGroup>

        <FloatingLabel controlId="floatingTextarea2" label="Descrição">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>

<br />

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Marca
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Data de fabricação
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Quantidade em estoque
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <br />
        <Button variant="success">Enviar</Button>
      </div>
    </div>
  );
}

export default Formulario;
