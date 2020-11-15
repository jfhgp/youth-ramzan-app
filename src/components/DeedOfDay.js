import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { Assets } from "../assets";
import TextInputComponent from "./Form/TextInputComponent";
import MainBackground from "../utils/ui/MainBackground";
import CustomButton from "../utils/ui/custombutton";
import { Colors } from "../styles/colors";

const DeedOfDay = props => {

    const { reflection, goals, deed } = props

    const _renderDeedOfDay = () => {
        return (
            <View>
                <View>
                    <Text style={{ color: Colors.white, fontFamily: "Biryani-Regular", fontSize: 16, }}> {deed ? deed.deed : ""}</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    {/* <View style={{ marginBottom: 10 }}>
                        <Text style={styles.title}>Reflection & Gems</Text>
                        <TextInputComponent
                            name="reflection"
                            multiline={true}
                            numberOfLines={7}
                            placeholder="Enter some text here"
                            value={reflection}
                            onChangeText={(text) => props.onInputChange({ name: "reflection", value: text })}
                        />
                    </View> */}
                    <View style={{ marginBottom: 10, marginTop: 20 }}>
                        <Text style={{ fontFamily: "Biryani-Bold", color: Colors.white, textAlign: "center", fontSize: 16, textTransform: "uppercase" }}>Today's Goals</Text>
                        <TextInputComponent
                            name="goals"
                            multiline={true}
                            numberOfLines={7}
                            placeholder="Enter some text here"
                            value={goals}
                            onChangeText={(text) => props.onInputChange({ name: "goals", value: text })}
                        />
                    </View>
                </View>
            </View>
        )
    }



    return (
        <MainBackground>
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ flexDirection: "row" }}>
                        <View >
                            <Image
                                style={{
                                    width: 100,
                                    height: 100,

                                }}
                                resizeMode="contain"
                                source={Assets.deeds}
                            />
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.title}>DEED OF THE DAY</Text>
                        </View>
                    </View>
                    <View>
                        {_renderDeedOfDay()}
                    </View>
                    <View style={styles.button}>
                        <CustomButton
                            text="SUBMIT"
                            onPress={() => {
                                props.handleSubmit()
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </MainBackground>
    );

}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 8
    },
    item: {

    },
    title: {
        fontSize: 45,
        color: Colors.white,
        fontFamily: "big_noodle_titling",


    },
    button: {
        marginTop: 20
    },
    checkbox: {
        backgroundColor: "transparent",
        borderWidth: 0
    },
    checkboxText: {
        color: "white", fontSize: 18, fontWeight: "normal"
    },
});


export default DeedOfDay;
