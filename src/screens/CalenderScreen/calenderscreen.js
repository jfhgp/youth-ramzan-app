import React, {Component} from 'react';
import _ from 'lodash';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import DAYS from '../../utils/days';
import MainBackground from '../../utils/ui/MainBackground';
import {Colors} from '../../styles/colors';
import Grid from 'react-native-grid-component';

class CalenderScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let that = this;
    let date = new Date().getDate(); //Current Date
    let month = new Date().getMonth() + 1; //Current Month
    let year = new Date().getFullYear(); //Current Year
    let currentDate = date + '/' + month + '/' + year;
    let data = DAYS.filter((day) => day.currentDate === currentDate);
    console.log('current', data[0]);
    this.setState({
      data: data[0],
    });
    this.handleAndroidBackButton();
  }

  componentWillUnmount() {
    // this.removeAndroidBackButtonHandler();
  }

  backHandler = () => {
    // BackHandler.removeEventListener('hardwareBackPress', () => {});
    this.handler.remove();

    this.props.navigation.navigate('Home', {fromCalendar: true});
    return true;
  };

  handleAndroidBackButton = (callback) => {
    this.handler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backHandler,
    );
  };
  /**
   * Removes the event listener in order not to add a new one
   * every time the view component re-mounts
   */
  removeAndroidBackButtonHandler = () => {
    BackHandler.removeEventListener('hardwareBackPress', () => {});
  };

  _onSelectItem = (item, index) => {
    console.log('item selected');
    const {navigate} = this.props.navigation;
    navigate('Home', {day: item, fromCalendar: true});
  };

  _renderItem2 = (data) => {
    console.log('all data', data);
    return _.map(DAYS, function (item, key) {
      {
        console.log('item:', item);
      }
      <View
        style={{
          width: 40,
          height: 40,
          flexDirection: 'row',
          backgroundColor: 'red',
        }}>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
          }}
          onPress={() => this._onSelectItem(item)}>
          <View style={styles.item}>
            <Text style={{fontSize: 18, color: Colors.white}}>{item.key}</Text>
          </View>
        </TouchableOpacity>
      </View>;
    });
  };

  _renderItem = (data, i) => (
    <TouchableOpacity
      key={data.key + i}
      disabled={data.key === -1}
      style={{
        width: '14%',
        height: 40,
      }}
      onPress={() => this._onSelectItem(data)}>
      <View style={styles.item}>
        <Text style={{fontSize: 18, color: Colors.white}}>
          {data.key === -1 ? '' : data.key}
        </Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    const {data} = this.state;
    return (
      <MainBackground>
        <View style={styles.container}>
          <Text style={styles.mainTitle}>Ramadan</Text>
          <Text style={styles.subTitle}>{data ? data.title : ''}</Text>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                margin: 10,
                padding: 5,
                justifyContent: 'space-between',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                alignItems: 'center',
              }}>
              <Text style={styles.boxTitle}>SEHRI</Text>
              <Text style={styles.boxTime}>{data ? data.sehri : ''}</Text>
            </View>
            <View
              style={{
                flex: 1,
                margin: 10,
                padding: 5,
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                alignItems: 'center',
              }}>
              <Text style={styles.boxTitle}>IFTAR</Text>
              <Text style={styles.boxTime}>{data ? data.iftari : ''}</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              margin: 10,
              padding: 10,
              width: '95%',
            }}>
            <Text
              style={{
                fontFamily: 'Biryani-Regular',
                color: Colors.white,
                textAlign: 'center',
                fontSize: 18,
                textTransform: 'uppercase',
              }}>
              Ramadan 1441
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            margin: 10,
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.day}>S</Text>
            <Text style={styles.day}>M</Text>
            <Text style={styles.day}>T</Text>
            <Text style={styles.day}>W</Text>
            <Text style={styles.day}>T</Text>
            <Text style={styles.day}>F</Text>
            <Text style={styles.day}>S</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            width: '85%',
            height: 200,
            alignItems: 'center',
            alignSelf: 'center',
            transform: [
              {
                rotate: '360deg',
              },
            ],
          }}>
          <Grid
            style={styles.list}
            renderItem={this._renderItem}
            renderPlaceholder={this._renderPlaceholder}
            data={DAYS}
            numColumns={7}
          />
        </View>
      </MainBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  item: {
    padding: 4,
  },
  day: {
    width: '13%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    color: Colors.white,
    padding: 10,
  },
  list: {flex: 1},
  mainTitle: {
    fontSize: 40,
    fontFamily: 'Lie to Me - TTF',
    color: Colors.white,
  },
  subTitle: {
    fontFamily: 'Biryani-Regular',
    fontSize: 22,
    color: Colors.white,
    textTransform: 'uppercase',
  },

  boxTitle: {
    fontSize: 35,
    fontFamily: 'big_noodle_titling',
    letterSpacing: 2,
    color: Colors.white,
    fontWeight: 'normal',
    color: Colors.white,
  },
  boxTime: {
    fontSize: 15,
    fontFamily: 'Biryani-Regular',
    fontWeight: 'normal',
    color: Colors.white,
  },
});

export default CalenderScreen;
