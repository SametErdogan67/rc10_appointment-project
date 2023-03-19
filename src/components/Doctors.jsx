import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Doctors = ({ doctors }) => {
  // const { img, dep, name } = doctors;
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "purple" }}>
        Our Doctors
      </h3>

      <Row className="justify-content-center">
        {doctors.map((dr) => (
          <Col key={dr.id} xs={6} sm={4} md={3}>
            <img src={dr.img} alt="image" className="img-thumbnail" />
            <h4>{dr.name}</h4>
            <h5>{dr.dep}</h5>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Doctors;
