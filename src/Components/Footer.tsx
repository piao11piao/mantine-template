import { Image,useMantineTheme, Container, Grid, Text, Button, Group, Avatar, UnstyledButton, Anchor, Code } from '@mantine/core';

const Footer = () => {
    const theme = useMantineTheme();
    
    return (
        <footer style={{ backgroundColor: theme.colors.yellow[6]}}>

            <Container>
                <Grid justify="space-around">

                    <Grid.Col xs={12} sm={8} md={8} lg={8}>
                        
                        <Text size="xl" weight={700} color="white" mb="10px">DANAXSSERT International Trading GmbH</Text> 
                        <Text color="white" mb="5px">
                            Tel:  +49 1607683035
                        </Text>
                        <Text color="white" mb="5px"> 
                            Addr: Kronprinzenstr.14, 65185 Wiesbaden, Germany
                        </Text>

                        <Text color="white" mb="20px">
                            Email: sales@danaxssert.de <Anchor href="mailto:sales@danaxssert.de"></Anchor>
                        </Text>

                        <Button variant="white" color="black" onClick={() => window.location.href=("mailto:sales@danaxssert.de")} > Send email to us</Button>
                    </Grid.Col>

                    <Grid.Col xs={12} sm={4} md={4} lg={3.5}>
                        <Code color="yellow" style={{ display: 'flex', flexDirection: 'column', gap: 0, padding: 0 }}>
            
                        <Anchor href="mailto:sales@danaxssert.de">    
                         <Image src={require('../Images/visitencard.png')} alt={'sample1'} style={{ width: '100%' }} />
                         </Anchor>
                      
                        </Code>
                    </Grid.Col>
                </Grid>
            </Container>
        </footer>
    )
};

export default Footer;

const redirectToLink = (link: string): void => {
    window.open(link, '_blank');
};
