import React from 'react';
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment color='orange' inverted vertical style={{ padding: '5em 0em', marginTop:'4em'}}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            {/* Footer içeriği */}
            <Grid.Column width={4}>
              <Header inverted as='h4' content='Hakkımızda' />
              <List link inverted>
                <List.Item as='a'>Site Haritası</List.Item>
                <List.Item as='a'>İletişim</List.Item>
                <List.Item as='a'>Destek</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as='h4' content='Hakkımızda' />
              <List link inverted>
                <List.Item as='a'>Site Haritası</List.Item>
                <List.Item as='a'>İletişim</List.Item>
                <List.Item as='a'>Destek</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as='h4' content='Hakkımızda' />
              <List link inverted>
                <List.Item as='a'>Site Haritası</List.Item>
                <List.Item as='a'>İletişim</List.Item>
                <List.Item as='a'>Destek</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as='h4' content='Hakkımızda' />
              <List link inverted>
                <List.Item as='a'>Site Haritası</List.Item>
                <List.Item as='a'>İletişim</List.Item>
                <List.Item as='a'>Destek</List.Item>
              </List>
            </Grid.Column>
            {/* Diğer sütunlar */}
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
