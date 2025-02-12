import { Button, Badge, Burger, Drawer, Code, Title, Anchor, Text } from '@mantine/core';
import { UnstyledButton, Group, Avatar } from '@mantine/core';
import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    //const theme = useMantineTheme();
    const [opened, setOpened] = React.useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';

    return (
        <header>
            <div className="content-desktop">
                <div>
                    <Badge size="lg" radius={10} color="yellow">#######</Badge>
                </div>
                <div className="navbar">
                    <div className="navbar-item"><Link to="section-one" smooth duration={500}>Products</Link></div>
                    <div className="navbar-item"><Link to="section-four" smooth duration={500}>Sales</Link></div>
                    <div className="navbar-item"><Link to="section-five" smooth duration={500}>FAQS</Link></div>
                    <div className="navbar-item"><Link to="section-six" smooth duration={500}>Impressum</Link></div>
                    
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
                            <div className="menu-item"><Link to="section-one" smooth duration={500} onClick={() => setOpened(false)}><Title order={2}>Carousel</Title></Link></div>
                            <div className="menu-item"><Link to="section-four" smooth duration={500} onClick={() => setOpened(false)}><Title order={2}>Cards</Title></Link></div>
                            <div className="menu-item"><Link to="section-five" smooth duration={500} onClick={() => setOpened(false)}><Title order={2}>FAQs</Title></Link></div>
                            <div className="menu-item"><Link to="section-six" smooth duration={500} onClick={() => setOpened(false)}><Title order={2}>FAQs</Title></Link></div>
                        </div>

                        <div className="menu-items">
                            <Text>Contact</Text>

                            <Anchor href="mailto:sales@danaxssert.de">
                                sales@danaxssert.de
                            </Anchor>
                        </div>

                        <Code color="yellow" style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: 15 }}>
                            Template made by
                            <Anchor href="mailto:sales@danaxssert.de">
                                <UnstyledButton>
                                    <Group>
                                        <Avatar> size={40} color="orange"DANAXSSERT"</Avatar>
                                        <div>
                                            <Text>Email</Text>
                                            <Text size="xs" color="dimmed">sales@danaxssert.de</Text>
                                        </div>
                                    </Group>
                                </UnstyledButton>
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
