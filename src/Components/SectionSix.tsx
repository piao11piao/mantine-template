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
                                 <p>Impressum</p>
                                 <p>Impressum</p>
                                 <p>Informationen über den Diensteanbieter.</p>
                                 <p><strong>Danaxssert International Trading GmbH</strong></p>
                                 <p>Kronprinzenstr.14,</p>
                                 <p>65185 Wiesbaden,Deutschland <br /> test </p>
                                 <p><strong>Tel.:</strong>0049 1607683035</p>
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
