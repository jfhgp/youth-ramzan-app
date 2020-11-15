import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Assets} from '../assets';
import MainBackground from '../utils/ui/MainBackground';
import SelectInputComponent from './Form/SelectInputComponent';
import CheckBoxInputComponent from './Form/CheckboxInputComponent';
import CustomButton from '../utils/ui/custombutton';
import {Colors} from '../styles/colors';
import _ from 'lodash';

const PARA = [
  {label: '1', value: '1'},
  {label: '2', value: '2'},
  {label: '3', value: '3'},
  {label: '4', value: '4'},
  {label: '5', value: '5'},
  {label: '6', value: '6'},
  {label: '7', value: '7'},
  {label: '8', value: '8'},
  {label: '9', value: '9'},
  {label: '10', value: '10'},
  {label: '11', value: '11'},
  {label: '12', value: '12'},
  {label: '13', value: '13'},
  {label: '14', value: '14'},
  {label: '15', value: '15'},
  {label: '16', value: '16'},
  {label: '17', value: '17'},
  {label: '18', value: '18'},
  {label: '19', value: '19'},
  {label: '20', value: '20'},
  {label: '21', value: '21'},
  {label: '22', value: '22'},
  {label: '23', value: '23'},
  {label: '24', value: '24'},
  {label: '25', value: '25'},
  {label: '26', value: '26'},
  {label: '27', value: '27'},
  {label: '28', value: '28'},
  {label: '29', value: '29'},
  {label: '30', value: '30'},
];

