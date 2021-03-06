import { Col, Container, Row } from "react-bootstrap";
import JokeBoard from "./projects/JokeBoard";
import ToDo from "./projects/ToDo";
import CrimeReport from "./projects/CrimeReport";
import Location from './projects/Location';
import "../sass/project.scss";

export default function Projects(props) {

    return(
        <section id="projects" ref={e => props.refer.current[2] = e}>
            <br />
            <Row className="project">
                <Col xs={12} md={{span: 6}} lg={4} className="mt-3">
                    <JokeBoard />
                </Col>
                <Col xs={12} md={{span: 6}} lg={4} className="mt-3">
                    <ToDo />
                </Col>
                <Col xs={12} md={{span: 6}} lg={4} className="mt-3">
                    <CrimeReport />
                </Col>
                <Col xs={12} md={{span: 6}} lg={4} className="mt-3">
                    <Location />
                </Col>
            </Row>
        </section>
    );
}