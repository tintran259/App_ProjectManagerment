import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import StylesMoreInfo from '../../assets/styles/task/MoreInfo';
import Checklist from './CheckList';
import Description from './Description';

export default function MoreInfo({item}) {
  const [description, setDescription] = useState(true);

  const onDescription = () => {
    setDescription(true);
  };

  const onChecklist = () => {
    setDescription(false);
  };

  return (
    <View>
      <View style={StylesMoreInfo.moreInfo}>
        <View style={StylesMoreInfo.moreInfoBtn}>
          <TouchableOpacity onPress={onDescription} style={StylesMoreInfo.btn}>
            <Text
              style={
                description ? StylesMoreInfo.btnText : StylesMoreInfo.btnDisable
              }>
              Description
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onChecklist} style={StylesMoreInfo.btn}>
            <Text
              style={
                description ? StylesMoreInfo.btnDisable : StylesMoreInfo.btnText
              }>
              CheckList
            </Text>
          </TouchableOpacity>
        </View>

        <View style={StylesMoreInfo.moreInfoView}>
          {description ? (
            <Description item={item} />
          ) : (
            <Checklist item={item} />
          )}
        </View>
      </View>
    </View>
  );
}
