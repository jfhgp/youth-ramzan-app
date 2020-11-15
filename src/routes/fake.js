import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Content,
  View,
  Button,
  Left,
  Right,
  Icon,
  Card,
  CardItem,
  cardBody
} from "native-base";

import SlideshowGallery from "../../components/slideshow";
import { Tabs } from "../../routes";
import TabViewExample from "../../components/tabview";
import Navbar from "../../components/navbar";
import SideMenuDrawer from "../../components/sidemenudrawer";
export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  // static navigationOptions = {
  //   title: "Home"
  // };
  render() {
    var left = (
      <Left>
        <Button onPress={() => this._sideMenuDrawer.open()} transparent>
          <Icon name="ios-menu" />
        </Button>
      </Left>
    );
    var right = (
      <Right>
        <Button onPress={() => Actions.search()} transparent>
          <Icon name="ios-search" />
        </Button>
        <Button onPress={() => Actions.cart()} transparent>
          <Icon name="ios-notification" />
        </Button>
      </Right>
    );
    return (
      <SideMenuDrawer ref={ref => (this._sideMenuDrawer = ref)}>
        <Container>
          <Navbar left={left} right={right} title="Explore" />

          <View style={styles.maincontainer}>
            <View style={styles.slidercontainer}>
              <SlideshowGallery />
            </View>
            <View style={styles.tabscontainer}>
              <TabViewExample {...this.props} />
            </View>
          </View>
        </Container>
      </SideMenuDrawer>
      // <SideMenuDrawer>
      // <Container>
      //   <Navbar left={left} right={right} title="HOME" />
      // <View style={styles.maincontainer}>
      //   <View style={styles.slidercontainer}>
      //     <SlideshowGallery />
      //   </View>
      //   <View style={styles.tabscontainer}>
      //     <TabViewExample {...this.props} />
      //   </View>
      // </View>
      // </Container>
      // </SideMenuDrawer>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1
  },
  slidercontainer: {},
  tabscontainer: {
    flex: 1
  },
  icon: {
    width: 24,
    height: 24
  }
});
