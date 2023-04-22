

import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

function ErrorPage() {
  return (
    <Container className="mt-5 bg-danger p-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className=" mb-3 ">404 Page Not Found</h1>
          <p className="text-center">A página que você está procurando não foi encontrada.</p>
          <div className="text-center">
            <Button as={Link} to="/" variant="warning" className="mt-5 p-3">Inicio</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ErrorPage;
