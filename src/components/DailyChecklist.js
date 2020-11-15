import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { Assets } from "../assets";
import MainBackground from "../utils/ui/MainBackground";
import CheckBoxInputComponent from "./Form/CheckboxInputComponent";
import { Colors } from "../styles/colors";
import CustomButton from "../utils/ui/custombutton";


const DailyChecklist = props => {
    const {
        checkOne,
        checkTwo,
        checkThree,
        checkFour,
        checkFive,
        checkSix,
        checkSeven,
        checkEight,
        checkNine
    } = props;


    const _renderDailyChecklist = () => {
        return (
            <View>
                <View style={{ flexDirection: 'column' }}>
                    <CheckBoxInputComponent
                        style={styles.checkbox}
                        unCheck={Colors.white}
                        checkColor={Colors.white}
                        textStyle={styles.checkboxText}
                        value={checkOne}
                        onValueChange={() => props.onInputChange({
                            name: "checkOne",
                            value: !checkOne
                        })}
                        label="SMILED AT SOMEONE"
                    />
                    <CheckBoxInputComponent
                        style={styles.checkbox}
                        unCheck={Colors.white}
                        checkColor={Colors.white}
                        textStyle={styles.checkboxText}
                        value={checkTwo}
                        onValueChange={() => props.onInputChange({
                            name: "checkTwo",
                            value: !checkTwo
                        })}
                        label="GAVE CHARITY"
                    />
                    <CheckBoxInputComponent
                        style={styles.checkbox}
                        unCheck={Colors.white}
                        checkColor={Colors.white}
                        textStyle={styles.checkboxText}
                        value={checkThree}
                        onValueChange={() => props.onInputChange({
                            name: "checkThree",
                            value: !checkThree
                        })}
                        label="LEARN SOMETHING NEW"
                    />
                    <CheckBoxInputComponent
                        style={styles.checkbox}
                        unCheck={Colors.white}
                        checkColor={Colors.white}
                        textStyle={styles.checkboxText}
                        value={checkFour}
                        onValueChange={() => props.onInputChange({
                            name: "checkFour",
                            value: !checkFour
                        })}
                        label="FED A HUNGRY PERSON"
                    />
                    <CheckBoxInputComponent
                        style={styles.checkbox}
                        unCheck={Colors.white}
                        checkColor={Colors.white}
                        textStyle={styles.checkboxText}
                        value={checkFive}
                        onValueChange={() => props.onInputChange({
                            name: "checkFive",
                            value: !checkFive
                        })}
                        label="PRAYED IN CONGREGATION"
                    />
                    <CheckBoxInputComponent
                        style={styles.checkbox}
                        unCheck={Colors.white}
                        checkColor={Colors.white}
                        textStyle={styles.checkboxText}
                        value={checkSix}
                        onValueChange={() => props.onInputChange({
                            name: "checkSix",
                            value: !checkSix
                        })}
                        label="READ MY DAILY ADHKAAR"
                    />
                    <CheckBoxInputComponent
                        style={styles.checkbox}
                        unCheck={Colors.white}
                        checkColor={Colors.white}
                        textStyle={styles.checkboxText}
                        value={checkSeven}
                        onValueChange={() => props.onInputChange({
                            name: "checkSeven",
                            value: !checkSeven
                        })}
                        label="HELPED SOMEONE OUT"
                    />
                    <CheckBoxInputComponent
                        style={styles.checkbox}
                        unCheck={Colors.white}
                        checkColor={Colors.white}
                        textStyle={styles.checkboxText}
                        value={checkEight}
                        onValueChange={() => props.onInputChange({
                            name: "checkEight",
                            value: !checkEight
                        })}
                        label="ASK FOR FORGIVENESS"
                    />
                    <CheckBoxInputComponent
                        style={styles.checkbox}
                        unCheck={Colors.white}
                        checkColor={Colors.white}
                        textStyle={styles.checkboxText}
                        value={checkNine}
                        onValueChange={() => props.onInputChange({
                            name: "checkNine",
                            value: !checkNine
                        })}
                        label="DID THE DEED OF THE DAY"
                    />
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
                                source={Assets.dailyChecklist}
                            />
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.title}>DAILY CHECKLIST</Text>
                        </View>
                    </View>
                    <View>
                        {_renderDailyChecklist()}
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
        borderWidth: 0,
        padding: 3
    },
    checkboxText: {
        color: "white", fontSize: 18, fontWeight: "normal"
    },
});




export default DailyChecklist;
