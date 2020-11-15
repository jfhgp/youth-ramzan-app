import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {Assets} from '../../assets';

const MainBackground = ({style = {}, ...props}) => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={[StyleSheet.absoluteFill, style]}
      // style={{backgroundColor:Colors.maroonColor}}
      source={Assets.mainBackground}
      {...props}
    />
  );
};

export default MainBackground;
