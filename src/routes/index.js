import React from 'react';
import {Button, Alert, View, Linking} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {Colors} from '../styles/colors';
import HomeScreen from '../screens/HomeScreen';
import CalenderScreen from '../screens/CalenderScreen';
import FormScreen from '../screens/FormScreen';
import SplashScreen from '../screens/SplashScreen ';
import PrayerTracker from '../components/PrayerTracker';
import QuranTracker from '../components/QuranTracker';
import DailyChecklist from '../components/DailyChecklist';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const AlertBox = (props) => {
  return props.isAlertVisible ? (
    <View>
      {Alert.alert('Contact us', '', [
        {
          text: 'Cancel',
          onPress: () => props.navigation.navigate('Home'),
        },
        {
          text: 'Facebook',
          onPress: () => {
            props.navigation.navigate('Home');
            Linking.openURL('https://www.facebook.com/JIYouthWomenKarachi');
          },
        },
        {
          text: 'Email',
          onPress: () => {
            try {
              props.navigation.navigate('Home');
              Linking.openURL('mailto:jiyouthwing.khi@gmail.com');
            } catch (error) {
              alert(
                'Email not configured, please configure email in mail client',
              );
            }
          },
        },
      ])}
    </View>
  ) : (
    <View></View>
  );
};
const AlertView = ({navigation}) => {
  return (
    <View>
      <AlertBox isAlertVisible={true} navigation={navigation} />
    </View>
  );
};

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Calender" component={CalenderScreen} />
      <Drawer.Screen name="Contact us" component={AlertView} />
    </Drawer.Navigator>
  );
}

function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="NAMAZ TRACKER" component={PrayerTracker} />
      <Tab.Screen name="QURAN TRACKER" component={QuranTracker} />
      <Tab.Screen name="DAILY CHECKLIST" component={DailyChecklist} />
      {/* <Tab.Screen name="DEEDS OF THE DAY" component={CalenderScreen} /> */}
    </Tab.Navigator>
  );
}

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerTitleAlign: 'center'}}
        initialRouteName="Splash">
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          name="Home"
          options={({navigate, navigation}) => ({
            title: 'JI Youth',
            headerStyle: {
              backgroundColor: Colors.primaryColor,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'big_noodle_titling',
              fontSize: 24,
            },
            headerLeft: () => (
              <Icon
                name="menu"
                size={30}
                color={Colors.white}
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              />
            ),

            headerRight: () => (
              <Icon
                name="calendar"
                size={30}
                color={Colors.white}
                onPress={() => navigation.navigate('Calender')}
              />
            ),
          })}
          component={DrawerNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
