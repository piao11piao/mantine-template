import { Title, Text, Container, Grid, Image, Button } from '@mantine/core';

const SectionSix = () => {
    //const theme = useMantineTheme();

    return (
        <section id="section-six">
            <Container>
                <Grid justify="space-around">
                    <Grid.Col xs={6} sm={8} md={8} lg={8}>
                        <div style={{ marginBottom: 20 }}>
                            <Text color="black">
                                <Title order={1}>Imprint</Title>
                                 
                                 <p><strong>Imprint of DANAXSSERT International Trading GmbH</strong></p>
                                   <p>
                                    <strong>DANAXSSERT International Trading GmbH</strong><br />
                                    Kronprinzenstr.14 <br />65185 Wiesbaden <br />Germany <br />
                                   </p>
                                   <p>
                                    <strong>Contact</strong> <br />   
                                    Telefon: +49 1607683035 <br /> 
                                    E-Mail:<a href="mailto:sales@danaxssert.de"> sales@danaxssert.de </a> <br />
                                    Internet: https://international-trading.danaxssert.de <br />
                                   </p>
                                   <p>
                                   <strong>VAT Number</strong><br /> DE361163826  <br />
                                   </p>
                                   <p>
                                    <strong>Register Entries</strong><br /> Registration Court: Court Wiesbaden HRB 34109 <br />
                                   </p>
                
                                   <p>
                                    <strong>Director</strong> <br /> Piao Wang <br /> 
                                   </p>
                            </Text>
                        </div>
                        
                    </Grid.Col>
                    <Grid.Col xs={6} sm={4} md={4} lg={4}>
                      
                    </Grid.Col>
                </Grid>
            </Container>
        </section>
    )
};

export default SectionSix;
