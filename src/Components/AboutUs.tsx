import { Title, Text, Container, Grid, Image, Button } from '@mantine/core';

const AboutUs = () => {
    //const theme = useMantineTheme();

    return (
        <section id="about-us">
            <Container>
                <Grid justify="space-around">
                    <Grid.Col xs={6} sm={12} md={12} lg={12}>
                        <div style={{ marginBottom: 20 }}>
                            <Text color="black">
                                <Title order={1}>About The Company</Title>
                                   DANAXSSERT International Trading GmbH is an international company specializing in the trade of <strong>silicon metal</strong>. We specifically offer <strong>high-quality
 silicon metal produced in Vietnam</strong>, which is widely used in the <strong>aluminum alloy</strong>,<strong> chemical</strong>,<strong> semiconductor</strong>, and <strong>photovoltaic
 industries</strong>. With a stable supply chain, strict quality control, and efficient logistics services, we ensure that our customers receive <strong>high-purity</strong>, 
 <strong>low-impurity</strong>, and <strong>consistently high-quality</strong> silicon metal products.<br/>
                            
                                 <h3>Our Vision</h3>
                                    Our goal is to become a <strong>leading supplier</strong> in the global silicon metal industry, <strong>creating long-term value</strong> for our customers through <strong>reliable products</strong> and <strong>exceptional services</strong>.<br/>
                                 <h3>Why Choose Us?</h3>
                                  <ul>
                                   <li><strong>Strict Quality Control</strong> -  Compliant with international standards, with <u>professional testing reports</u> available to guarantee product purity and consistency.</li>
                                   <li><strong>Stable Supply Chain</strong> – In-depth cooperation with multiple high-quality smelters to ensure a long-term and stable product supply.</li>
                                   <li><strong>Efficient Logistics Network</strong> – A global supply system that ensures on-time delivery and enhances procurement efficiency.</li>
                                   <li><strong>Flexible Procurement Solutions</strong> – Catering to diverse customer needs by offering various grades of silicon metal.</li>
                                   <li><strong>Professional Customer Support</strong> – An experienced team providing one-on-one service to help customers optimize their procurement strategies.</li>
                                    </ul>
                                  <h3>Our Products</h3>
                                     We offer the following <strong>typical grades</strong> of silicon metal products and can <strong>provide different specifications and packaging</strong> according to customer requirements:<br/>












                            </Text>
                        </div>

                     </Grid.Col>
                </Grid>
            </Container>
        </section>
    )
};

export default AboutUs;
