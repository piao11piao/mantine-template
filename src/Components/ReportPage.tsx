import { Flex, Title, Text, Container, Grid, Image, Button } from '@mantine/core';
import certificate1Img from '../Images/certificate1.png'; // use ES6 import for the image
import certificate2Img from '../Images/certificate2.png';
import certificate3Img from '../Images/certificate3.png';
import certificate4Img from '../Images/certificate4.png';
import certificate5Img from '../Images/certificate5.png';
import certificate6Img from '../Images/environmental.png';
const ReportPage = () => {
    //const theme = useMantineTheme();

    return (
        <section id="ReportPage">
            <Container>
                <Grid justify="space-around">
                    <Grid.Col xs={6} sm={12} md={12} lg={12}>
                        <div style={{ marginBottom: 20 }}>
                            <Text color="black">
                                <Title order={1} style={{ textAlign: 'center' }} >Previous Third-party Test Reports</Title>
                            <Flex

                              mih={50}
                              bg="rgba(255, 255, 255, 0)"
                              gap="xs"
                              justify="center"
                              align="center"
                              direction="row"
                              wrap="wrap"

                             >
                              <Image
                                src={certificate1Img}
                                alt={'sample1'}
                                style={{ width: '31%' }}
                              />
                              <Image
                                src={certificate2Img}
                                alt={'sample1'}
                                style={{ width: '31%' }}
                              />
                              <Image
                                src={certificate3Img}
                                alt={'sample1'}
                                style={{ width: '31%' }}
                              />
                              <Image
                                src={certificate4Img}
                                alt={'sample1'}
                                style={{ width: '31%' }}
                              />
                              <Image
                                src={certificate5Img}
                                alt={'sample1'}
                                style={{ width: '31%' }}
                              />
                            </Flex>
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
