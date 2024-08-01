import React from 'react';
import SystemProcesses from '../components/SystemProcesses';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const SystemProcessesPage = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2 className="text-center">System Processes</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <SystemProcesses />
        </Col>
      </Row>
    </Container>
  );
};

export default SystemProcessesPage;
