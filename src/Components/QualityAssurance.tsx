import { Title, Text, Container, Grid, Image, Button } from '@mantine/core';

const QualityAssurance = () => {
    //const theme = useMantineTheme();

    return (
        <section id="quality-assurance">
            <Container >
                <Grid justify="space-around">
                    <Grid.Col xs={6} sm={12} md={12} lg={12}>
                        <div>
                            <Text color="black">
                                <Title order={1}>Quality Assurance</Title>
                               
                                DANAXSSERT International Trading GmbH is committed to delivering <strong>high-quality silicon metal</strong>, ensuring that every batch meets strict international standards.<br />
                               
                                 <h3>Strict Material Selection</h3>
                                <ul>
                                 <li>We only cooperate with <strong>certified smelters</strong> to ensure material purity and consistency.</li> 
                                 <li><strong>Quality inspection standards</strong> are enforced throughout the whole process to prevent low-quality materials from entering the supply chain.</li>
                                  </ul>
                                <h3>International Standard Testing</h3>
                                <ul>
                                 <li>All silicon metal products undergo <strong>advanced testing technologies</strong> to ensure precise chemical composition compliance.</li>
                                 <li> We support <strong>third-party certification</strong> (e.g., SGS, BV, Intertek) and provide <strong>authoritative test reports</strong>.</li>
                                  </ul>
                               <a href="https://international-trading.danaxssert.de/report" target="_blank" rel="noopener noreferrer"><Button color="yellow">Check previous report</Button></a>
                               
                            </Text>
                        </div>
         
                        <div>
                            <Text color="black">
                               <h3>Quality Control Process</h3>
                              <ul>
                               <li><strong>Production Monitoring</strong> - Standardized processes are strictly followed during production to guarantee product purity and consistency.</li>
                               <li><strong>Final Product Testing</strong> - Each batch of silicon metal undergoes <u>composition testing</u> before storage to ensure it meets specifications.</li>
                                </ul>
                               <h3>Products Stability Assurance</h3>
                              <ul>
                               <li><strong>Stable Si Content</strong> - All products conform to major industry-grade standards.</li>
                               <li><strong>Low Impurity Levels</strong> - Strict control of <u>Fe, Al, Ca</u> impurities to ensure product quality and consistency.</li>
                               <li><strong>Traceability System</strong> - Each batch has a <u>unique identification number</u>, allowing customers to track production and testing data at any time.</li>
                                </ul>
                               <h3>After-sales Quality Commitment</h3>
                              <ul>
                               <li><strong>Quality Guarantee</strong> -If the received product does not meet contract specifications, we commit to retesting or providing reasonable compensation. </li>
                               <li><strong>Technical Support</strong> - We offer professional material consultation to help customers optimize product usage.</li>
                               <li><strong>Customer Satisfaction Tracking</strong> - Regular follow-ups ensure our products meet customer expectations in real-world applications.</li>
                                </ul>
   
                            </Text>
                        </div>

                     </Grid.Col>
                </Grid>
            </Container>
        </section>
    )
};

export default QualityAssurance;
