import { useMantineTheme, Container, Grid, Text, Button, Group, Avatar, UnstyledButton, Anchor, Code } from '@mantine/core';

const Footer = () => {
    const theme = useMantineTheme();
    
    return (
        <footer style={{ backgroundColor: theme.colors.yellow[6]}}>

            <Container>
                <Grid justify="space-around">

                    <Grid.Col xs={12} sm={8} md={8} lg={8}>
                        
                        <Text size="xl" weight={700} color="white" mb="10px">Danaxssert International Trading GmbH</Text> 
                        <Text color="white" mb="5px">
                            Tel:  0049 1607683035
                        </Text>
                        <Text color="white" mb="5px"> 
                            Addr: Kronprinzenstr.14 65185 Germany
                        </Text>

                        <Text color="white" mb="20px">
                            Email: sales@danaxxsert.de <Anchor href="mailto:https://sales@danaxssert.de"></Anchor>
                        </Text>

                        <Button variant="white" color="black" onClick={() => redirectToLink("mailto:https://sales@danaxssert.de")} > Send email to us</Button>
                    </Grid.Col>

                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                        <Code color="yellow" style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: 15 }}>
                            T#######
                            <Anchor href="mailto:https://sales@danaxssert.de">
                                <UnstyledButton>
                                    <Group>
                                        <Avatar size={40} color="orange">DANAXSSERT</Avatar>
                                        <div>
                                            <Text>SALES</Text>
                                            <Text size="xs" color="dimmed">sales@danaxssert.de</Text>
                                        </div>
                                    </Group>
                                </UnstyledButton>
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
