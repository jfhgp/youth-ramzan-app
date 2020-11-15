import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Button, Text, TouchableOpacity, Alert } from "react-native";
import PrayerTracker from "../../components/PrayerTracker";
import QuranTracker from "../../components/QuranTracker";
import DailyChecklist from "../../components/DailyChecklist";
import FurtherInformation from "../../components/DeedOfDay";
import CustomButton from "../../utils/ui/custombutton";
import * as recordData from "../../utils/recorddata.util";


class FormScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                fajr: false,
                fajrSunnah: false,
                dhuhr: false,
                dhuhrSunnah: false,
                asr: false,
                asrSunnah: false,
                magrib: false,
                magribSunnah: false,
                isha: false,
                ishaSunnah: false,
                taraweh: '',
                qiyam: '',
                verse: '',
                surah: '',
                chapter: '',
                memorized: false,
                recited: false,
                checkOne: false,
                checkTwo: false,
                checkThree: false,
                checkFour: false,
                checkFive: false,
                checkSix: false,
                checkSeven: false,
                checkEight: false,
                checkNine: false,
                reflection: '',
                goals: ''
            },
            storeData: ''
        };
    }

    async componentDidMount() {
        const data = await recordData.getRecordData();
        this.setState({ storeData: data ? data : [] });

    }



    onInputChange = event => {
        const { name, value } = event
        this.setState(prevState => {
            const { formData } = prevState;
            formData[name] = value;
            return { formData };
        });
    }


    pushToArray = (arr, obj) => {
        console.log("lust", arr, obj)
        const index = arr.findIndex((e) => e.id === obj.id);

        if (index === -1) {
            arr.push(obj);
        } else {
            arr[index] = obj;
        }

        return arr;
    }

    handleSubmit = async () => {
        const { key } = this.props.route.params.day
        this.state.formData.id = key;
        const data = this.pushToArray(this.state.storeData, this.state.formData);
        console.log("complete props on submit", data)
        await recordData.setRecordData(data)

    }




    render() {
        console.log("This is the selected day", this.props.route.params)
        return (
            <ScrollView>
                <PrayerTracker
                    {...this.state}
                    onInputChange={this.onInputChange}
                />
                <QuranTracker
                    {...this.state}
                    onInputChange={this.onInputChange}
                />
                <DailyChecklist
                    {...this.state}
                    onInputChange={this.onInputChange}
                />
                <FurtherInformation
                    {...this.state}
                    onInputChange={this.onInputChange}
                />


                <CustomButton
                    text="SUBMIT"
                    onPress={() => {
                        this.handleSubmit()
                    }}
                />


            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({

});


export default FormScreen;
