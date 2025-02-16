import { Image, Button, Badge, Burger, Drawer, Code, Title, Anchor, Text } from '@mantine/core';
import { UnstyledButton, Group, Avatar } from '@mantine/core';
import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    //const theme = useMantineTheme();
    const [opened, setOpened] = React.useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';

    return (
        


    <header
      style={{
        position: 'sticky',  // Sticky positioning
        top: 0,              // Stick to the top of the page
        zIndex: 1000,        // Ensure it stays above other content
        backgroundColor: '#fff',  // Optional: For better visibility
        boxShadow: '0 4px 2px -2px gray',  // Optional: Add shadow for better contrast      
      }}
    >


            <div className="content-desktop">
                <div>
                    <Badge size="lg" radius={10} color="yellow">THIS IS BADGE</Badge>
                </div>
                <div className="navbar">
    
                    
                     <div className="navbar-item">
                       <Link to="section-one" smooth duration={500}>
                       <Button variant="light" color="yellow" radius="lg" size="md">Products</Button> 
                       </Link>

                    </div>

                    <div className="navbar-item">
                        <Link to="section-four" smooth duration={500}>
                           <Button variant="light" color="yellow" radius="lg" size="md">Sales</Button> 
                        
                       </Link>
                    </div>
  


           


                    <div className="navbar-item"><Link to="section-six" smooth duration={500}><Button variant="light" color="yellow" radius="lg" size="md">Imprint</Button></Link></div>





                    
                </div>
            </div>

            <div className="content-mobile">
                <div className="burger-button">
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        title={title}
                        size="sm"
                    />
                </div>

                <Drawer
                    transition="rotate-right"
                    transitionDuration={250}
                    transitionTimingFunction="ease"
                    overlayOpacity={0.55}
                    position="right"
                    closeButtonLabel="Close drawer"
                    title="Menu"
                    padding="xl"
                    opened={opened}
                    onClose={() => setOpened(false)}
                >
                    <div className="menu">
                        <div className="menu-items">
                            <div className="menu-item"><Link to="section-one" smooth duration={500} onClick={() => setOpened(false)}><Title order={2}>Products</Title></Link></div>
                            <div className="menu-item"><Link to="section-four" smooth duration={500} onClick={() => setOpened(false)}><Title order={2}>Sales</Title></Link></div>
                            <div className="menu-item"><Link to="section-six" smooth duration={500} onClick={() => setOpened(false)}><Title order={2}>Imprints</Title></Link></div>
                        </div>

                        <div className="menu-items">
                            <Text>Contact</Text>

                            <Anchor href="mailto:sales@danaxssert.de">
                                sales@danaxssert.de
                            </Anchor>
                        </div>



                        <Code color="yellow" style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: 15 }}>
                         
                            <Anchor href="mailto:sales@danaxssert.de">
                              

                               <Image src={require('../Images/visitencard.png')} alt={'sample1'} style={{ width: '100%' }} />
                            </Anchor>
                        </Code>
                    </div>
                </Drawer>
            </div>
        </header>
    );
};

export default Header;

const redirectToLink = (link: string): void => {
    window.open(link, '_blank');
};
