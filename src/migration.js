import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';

export default class Migration extends Component {
  static navigationOptions = {
    title: 'Migration'
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Text style={{ fontWeight: 'bold' }}>Migration</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  If you are living overseas and wish to enhance your skills and explore yourself to
                  gain global experience then Australia is the country you. Australian government
                  provides you various visa types which allow you to migrate to Australia based on
                  your skills, experience and education etc. Following are the Visa Subclasses that
                  allows you to migrate to Australia and gives you options for Permanent Residency
                  as well.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Text style={{ fontWeight: 'bold' }}>SKILLED INDEPENDENT PR (189 VISA)</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  If you are living overseas and wish to enhance your skills and explore yourself to
                  gain global experience then Australia is the country you. Australian government
                  provides you various visa types which allow you to migrate to Australia based on
                  your skills, experience and education etc. Following are the Visa Subclasses that
                  allows you to migrate to Australia and gives you options for Permanent Residency
                  as well.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Text style={{ fontWeight: 'bold' }}>FAMILY VISA</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Family visa by Department of Immigration and Border Protection allows you to bring
                  your family (Includes Parent, Spouse, De Facto, Child, other family member) to
                  Australia subject to certain conditions. These visas are sponsored by Australian
                  Citizens, permanent residents and New Zealand eligible citizens. Grace Group
                  provides an exceptional customer service and advice for family relating visas. We
                  bring loved ones together.
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Text style={{ fontWeight: 'bold' }}>EMPLOYER SPONSORED VISAS</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Employer Sponsored Visa is the key for skilled people having skills in particular
                  occupations to work and live in Australia if sponsored by an Australian business.
                  Also an employer in need of skilled workers can sponsor prospective people to work
                  in Australia if the occupation is in the SOL, CSOL list. Employer sponsored visas
                  are categorized into three different subclasses.
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Text style={{ fontWeight: 'bold' }}>SKILLED MIGRATION-GSM VISA</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  A General Skilled Migration visa is the key to opportunities for people who have
                  skills and much experience to work in Australia. This visa allows a skilled
                  migrant and a skilled worker to use their qualifications, work experience, skills
                  and willingness to meet Australian Immigration Requirements for a Permanent
                  Australian Visa or Australian Permanent Residency. Grace Group's Migration
                  department incorporates an experienced team of Migration agents and advisors who
                  expertise in this Visa. After analyzing the skills and qualifications of the
                  skilled migrant or worker, we provide an exceptional advice and prepare a very
                  understood skillful application that provides key to success.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
