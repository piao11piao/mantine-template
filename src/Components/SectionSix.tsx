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
                                <Title order={1}>Impressum</Title>
                                 <p>Informationen über den Diensteanbieter.</p>
                                 <p><strong>Impressum der DANAXSSERT International Trading GmbH</strong></p>
                                   <p>
                                    <strong>DANAXSSERT International Trading GmbH</strong><br />
                                    Kronprinzenstr.14, <br />65185 Wiesbaden <br />Deutschland <br />
                                   </p>
                                   <p>
                                    <strong>Kontakt</strong> <br />   
                                    Telefon: 0049 1607683035 <br /> 
                                    E-Mail:<a href="mailto:sales@danaxssert.de"> sales@danaxssert.de </a> <br />
                                    Internet: https://international-trading.danaxssert.de <br />
                                   </p>
                                   <p>
                                    <strong>Registernummer:</strong><br /> HRB 34109 <br />
                                   </p>
                                   <p>
                                    <strong>Registergericht:</strong><br /> Handelsregister B des  Amtsgerichts Wiesbaden <br />
                                   </p>
                                   <p>
                                    <strong>Geschäftsführer:</strong> <br /> Piao Wang <br /> 
                                   </p>
                                 <p>Alle Texte sind urheberrechtlich geschützt.</p>
                            </Text>
                        </div>
                        
                    </Grid.Col>
                    <Grid.Col xs={6} sm={4} md={4} lg={4}>
                        <Image src={require('../Images/lime-surfing.png')} alt={'sample1'} style={{ width: '100%' }} />
                    </Grid.Col>
                </Grid>
            </Container>
        </section>
    )
};

export default SectionSix;
