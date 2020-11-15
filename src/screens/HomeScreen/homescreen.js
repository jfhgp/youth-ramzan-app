import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  BackHandler,
  ImageBackground,
} from 'react-native';
import {withNavigationFocus} from 'react-navigation';

import Toast from 'react-native-simple-toast';
import DAYS from '../../utils/days';
import Tabs from '../../utils/tabs';
import {Assets} from '../../assets';
import {Colors} from '../../styles/colors';
import PrayerTracker from '../../components/PrayerTracker';
import QuranTracker from '../../components/QuranTracker';
import DailyChecklist from '../../components/DailyChecklist';
import DeedOfDay from '../../components/DeedOfDay';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MainBackground from '../../utils/ui/MainBackground';
import * as recordData from '../../utils/recorddata.util';
import {exitAlert} from '../../modules/androidBackButton';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      currentTab: '',
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
        goals: '',
      },
      storeData: '',
      pushCalendar: false,
    };
  }

  async componentDidMount() {
    const daysData = await recordData.getRecordData();
    console.log('this is all set data', daysData);
    this.setState({storeData: daysData ? daysData : []});
    let that = this;
    let date = new Date().getDate(); //Current Date
    let month = new Date().getMonth() + 1; //Current Month
    let year = new Date().getFullYear(); //Current Year
    let currentDate = date + '/' + month + '/' + year;
    console.log('Currentdate', currentDate);
    let data = DAYS.filter((day) => day.currentDate === currentDate);
    console.log('This is the all data i received', data);
    this.setState({data: data[0]});
    var selectedData = this.state.storeData[
      this.state.storeData
        .map(function (item) {
          return item.id;
        })
        .indexOf(data[0].key)
    ];
    console.log('This is the selected data', selectedData);
    if (selectedData) {
      this.setState({
        formData: {...selectedData},
      });
    }

    this.handleAndroidBackButton();
  }

  componentWillReceiveProps(nextProps) {
    console.log('cwr', nextProps.route.params);
    console.log('selected date from calender', nextProps.route.params.day);

    if (nextProps.route.params.fromCalendar) {
      this.handleAndroidBackButton();
    }
    if (nextProps.route.params.day) {
      if (nextProps.route.params.day !== this.state.data) {
        var selectedData = this.state.storeData[
          this.state.storeData
            .map(function (item) {
              return item.id;
            })
            .indexOf(nextProps.route.params.day.key)
        ];
        console.log('this is selected data in cwr', selectedData);
        this.setState({
          data: nextProps.route.params.day,
          formData: {...selectedData},
          currentTab: '',
        });
      }
    }
  }

  backHandler = () => {
    // alert('back handler');
    if (this.state.pushCalendar) {
      this.props.navigation.pop();
    } else if (this.state.currentTab !== '') {
      this.setState({currentTab: ''});
    } else {
      exitAlert();
    }
    return true;
  };

  handleAndroidBackButton = (callback) => {
    // alert('add me');
    BackHandler.addEventListener('hardwareBackPress', this.backHandler);
  };
  /**
   * Removes the event listener in order not to add a new one
   * every time the view component re-mounts
   */
  removeAndroidBackButtonHandler = () => {
    BackHandler.removeEventListener('hardwareBackPress', () => {});
  };

  pushToArray = (arr, obj) => {
    console.log('lust', arr, obj);
    const index = arr.findIndex((e) => e.id === obj.id);

    if (index === -1) {
      arr.push(obj);
    } else {
      arr[index] = obj;
    }

    return arr;
  };

  _handleSubmit = async () => {
    const {key} = this.state.data;
    this.state.formData.id = key;
    const data = this.pushToArray(this.state.storeData, this.state.formData);
    Toast.show('Submitted Sucessfully');
    console.log('complete props on submit', data);
    await recordData.setRecordData(data);
  };

  onInputChange = (event) => {
    const {name, value} = event;
    this.setState((prevState) => {
      const {formData} = prevState;
      formData[name] = value;
      return {formData};
    });
  };

  _onPressTab = (id) => {
    this.setState({currentTab: id});
  };

  _renderItem = () => {
    const {data, currentTab} = this.state;
    switch (currentTab) {
      case 1:
        return (
          <PrayerTracker
            {...this.state.formData}
            onInputChange={this.onInputChange}
            handleSubmit={this._handleSubmit}
          />
        );
      case 2:
        return (
          <QuranTracker
            {...this.state.formData}
            onInputChange={this.onInputChange}
            handleSubmit={this._handleSubmit}
          />
        );
      case 3:
        return (
          <DailyChecklist
            {...this.state.formData}
            onInputChange={this.onInputChange}
            handleSubmit={this._handleSubmit}
          />
        );
      case 4:
        return (
          <DeedOfDay
            {...this.state.formData}
            deed={this.state.data}
            onInputChange={this.onInputChange}
            handleSubmit={this._handleSubmit}
          />
        );
      default:
        return (
          <ScrollView>
            <View
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                paddingLeft: 10,
                marginRight: 10,
                marginBottom: 10,
                marginTop: 20,
              }}>
              <Text style={styles.mainTitle}>
                Ramadan{' '}
                <Text
                  style={{
                    fontFamily: 'Biryani-Regular',
                    fontSize: 22,
                    textTransform: 'uppercase',
                  }}>
                  {data ? data.title : ''}
                </Text>
              </Text>
            </View>
            <View style={{marginBottom: 10}}>
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: 'big_noodle_titling',
                  fontSize: 30,
                  textTransform: 'uppercase',
                }}>
                {' '}
                {data ? data.date : ''}
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}>
              <ImageBackground
                style={{
                  width: 250,
                  height: 250,
                }}
                resizeMode="contain"
                source={Assets.tipBox}>
                <View style={{position: 'absolute', top: 60, padding: 15}}>
                  <Text
                    style={{
                      color: Colors.white,
                      textAlign: 'center',
                      fontFamily: 'Biryani-Regular',
                      fontSize: 12,
                      textTransform: 'uppercase',
                    }}>
                    {' '}
                    {data ? data.tip : ''}
                  </Text>
                </View>
              </ImageBackground>
            </View>

            <View
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                margin: 10,
                padding: 20,
                position: 'relative',
              }}>
              <View style={{position: 'absolute', top: -30}}>
                <Image
                  style={{
                    width: 48,
                    height: 48,
                  }}
                  resizeMode="contain"
                  source={Assets.quote}
                />
              </View>
              <View>
                <Text
                  style={{
                    color: Colors.white,
                    fontFamily: 'Biryani-Regular',
                    fontSize: 14,
                  }}>
                  {' '}
                  {data ? data.hadith : ''}
                </Text>
                <Text
                  style={{
                    paddingTop: 5,
                    color: Colors.white,
                    fontFamily: 'Biryani-Regular',
                    fontSize: 12,
                  }}>
                  {' '}
                  {data ? data.ref : ''}
                </Text>
              </View>
            </View>
          </ScrollView>
        );
    }
  };

  _renderTabs(tabs) {
    return tabs.map((item) => {
      return (
        <React.Fragment>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: Colors.white,
              opacity: 0.7,
            }}
            onPress={() => this._onPressTab(item.key)}>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{
                  width: 32,
                  height: 32,
                }}
                resizeMode="contain"
                source={item.icon}
              />
              <Text style={{fontSize: 10}}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        </React.Fragment>
      );
    });
  }

  render() {
    return (
      <MainBackground>
        <View style={styles.container}>
          <View style={{flex: 1}}>{this._renderItem()}</View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {this._renderTabs(Tabs)}
          </View>
        </View>
      </MainBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
  },
  mainTitle: {
    fontSize: 35,
    fontFamily: 'Lie to Me - TTF',
    color: Colors.white,
  },
  subTitle: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'normal',
    color: Colors.white,
  },

  boxTitle: {
    fontSize: 30,
    color: Colors.primaryColor,
    fontWeight: 'normal',
    color: Colors.primaryColor,
  },
  boxTime: {
    fontSize: 16,
    fontWeight: 'normal',
    color: Colors.primaryColor,
  },
});

export default withNavigationFocus(HomeScreen);
