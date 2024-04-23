import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import proImg1 from "../assets/img/project-img1.png";
import proImg2 from "../assets/img/project-img2.png";
import proImg3 from "../assets/img/project-img3.png";

export const Projects = () => {

  const projects = [
    {
        title: "Project 1",
        description: "This is the description of project 1",
        imgUrl: proImg1,
    },
    {
        title: "Project 2",
        description: "This is the description of project 2",
        imgUrl: proImg2,
    },
    {
        title: "Project 3",
        description: "This is the description of project 3",
        imgUrl: proImg3,
    },
    {
        title: "Project 4",
        description: "This is the description of project 4",
        imgUrl: proImg1,
    },
    {
        title: "Project 5",
        description: "This is the description of project 5",
        imgUrl: proImg2,
    },
    {
        title: "Project 6",
        description: "This is the description of project 6",
        imgUrl: proImg3,
    },
    
  ];

  return (
    <section className='projects' id='projects'>
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>These are some of the projects I have worked on.</p>
                    <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav variat='pills' className='nav-pills mb-5 justify-content-center' id='pills-tab'>
                        <Nav.Item>
                            <Nav.Link eventKey='first'>Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='second'>Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='third'>Tab Three</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey='first'>
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey='second'>Second Project</Tab.Pane>
                        <Tab.Pane eventKey='third'>Third Project</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>             
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src = {colorSharp2} alt='Backgroud'/>
    </section>

  )


}