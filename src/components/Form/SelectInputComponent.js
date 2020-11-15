import React, {Component} from 'react';
import {Picker} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import {View, Text} from 'react-native';
import {Colors} from '../../styles/colors';

const SelectInputComponent = (props) => {
  const {
    value,
    item,
    onValueChange,
    label,
    style,
    iconRight,
    textStyle,
    unCheck,
    checkColor,
  } = props;
  console.log('item', item[0]);
  return (
    <View style={{marginTop: 10}}>
      {label ? (
        <Text
          style={{
            paddingBottom: 5,
            fontSize: 18,
            color: Colors.white,
            textAlign: 'center',
          }}>
          {label}
        </Text>
      ) : null}

      <Picker
        mode="dropdown"
        selectedValue={value}
        style={{
          height: 50,
          width: '100%',
          color: 'black',
          backgroundColor: 'white',
          borderRadius: 8,
        }}
        onValueChange={(itemValue, itemIndex) => onValueChange(itemValue)}>
        {item.map((value, index, array) => {
          return <Picker.Item label={value.label} value={value.value} />;
        })}
      </Picker>
      {/* <RNPickerSelect
        style={{
          viewContainer: {
            width: 30,
            height: 30,
          },
          iconContainer: {
            top: 20,
            right: 10,
          },
          placeholder: {
            color: 'black',
            fontSize: 12,
            fontWeight: 'bold',
          },
          viewContainer: {
            backgroundColor: 'white',
          },
        }}
        placeholder={{
          label: 'Select...',
          value: null,
        }}
        onValueChange={onValueChange}
        items={item}
        value={value}
        itemStyle={{height: 44}}
      /> */}
    </View>
  );
};

export default SelectInputComponent;
