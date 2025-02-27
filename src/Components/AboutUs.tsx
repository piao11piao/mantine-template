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
<table style={{ border: '1px solid black' }}>
<tbody style={{ textAlign: 'center' }}>
 <tr>
    <td><strong>Grade</strong></td>
    <td><strong>Si (%)</strong></td>
    <td><strong>Fe (%)</strong></td>
    <td><strong>Al (%)</strong></td>
    <td><strong>Ca (%)</strong></td>
    <td><strong>Main Applications</strong></td>
  </tr>
  <tr>
    <td><strong>553</strong></td>
    <td>≥98.5</td>
    <td>≤0.50</td>
    <td>≤0.50</td>
    <td>≤0.30</td>
    <td>Aluminum alloys, Chemical industry</td>
  </tr>
  <tr>
    <td><strong>441</strong></td>
    <td>≥99.0</td>
    <td>≤0.40</td>
    <td>≤0.40</td>
    <td>≤0.10</td>
    <td>Aluminum alloys, Silicone resin</td>
  </tr>
  <tr>
    <td><strong>3303</strong></td>
    <td>≥99.3</td>
    <td>≤0.30</td>
    <td>≤0.30</td>
    <td>≤0.03</td>
    <td>Electronic materials, Special alloys</td>
  </tr>
  <tr>
    <td><strong>2202</strong></td>
    <td>≥99.5</td>
    <td>≤0.20</td>
    <td>≤0.20</td>
    <td>≤0.02</td>
    <td>Solar industry, Semiconductor</td>
  </tr>
  <tr>
    <td><strong>1101</strong></td>
    <td>≥99.7</td>
    <td>≤0.10</td>
    <td>≤0.10</td>
    <td>≤0.01</td>
    <td>Semiconductor, Photovoltaic industry</td>
  </tr>
</tbody>
</table>
                                       <h3>Industries We Serve</h3>
                                          Our products are widely used in the following industries:<br/>
                                        <ul>
                                         <li><strong>Aluminum Alloy Manufacturing</strong> – Enhances the strength and corrosion resistance of aluminum alloys.</li>
                                         <li><strong>Chemical Industry</strong> – Used in the production of silicones, silicone resins, silicone oils, and other silicon-based chemicals.</li>
                                         <li><strong>Solar Photovoltaics</strong> – High-purity silicon metal is a key raw material for solar cells.</li>
                                         <li><strong>Semiconductor Industry</strong> – Essential for manufacturing high-tech electronic products.</li>
                                         </ul>
                                       <h3>How We Work</h3>
                                        <ul>
                                         <li><strong>Customized Procurement</strong> – Providing different specifications, packaging, and transportation options based on customer requirements.</li>
                                         <li><strong>Global Delivery</strong> – Ensuring fast and secure delivery via sea, land, and air transportation.</li>
                                         <li><strong>Long-term Cooperation</strong> – Building lasting strategic partnerships through high-quality products and excellent services.</li>
                                          </ul>


                            </Text>
                        </div>

                     </Grid.Col>
                </Grid>
            </Container>
        </section>
    )
};

export default AboutUs;
