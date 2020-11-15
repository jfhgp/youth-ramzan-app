import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { Assets } from "../assets";
import TextInputComponent from "./Form/TextInputComponent";
import MainBackground from "../utils/ui/MainBackground";
import CheckBoxInputComponent from "./Form/CheckboxInputComponent";
import SelectInputComponent from "./Form/SelectInputComponent";
import CustomButton from "../utils/ui/custombutton";
import { Colors } from "../styles/colors";

const TARAWEH =
    [
        { label: '#', value: '#' },
        { label: '2', value: '2' },

        { label: '4', value: '4' },

        { label: '6', value: '6' },

        { label: '8', value: '8' },

        { label: '10', value: '10' },

        { label: '12', value: '12' },

        { label: '14', value: '14' },

        { label: '16', value: '16' },

        { label: '18', value: '18' },

        { label: '20', value: '20' },
    ]

const PrayerTracker = props => {
    const {
        fajr,
        fajrSunnah,
        dhuhr,
        dhuhrSunnah,
        asr,
        asrSunnah,
        magrib,
        magribSunnah,
        isha,
        ishaSunnah,
        taraweh,
        qiyam } = props


    const _renderNamaz = () => {
        return (
            <View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <CheckBoxInputComponent
                            style={styles.checkbox}
                            textStyle={styles.checkboxText}
                            unCheck={Colors.white}
                            checkedColor={Colors.primaryColor}
                            value={fajr}
                            iconRight={true}
                            onValueChange={() => props.onInputChange({
                                name: "fajr",
                                value: !fajr
                            })}
                            label="FAJR"
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <CheckBoxInputComponent
                            style={styles.checkbox}
                            textStyle={styles.checkboxText}
                            unCheck={Colors.white}
                            checkedColor={Colors.primaryColor}
                            value={fajrSunnah}
                            iconRight={true}
                            onValueChange={() => props.onInputChange({
                                name: "fajrSunnah",
                                value: !fajrSunnah
                            })}
                            label="SUNNAH"
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <CheckBoxInputComponent
                            style={styles.checkbox}
                            unCheck={Colors.white}
                            checkedColor={Colors.primaryColor}
                            textStyle={styles.checkboxText}
                            iconRight={true}
                            value={dhuhr}
                            onValueChange={() => props.onInputChange({
                                name: "dhuhr",
                                value: !dhuhr
                            })}
                            label="DHUHR"
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <CheckBoxInputComponent
                            style={styles.checkbox}
                            unCheck={Colors.white}
                            checkedColor={Colors.primaryColor}
                            textStyle={styles.checkboxText}
                            iconRight={true}
                            value={dhuhrSunnah}
                            onValueChange={() => props.onInputChange({
                                name: "dhuhrSunnah",
                                value: !dhuhrSunnah
                            })}
                            label="SUNNAH"
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <CheckBoxInputComponent
                            style={styles.checkbox}
                            unCheck={Colors.white}
                            checkedColor={Colors.primaryColor}
                            textStyle={styles.checkboxText}
                            iconRight={true}
                            value={asr}
                            onValueChange={() => props.onInputChange({
                                name: "asr",
                                value: !asr
                            })}
                            label="ASR"
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <CheckBoxInputComponent
                            style={styles.checkbox}
                            unCheck={Colors.white}
                            checkedColor={Colors.primaryColor}
                            textStyle={styles.checkboxText}
                            iconRight={true}
                            value={asrSunnah}
                            onValueChange={() => props.onInputChange({
                                name: "asrSunnah",
                                value: !asrSunnah
                            })}
                            label="SUNNAH"
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <CheckBoxInputComponent
                            style={styles.checkbox}
                            unCheck={Colors.white}
                            checkedColor={Colors.primaryColor}
                            textStyle={styles.checkboxText}
                            unCheck={Colors.white}
                            checkedColor={Colors.primaryColor}
                            iconRight={true}
                            value={magrib}
                            onValueChange={() => props.onInputChange({
                                name: "magrib",
                                value: !magrib
                            })}
                            label="MAGRIB"
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <CheckBoxInputComponent
                            style={styles.checkbox}
                            unCheck={Colors.white}
                            checkedColor={Colors.primaryColor}
                            textStyle={styles.checkboxText}
                            iconRight={true}
                            value={magribSunnah}
                            onValueChange={() => props.onInputChange({
                                name: "magribSunnah",
                                value: !magribSunnah
                            })}
                            label="SUNNAH"
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <CheckBoxInputComponent
                            style={styles.checkbox}
                            unCheck={Colors.white}
                            checkedColor={Colors.primaryColor}
                            textStyle={styles.checkboxText}
                            iconRight={true}
                            value={isha}
                            onValueChange={() => props.onInputChange({
                                name: "isha",
                                value: !isha
                            })}
                            label="ISHA"
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <CheckBoxInputComponent
                            style={styles.checkbox}
                            unCheck={Colors.white}
                            checkedColor={Colors.primaryColor}
                            textStyle={styles.checkboxText}
                            iconRight={true}
                            value={ishaSunnah}
                            onValueChange={() => props.onInputChange({
                                name: "ishaSunnah",
                                value: !ishaSunnah
                            })}
                            label="SUNNAH"
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, marginRight: 5 }}>
                        <SelectInputComponent
                            value={taraweh}
                            item={TARAWEH}
                            label="TARAWEH"
                            onValueChange={(value) => props.onInputChange({
                                name: "taraweh",
                                value: value
                            })}
                        />
                        {/* <TextInputComponent
                            name="taraweh"
                            type="number-pad"
                            label="TARAWEH"
                            placeholder="#"
                            value={taraweh}
                            onChangeText={(text) => props.onInputChange({ name: "taraweh", value: text })}
                        /> */}
                    </View>
                    <View style={{ flex: 1, marginRight: 5 }}>
                        <TextInputComponent
                            name="QIYAM"
                            type="number-pad"
                            label="QIYAM"
                            placeholder="#"
                            value={qiyam}
                            onChangeText={(text) => props.onInputChange({ name: "qiyam", value: text })}
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
                                source={Assets.prayerTracker}
                            />
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.title}>PRAYER TRACKER</Text>
                        </View>
                    </View>
                    <View>
                        {_renderNamaz()}
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
        flex: 1,
        padding: 10,
        marginVertical: 8
        // marginHorizontal: 16,
    },
    item: {

    },
    title: {
        fontSize: 45,
        color: Colors.white,
        fontFamily: "big_noodle_titling",


    },

    checkbox: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 0,
        width: 150,
        alignItems: "center"
    },
    checkboxText: {
        color: "white", fontSize: 16, fontWeight: "normal"
    },
    button: {
        marginTop: 20
    }
});


export default PrayerTracker;
