import React, {Component} from 'react';
import {StyleSheet, ImageBackground, View, Image} from 'react-native';
import {Assets} from '../../assets';
import {StackActions} from '@react-navigation/native';

class SplashScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.push('Home'));
    }, 2000);
  }

  render() {
    return (
      <ImageBackground source={Assets.splashBg} style={styles.backgroundImage}>
        <View style={styles.mainContainer}>
          <Image
            style={{
              width: 140,
              height: 140,
            }}
            resizeMode="contain"
            source={Assets.logo}
          />
          <Image
            style={{
              width: 170,
              height: 170,
            }}
            resizeMode="contain"
            source={Assets.planner}
          />
        </View>
      </ImageBackground>
    );
  }
}

let styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});

export default SplashScreen;
