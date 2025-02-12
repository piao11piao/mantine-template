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
                                 <p><strong>Danaxssert International Trading GmbH</strong></p>
                                 <p>
                                    <strong>Addr.:</strong> Kronprinzenstr.14, 65185 Wiesbaden,Deutschland <br />
                                    <strong>Tel.:</strong>0049 1607683035 <br /> 
                                    <strong>E-Mail:</strong> <a href="mailto:sales@danaxssert.de"> sales@danaxssert.de </a> <br />
                                    <strong>Register:</strong> Handelsregister <br />
                                    <strong>Registernummer:</strong> HRB 34109 <br />
                                    <strong>Registergericht:</strong> Handelsregister B des  Amtsgerichts Wiesbaden <br />
                                    <strong>Geschäftsführer:</strong> Piao Wang <br />
                                    <strong>E-Mail:</strong> <a href="mailto:michael.wang@danaxssert.de"> michael.wang@danaxssert.de </a> <br />
                                    <strong>Tel.:</strong> 0049 1607683035  <br />
                                    <strong>Impressum:</strong> https:international-trading.danaxssert.de/impressum/   <br /> 
                                </p>
                                <p>Alle Texte sind urheberrechtlich geschützt.</p>
                            </Text>
                        </div>
                        <Button color="yellow">Check it out</Button>
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
