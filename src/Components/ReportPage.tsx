import { Title, Text, Container, Grid, Image, Button } from '@mantine/core';

const ReportPage = () => {
    //const theme = useMantineTheme();

    return (
        <section id="ReportPage">
            <Container>
                <Grid justify="space-around">
                    <Grid.Col xs={6} sm={12} md={12} lg={12}>
                        <div style={{ marginBottom: 20 }}>
                            <Text color="black">
                                <Title order={1}>Report</Title>
                                Dennis Farina was one of Hollywood's busiest actors and a familiar face to moviegoers and television viewers alike.
                                Impressum Impressum Impressum Impressum 
                                Impressum Impressum Impressum Impressum
                            </Text>
                        </div>
                        <Button color="yellow">Check it out</Button>
                    </Grid.Col>
                  
                    <Grid.Col xs={6} sm={12} md={12} lg={12}>
                            


                        <div style={{ marginBottom: 20 }}>
                            <Text color="black">
                                <Title order={1}>Report</Title>
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

export default ReportPage;