const SURAH = [
  // [start, ayas, order, rukus, name, tname, ename, type]
  {label: 'Al-Faatiha', value: 'Al-Faatiha'},
  {label: 'Al-Baqara', value: 'Al-Baqara'},
  {label: 'Aal-i-Imraan', value: 'Aal-i-Imraan'},
  {label: 'Al-Baqara', value: 'Al-Baqara'},
  {label: 'An-Nisaa', value: 'An-Nisaa'},
  {label: 'Al-Maaida', value: 'Al-Maaida'},
  {label: "Al-An'aam", value: "Al-An'aam"},
  {label: "Al-A'raaf", value: "Al-A'raaf"},
  {label: 'Al-Anfaal', value: 'Al-Anfaal'},
  {label: 'At-Tawba', value: 'At-Tawba'},
  {label: 'Yunus', value: 'Yunus'},
  {label: 'Hud', value: 'Hud'},
  {label: 'Yusuf', value: 'Yusuf'},
  {label: "Ar-Ra'd", value: "Ar-Ra'd"},
  {label: 'Ibrahim', value: 'Ibrahim'},
  {label: 'Al-Hijr', value: 'Al-Hijr'},
  {label: 'An-Nahl', value: 'An-Nahl'},
  {label: 'Al-Israa', value: 'Al-Israa'},
  {label: 'Al-Kahf', value: 'Al-Kahf'},
  {label: 'Maryam', value: 'Maryam'},
  {label: 'Taa-Haa', value: 'Taa-Haa'},
  {label: 'Al-Anbiyaa', value: 'Al-Anbiyaa'},
  {label: 'Al-Hajj', value: 'Al-Hajj'},
  {label: 'Al-Muminoon', value: 'Al-Muminoon'},
  {label: 'An-Noo', value: 'An-Noo'},
  {label: 'Al-Furqaan', value: 'Al-Furqaan'},
  {label: "Ash-Shu'araa", value: "Ash-Shu'araa"},
  {label: 'An-Naml', value: 'An-Naml'},
  {label: 'Al-Qasas', value: 'Al-Qasas'},
  {label: 'Al-Ankaboot', value: 'Al-Ankaboot'},
  {label: 'Ar-Room', value: 'Ar-Room'},
  {label: 'Luqman', value: 'Luqman'},
  {label: 'As-Sajda', value: 'As-Sajda'},
  {label: 'Al-Ahzaa', value: 'Al-Ahzaa'},
  {label: 'Saba', value: 'Saba'},
  {label: 'Faatir', value: 'Faatir'},
  {label: 'Yaseen', value: 'Yaseen'},
  {label: 'As-Saaffaat', value: 'As-Saaffaat'},
  {label: 'Saad', value: 'Saad'},
  {label: 'Az-Zumar', value: 'Az-Zumar'},
  {label: 'Al-Ghaafir', value: 'Al-Ghaafir'},
  {label: 'Fussilat', value: 'Fussilat'},
  {label: 'Ash-Shura', value: 'Ash-Shura'},
  {label: 'Az-Zukhruf', value: 'Az-Zukhruf'},
  {label: 'Ad-Dukhaan', value: 'Ad-Dukhaan'},
  {label: 'Al-Jaathiya', value: 'Al-Jaathiya'},
  {label: 'Al-Ahqaf', value: 'Al-Ahqaf'},
  {label: 'Muhammad', value: 'Muhammad'},
  {label: 'Al-Fath', value: 'Al-Fath'},
  {label: 'Al-Hujuraat', value: 'Al-Hujuraat'},
  {label: 'Qaaf', value: 'Qaaf'},
  {label: 'Adh-Dhaariyat', value: 'Adh-Dhaariyat'},
  {label: 'At-Tur', value: 'At-Tur'},
  {label: 'An-Najm', value: 'An-Najm'},
  {label: 'Al-Qamar', value: 'Al-Qamar'},
  {label: 'Ar-Rahmaan', value: 'Ar-Rahmaan'},
  {label: 'Al-Waaqia', value: 'Al-Waaqia'},
  {label: 'Al-Hadid', value: 'Al-Hadid'},
  {label: 'Al-Mujaadila', value: 'Al-Mujaadila'},
  {label: 'Al-Hash', value: 'Al-Hash'},
  {label: 'Al-Mumtahana', value: 'Al-Mumtahana'},
  {label: 'As-Saff', value: 'As-Saff'},
  {label: "Al-Jumu'a", value: "Al-Jumu'a"},
  {label: 'Al-Munaafiqoon', value: 'Al-Munaafiqoon'},
  {label: 'At-Taghaabun', value: 'At-Taghaabun'},
  {label: 'At-Talaaq', value: 'At-Talaaq'},
  {label: 'At-Tahrim', value: 'At-Tahrim'},
  {label: 'Al-Mulk', value: 'Al-Mulk'},
  {label: 'Al-Qalam', value: 'Al-Qalam'},
  {label: 'Al-Haaqqa', value: 'Al-Haaqqa'},
  {label: "Al-Ma'aarij", value: "Al-Ma'aarij"},
  {label: 'Nooh', value: 'Nooh'},
  {label: 'Al-Jinn', value: 'Al-Jinn'},
  {label: 'Al-Muzzammil', value: 'Al-Muzzammil'},
  {label: 'Al-Muddaththir', value: 'Al-Muddaththir'},
  {label: 'Al-Qiyaama', value: 'Al-Qiyaama'},
  {label: 'Al-Insaan', value: 'Al-Insaan'},
  {label: 'Al-Mursalaat', value: 'Al-Mursalaat'},
  {label: 'An-Naba', value: 'An-Naba'},
  {label: "An-Naazi'aat", value: "An-Naazi'aat"},
  {label: 'Abasa', value: 'Abasa'},
  {label: 'At-Takwir', value: 'At-Takwir'},
  {label: 'Al-Infitaar', value: 'Al-Infitaar'},
  {label: 'Al-Mutaffifin', value: 'Al-Mutaffifin'},
  {label: 'Al-Inshiqaaq', value: 'Al-Inshiqaaq'},
  {label: 'Al-Burooj', value: 'Al-Burooj'},
  {label: 'At-Taariq', value: 'At-Taariq'},
  {label: "Al-A'laa", value: "Al-A'laa"},
  {label: 'Al-Ghaashiya', value: 'Al-Ghaashiya'},
  {label: 'Al-Fajr', value: 'Al-Fajr'},
  {label: 'Al-Balad', value: 'Al-Balad'},
  {label: 'Ash-Shams', value: 'Ash-Shams'},
  {label: 'Al-Lail', value: 'Al-Lail'},
  {label: 'Ad-Dhuhaa', value: 'Ad-Dhuhaa'},
  {label: 'Ash-Sharh', value: 'Ash-Sharh'},
  {label: 'At-Tin', value: 'At-Tin'},
  {label: 'Al-Alaq', value: 'Al-Alaq'},
  {label: 'Al-Qadr', value: 'Al-Qadr'},
  {label: 'Al-Bayyina', value: 'Al-Bayyina'},
  {label: 'Az-Zalzala', value: 'Az-Zalzala'},
  {label: 'Al-Aadiyaat', value: 'Al-Aadiyaat'},
  {label: "Al-Qaari'a", value: "Al-Qaari'a"},
  {label: 'At-Takaathur', value: 'At-Takaathur'},
  {label: 'Al-Asr', value: 'Al-Asr'},
  {label: 'Al-Humaza', value: 'Al-Humaza'},
  {label: 'Al-Fil', value: 'Al-Fil'},
  {label: 'Quraish', value: 'Quraish'},
  {label: "Al-Maa'un", value: "Al-Maa'un"},
  {label: 'Al-Kawthar', value: 'Al-Kawthar'},
  {label: 'Al-Kaafiroon', value: 'Al-Kaafiroon'},
  {label: 'An-Nasr', value: 'An-Nasr'},
  {label: 'Al-Masad', value: 'Al-Masad'},
  {label: 'Al-Ikhlaas', value: 'Al-Ikhlaas'},
  {label: 'Al-Falaq', value: 'Al-Falaq'},
  {label: 'An-Naas', value: 'An-Naas'},
];

