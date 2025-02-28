import { Title, Text, Container, Grid, Image, Button } from '@mantine/core';

const Imprint = () => {
    //const theme = useMantineTheme();

    return (
        <section id="imprint">
            <Container>
                <Grid justify="space-around">
                    <Grid.Col xs={6} sm={12} md={12} lg={12}>
                        <div>
                            <Text color="black">
                                <Title order={1}>Imprint</Title>
                                 
                                 <p><strong>Imprint of DANAXSSERT International Trading GmbH</strong></p>
                                   <p>
                                    <strong>DANAXSSERT International Trading GmbH</strong><br />
                                    Kronprinzenstr.14 <br />65185 Wiesbaden <br />Germany <br />
                                   </p>
                                   <p>
                                    <strong>Contact</strong> <br />   
                                    Telefon: +49 1607683035 <br /> 
                                    E-Mail:<a href="mailto:sales@danaxssert.de"> sales@danaxssert.de </a> <br />
                                    Internet: https://international-trading.danaxssert.de <br />
                                   </p>
                                   <p>
                                   <strong>VAT Number</strong><br /> DE361163826  <br />
                                   </p>
                                   <p>
                                    <strong>Register Entries</strong><br /> Registration Court: Court Wiesbaden HRB 34109 <br />
                                   </p>
                
                                   <p>
                                    <strong>Director</strong> <br /> Piao Wang <br /> 
                                   </p>
                            </Text>
                        </div>
                        
                    </Grid.Col>
      
                </Grid>
            </Container>
        </section>
    )
};

export default Imprint;
