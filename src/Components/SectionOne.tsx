import { Carousel } from '@mantine/carousel';
import { Image, Text, Container, useMantineTheme, Title } from '@mantine/core';
import '../Styles/SectionOne.scss';
import product1Img from '../Images/quality.png'; // use ES6 import for the image
import product2Img from '../Images/price.png';
import product3Img from '../Images/supply.png';
import product4Img from '../Images/reputation.png';
import product5Img from '../Images/deliveryleadtime.png';
import product6Img from '../Images/environmental.png';

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
        gap: 15,
    };

    return (
        <section id="section-one">
            <Container>
                <Text color="black" align="center" mb="15px">
                    <Title order={1}>  </Title>
                </Text>
                <Text color="black" align="center" mb="15px">
                    <Title order={1}>Products</Title>
                </Text>

                <Text color="black" align="center" mb="25px">
                    The most concerning topics regarding silicon metal.
                </Text>

                <Carousel
                    withIndicators
                    height={300}
                    slideSize="33.333333%"
                    slideGap="md"
                    breakpoints={[
                        { maxWidth: 'md', slideSize: '50%' },
                        { maxWidth: 'sm', slideSize: '80%', slideGap: 15 },
                    ]}
                    loop
                    align="start"
                    pr="15px"
                    pl="15px"
                >
                    <Carousel.Slide>
                        <div style={carouselContent}>
                            
                            
                            
                             <Image 
                                src={product1Img} 
                                alt={'sample1'} 
                                style={{ width: '90%' }} 
                              />

                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                   

                             <Image
                                src={product2Img}
                                alt={'sample1'}
                                style={{ width: '90%' }}
                              />


                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                 
              
                             <Image
                                src={product3Img}
                                alt={'sample1'}
                                style={{ width: '90%' }}
                              />
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                 
                             
                              <Image
                                src={product4Img}
                                alt={'sample1'}
                                style={{ width: '90%' }}
                              />

                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                           
                             <Image
                                src={product5Img}
                                alt={'sample1'}
                                style={{ width: '90%' }}
                              />
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                 
                             <Image
                                src={product6Img}
                                alt={'sample1'}
                                style={{ width: '90%' }}
                              />
                        </div>
                    </Carousel.Slide>
                </Carousel>
            </Container>
        </section>
    );
};

export default SectionOne;