const QuranTracker = (props) => {
  const {verse, surah, chapter, memorized, recited} = props;
  const array = _.range(1, 287);
  const AYAT = _.map(array, function (value, key) {
    return {
      label: value.toString(),
      value: value.toString(),
    };
  });

  const _renderQuran = () => {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, marginRight: 5}}>
            <Text
              style={{
                marginTop: 20,
                paddingBottom: 5,
                fontSize: 15,
                color: Colors.white,
                textAlign: 'center',
              }}>
              JUZ / PARAH
            </Text>
          </View>
          <View style={{flex: 1, marginRight: 5}}>
            <SelectInputComponent
              value={chapter}
              item={PARA}
              onValueChange={(value) =>
                props.onInputChange({
                  name: 'chapter',
                  value: value,
                })
              }
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, marginRight: 5}}>
            <Text
              style={{
                marginTop: 20,
                paddingBottom: 5,
                fontSize: 15,
                color: Colors.white,
                textAlign: 'center',
              }}>
              SURAH / CHAPTER
            </Text>
          </View>
          <View style={{flex: 1, marginRight: 5}}>
            <SelectInputComponent
              value={surah}
              item={SURAH}
              onValueChange={(value) =>
                props.onInputChange({
                  name: 'surah',
                  value: value,
                })
              }
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, marginRight: 5}}>
            <Text
              style={{
                marginTop: 20,
                paddingBottom: 5,
                fontSize: 15,
                color: Colors.white,
                textAlign: 'center',
              }}>
              AYA / VERSE
            </Text>
          </View>
          <View style={{flex: 1, marginRight: 5}}>
            <SelectInputComponent
              value={verse}
              item={AYAT}
              onValueChange={(value) =>
                props.onInputChange({
                  name: 'verse',
                  value: value,
                })
              }
            />
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <CheckBoxInputComponent
            style={styles.checkbox}
            textStyle={styles.checkboxText}
            unCheck={Colors.white}
            checkedColor={Colors.primaryColor}
            iconRight={true}
            value={memorized}
            onValueChange={() =>
              props.onInputChange({
                name: 'memorized',
                value: !memorized,
              })
            }
            label="MEMORIZED"
          />
          <CheckBoxInputComponent
            style={styles.checkbox}
            textStyle={styles.checkboxText}
            unCheck={Colors.white}
            checkedColor={Colors.primaryColor}
            iconRight={true}
            value={recited}
            onValueChange={() =>
              props.onInputChange({
                name: 'recited',
                value: !recited,
              })
            }
            label="RECITED"
          />
        </View>
      </View>
    );
  };

  return (
    <MainBackground>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              style={{
                width: 100,
                height: 100,
              }}
              resizeMode="contain"
              source={Assets.quranTracker}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title}>QURAN TRACKER</Text>
          </View>
        </View>
        <View>{_renderQuran()}</View>
        <View style={styles.button}>
          <CustomButton
            text="SUBMIT"
            onPress={() => {
              props.handleSubmit();
            }}
          />
        </View>
      </View>
    </MainBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginVertical: 8,
    // marginHorizontal: 16,
  },
  item: {},
  title: {
    fontSize: 45,
    color: Colors.white,
    fontFamily: 'big_noodle_titling',
  },
  checkbox: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 0,
    width: 150,
    alignItems: 'center',
  },
  checkboxText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'normal',
  },
  button: {
    marginTop: 20,
  },
});

export default QuranTracker;
