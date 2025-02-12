import { Carousel } from '@mantine/carousel';
import { Image, Text, Container, useMantineTheme, Title } from '@mantine/core';
import '../Styles/SectionOne.scss';
import product1Img from '../Images/lime-surfing.png'; // use ES6 import for the image
import product2Img from '../Images/lime-surfing.png';
import product3Img from '../Images/lime-surfing.png';
import product4Img from '../Images/lime-surfing.png';
import product5Img from '../Images/lime-surfing.png';
import product6Img from '../Images/lime-surfing.png';

const SectionOne = () => {
    const theme = useMantineTheme();

    const carouselContent = {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column' as 'column',
        backgroundColor: theme.colors.yellow[5],
        borderRadius: 15,
        gap: 15
    };

    return (
        <section id="section-one">
            <Container>
                <Text color="black" align="center" mb="15px">
                    <Title order={1}>Explain something in this carousel</Title>
                </Text>

                <Text color="black" align="center" mb="25px">
                    You can insert images or some texts if you need.
                </Text>

                <Carousel
                    withIndicators
                    height={300}
                    slideSize="33.333333%"
                    slideGap="md"
                    breakpoints={[
                        { maxWidth: 'md', slideSize: '50%' },
                        { maxWidth: 'sm', slideSize: '100%', slideGap: 15 },
                    ]}
                    loop
                    align="start"
                    pr="10px"
                    pl="10px"
                >
                    <Carousel.Slide>
                        <div style={carouselContent}>
                            <Title order={2}>1</Title>
                            
                            
                             <Image 
                                src={product1Img} 
                                alt={'sample1'} 
                                style={{ width: '100%' }} 
                              />

                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                            <Title order={2}>2</Title>

                             <Image
                                src={product2Img}
                                alt={'sample2'}
                                style={{ width: '100%' }}
                              />


                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                            <Title order={2}>3</Title>
                            <Text>Mh, maybe here too?</Text>
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                            <Title order={2}>4</Title>
                            <Text>If you'd like to you could do that here...</Text>
                             
                              <Image
                                src={product3Img}
                                alt={'sample1'}
                                style={{ width: '100%' }}
                              />

                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                            <Title order={2}>5</Title>
                            <Text>Woah, you are quite convincing..</Text>
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                            <Title order={2}>6</Title>
                            <Text>And we are done with the cards!</Text>
                        </div>
                    </Carousel.Slide>
                </Carousel>
            </Container>
        </section>
    );
};

export default SectionOne;
