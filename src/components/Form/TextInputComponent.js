import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";
import { Colors } from "../../styles/colors";



const TextInputComponent = props => {
    const { name, value, onChangeText, label, placeholder, multiline, numberOfLines, type } = props;
    return (
        <View style={{ marginTop: 10 }}>
            {label ? <Text style={{ paddingBottom: 5, fontSize: 18, color: Colors.white, textAlign: "center" }}>{label}</Text> : null}
            <TextInput
                style={{ borderColor: Colors.white, textAlignVertical: "top", fontSize: 18, backgroundColor: Colors.white, borderWidth: 1 }}
                keyboardType={type}
                multiline={multiline}
                numberOfLines={numberOfLines}
                name={name}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );

}




export default TextInputComponent;