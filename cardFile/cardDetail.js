import React, { Component } from 'react';
import { Image } from 'react-native'
import { Container, Content, List, ListItem, CardItem, Card, View , Text, Title, Button} from 'native-base';
export default class CardDetail extends Component {
  render() {
    return (
        <Card>
          <CardItem>
              <View>
                  <Text>
                      Auther: Ir
                  </Text>
                  <Text>
                      Title: Needs
                  </Text>
                  <Button style={styles.buttonStyle}>
                    <Title>Button</Title>
                  </Button>
              </View>
          </CardItem>
        </Card>
    );
  }
}

const styles = {
  buttonStyle: {
  backgroundColor: "#aaffaa"
  }
  }