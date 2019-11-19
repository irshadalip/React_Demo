import React, { Component } from 'react';
import { Image, Text } from 'react-native'
import { Container, Content, List, ListItem, CardItem, Card, View, Button, Title, Row} from 'native-base';
export default class CardImage extends Component {
  render() {
    return (
      <Card style={{ flex: 1 }}>
        <CardItem>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
            <View style={{flexDirection:'row', alignItems:"center"}}>
            <Image
              style={{ width: 50, height: 50, justifyContent: "space-around",alignContent:"center" }}
              source={require('../imageSource/menu.png')}
            />
            <Image
              style={{ width: 50, height: 50, justifyContent: "space-around",alignContent:"center" }}
              source={require('../imageSource/menu.png')}
            />
            </View>
            
            <View style={{ flexDirection: "column", justifyContent: "center" }}>
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