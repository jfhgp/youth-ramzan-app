import React from "react";
import { YellowBox, View } from "react-native";
import RootStack from './src/routes';
YellowBox.ignoreWarnings(['Require cycle:']);


class App extends React.Component {
  state = {
    fontsAreLoaded: false
  };

  // _hideSplashScreen = () => {
  //   this.setState(() => ({ showSplash: false }));
  // };

  componentDidMount() {
    // await Font.loadAsync({
    //   'BigNoodle': require('./src/assets/fonts/big_noodle_titling.ttf'),
    // })

    this.setState({ fontsAreLoaded: true })
  }

  render() {
    if (!this.state.fontsAreLoaded) {
      return <View />;
    }

    return <RootStack />;
  }
}

export default App;
