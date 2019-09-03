import React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Image
} from "native-base";
import { Card, CardItem, Thumbnail } from "native-base";

const educationLogo = require("./assets/education.png");
export default function App() {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Grace Consultancy</Title>
        </Body>
      </Header>
      <Content padder>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={educationLogo} />
              <Body>
                <Text>Education</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={educationLogo} />
              <Body>
                <Text>Migration</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={educationLogo} />
              <Body>
                <Text>PTE/IELTS</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={educationLogo} />
              <Body>
                <Text>Professional Year</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={educationLogo} />
              <Body>
                <Text>Visa Options</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={educationLogo} />
              <Body>
                <Text>Other Services</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>

        <Button
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 8
          }}
          primary
        >
          <Text style={{ fontWeight: "bold" }}> Book Appointment </Text>
        </Button>
      </Content>
    </Container>
  );
}
