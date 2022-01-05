import Col from "react-bootstrap/Col";
import Form from "react-bootstrap";

export default function ScoopOption({ name, imagePath, updateItemCount }) {
  const handleChange = (event) => {
    updateItemCount(name, event.target.value);
  };
  return (
    <Col>
      <img src={`http://localhost:3030/${imagePath}`} alt={`${name} scoop`} />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Form.Label style={{ textAlign: "right" }}>{name}</Form.Label>
        <Col style={{ textAlign: "left" }}>
          <Form.Control
            type="number"
            defaultValue={0}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
    </Col>
  );
}
