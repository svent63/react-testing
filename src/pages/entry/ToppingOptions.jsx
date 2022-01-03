import Col from "react-bootstrap/Col";

export default function ToppingOption({ name, imagePath }) {
  return (
    <Col>
      <img src={`http://localhost:3030/${imagePath}`} alt={`${name} topping`} />
    </Col>
  );
}
