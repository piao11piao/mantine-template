import { Title, Text, Container, Grid, Image, Button } from '@mantine/core';

const QualityAssurance = () => {
    //const theme = useMantineTheme();

    return (
        <section id="quality-assurance">
            <Container>
                <Grid justify="space-around">
                    <Grid.Col xs={6} sm={12} md={12} lg={12}>
                        <div style={{marginTop: 100, marginBottom: 20 }}>
                            <Text color="black">
                                <Title order={1}>Quality Assurance</Title>
                               
                                DANAXSSERT International Trading GmbH is committed to delivering <strong>high-quality silicon metal</strong>,ensuring that every batch meets strict international standards.<br />
                                <h3>Strict Material Selection</h3>
                                <ul>
                                 <li>We only cooperate with certified smelters to ensure material purity and consistency.</li> 
                                 <li>Quality inspection standards are enforced throughout the whole process to prevent low￾quality materials from entering the supply chain.</li>
                                  </ul>
                                <h3>International Standard Testing</h3>
                                <ul>
                                 <li>All silicon metal products undergo advanced testing technologies to ensure precise chemical composition compliance.</li>
                                 <li> We support third-party certification (e.g., SGS, BV, Intertek) and provide authoritative test reports.</li>
                                  </ul>
                               <a href="https://international-trading.danaxssert.de/report" target="_blank" rel="noopener noreferrer"><Button color="yellow">Check previous report</Button></a>
                               
                            </Text>
                        </div>
                    </Grid.Col>
                  
                    <Grid.Col xs={6} sm={12} md={12} lg={12}>
                            


                        <div style={{ marginBottom: 20 }}>
                            <Text color="black">
                                <Title order={1}>Quality Assurance</Title>
                                Dennis Farina was one of Hollywood's busiest actors and a familiar face to moviegoers and television viewers alike.
                                Impressum Impressum Impressum Impressum
                                Impressum Impressum Impressum Impressum
                            </Text>
                        </div>

                     </Grid.Col>
                </Grid>
            </Container>
        </section>
    )
};

export default QualityAssurance;
