import { Title, Text, Container, Grid, Image, Button } from '@mantine/core';

const SectionSeven = () => {
    //const theme = useMantineTheme();

    return (
        <section id="section-seven">
            <Container>
                <Grid justify="space-around">
       
                         <Grid.Col xs={6} sm={4} md={4} lg={4}>
                        <Image src={require('../Images/lime-surfing.png')} alt={'sample1'} style={{ width: '100%' }} />
                    </Grid.Col>
                </Grid>
            </Container>
        </section>
    )
};

export default SectionSeven;
