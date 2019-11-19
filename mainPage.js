
import React, { Component } from 'react';
import { Image, TextInput, InputAccessoryView, Platform } from 'react-native'
import { Container, Header, Content, Title, Button, Footer, FooterTab, Left, Right, Body, Icon, Text, List, ListItem, Item, View } from 'native-base';
import CardImage from './cardFile/cardImage';
import CardDetail from './cardFile/cardDetail';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { ScrollView } from 'react-native-gesture-handler';
import Second from './reactClass/second'
import { identifier } from '@babel/types';

class MainPage extends Component {
  constructor() {

    super();

    this.state = {

      imageURL: 'https://reactnativecode.com/wp-content/uploads/2017/10/Guitar.jpg'

    }

  }

  Load_New_Image = () => {

    this.setState({

      imageURL: 'https://reactnativecode.com/wp-content/uploads/2018/02/motorcycle.jpg'

    })
  }

  render() {
    return <Container>
      <View>
        <View style={{alignItems:"center",marginTop:10, marginBottom: 10}}>
          <Image
            source={require('./imageSource/pic_bulboff.gif')}
            // source = {{ uri: this.Load_New_Image.imageURL }}

            style={styles.imageStyle} />
        </View>
        <View style={{flexDirection: "row", justifyContent: "center",marginTop: 10 }}>
          <Button onPress={{ uri: this.Load_New_Image.imageURL }}>{/*onPress={() => this.props.navigation.navigate('MainPage')} */}
            <Text>
              Tap to bulb on
          </Text>
          </Button>
          <Button style={{ marginLeft: 100 }}>

            <Text>
              Tap to bulb off
        </Text>
          </Button>
        </View>
      </View>
      <ScrollView>

        <List>
          <ListItem>
            <CardImage />
          </ListItem>
          <ListItem>
            <CardImage />
          </ListItem>
          <ListItem>
            <CardImage />
          </ListItem>
          <ListItem>
            <CardImage />
          </ListItem>
          <ListItem>
            <CardImage />
          </ListItem>
          <ListItem>
            <CardImage />
          </ListItem>
        </List>
      </ScrollView>
    </Container>
  }
}



class Home extends Component {
  render() {
    return <View>
      <Text>
        Hello
      </Text>
    </View>
  }
}

const styles = {
  buttonStylenav: {
    backgroundColor: "#786faa"
  }
}


const RootStack = createStackNavigator(
  {
    Home: MainPage,
    MainPage: Home,
    Second: Second,
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
