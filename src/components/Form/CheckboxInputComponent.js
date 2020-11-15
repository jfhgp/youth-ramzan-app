import React, { Component } from "react";
import { CheckBox } from 'react-native-elements'
import { View } from "react-native";
import { Colors } from "../../styles/colors";



const CheckBoxInputComponent = props => {
    const { value, onValueChange, label, style, iconRight, textStyle, unCheck, checkColor } = props;
    return (
        <View style={{ flexDirection: 'row' }}>
            <CheckBox
                containerStyle={style}
                iconRight={iconRight}
                checked={value}
                onPress={onValueChange}
                title={label}
                textStyle={textStyle}
                uncheckedColor={Colors.white}
                checkedColor={Colors.white}
            />
            {/* <Text style={{ marginTop: 5, color: Colors.white }}> {label} </Text> */}
        </View>
    );

}




export default CheckBoxInputComponent;
