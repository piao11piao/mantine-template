import { Text, Container, Anchor, MediaQuery, Button } from '@mantine/core';
import { MdOutlineArrowDownward } from "react-icons/md";
import { Link } from 'react-scroll';

const About = () => { 
    //const theme = useMantineTheme();

    return (
        <section id="about">
            <Container fluid  mb="20px">

                <div className="about-content">

         

                    <div style={{ marginBottom: 15 }}>
                        <Text>
                            <MediaQuery query="(max-width: 768px)" styles={{ fontSize: '2.8rem !important' }}>
                                <h1 className="title">DANAXSSERT</h1>      
                            </MediaQuery>
                            <MediaQuery query="(max-width: 768px)" styles={{ fontSize: '2.8rem !important' }}>


                                <h1 className="title">International Trading GmbH</h1>
                            </MediaQuery>

                           
                        </Text>

                    </div>




                    <div style={{ marginBottom: 25 }}>
                        <Text size="xl" color="black">
                            Empowering Industries with Premium Silicon Metal Solutions
                        </Text>
                    </div>

                    <div className="buttons">
                        <Link to="section-seven" smooth duration={500}>
                            <Button color="yellow" radius="lg" size="md">Contact Us</Button>
                        </Link>
  
                       
                       <Link to="about-us" smooth duration={500}>
    
                           <Button variant="outline" color="yellow" radius="lg" size="md">About the Company</Button>
                        </Link>

                  </div>

                </div>

            </Container>

        </section>
    );
};

export default About;
