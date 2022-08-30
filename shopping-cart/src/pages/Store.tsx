import { Row, Col } from "react-bootstrap";
import monitors from "../data/monitors.json";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  return (
    <>
      <Row md={2} xs={1} lg={3} className="g-3">
        {monitors.map((monitor) => (
          <Col key={monitor.id}>
            <StoreItem {...monitor} />
          </Col>
        ))}
      </Row>
    </>
  );
}
