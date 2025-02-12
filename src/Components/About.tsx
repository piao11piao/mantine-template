import { Text, Container, Anchor, MediaQuery, Button } from '@mantine/core';
import { MdOutlineArrowDownward } from "react-icons/md";
import { Link } from 'react-scroll';

const About = () => {
    //const theme = useMantineTheme();

    return (
        <section id="about">
            <Container fluid>

                <div className="about-content">

                    <div style={{ marginBottom: 15 }}>
                        <Text transform="uppercase" weight={500} color="yellow">
                            MADE SILICON POSSIBLE
                        </Text>
                    </div>

                    <div style={{ marginBottom: 15 }}>
                        <Text>
                            <MediaQuery query="(max-width: 768px)" styles={{ fontSize: '2.8rem !important' }}>
                                <h1 className="title">DANAXSSERT International Trading GmbH</h1>
                            </MediaQuery>
                        </Text>
                    </div>

                    <div style={{ marginBottom: 25 }}>
                        <Text size="xl" color="black">
                            YOU CAN PUT THINGS HIER.
                        </Text>
                    </div>

                    <div className="buttons">
                        <Link to="section-one" smooth duration={500}>
                            <Button color="yellow" rightIcon={<MdOutlineArrowDownward size={16} />} radius="lg" size="md">Tell me more</Button>
                        </Link>

                        <Button variant="default" radius="lg" size="md">Other stuff</Button>
                    </div>

                </div>

            </Container>

        </section>
    );
};

export default About;
