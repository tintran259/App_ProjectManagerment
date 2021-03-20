import React from 'react';
import {FlatList, Text, View} from 'react-native';

import StylesMoreInfo from '../../assets/styles/task/MoreInfo';

export default function Checklist({item}) {
  const checkList = item.item.checklist_task_instance_ids;

  return (
    <>
      {checkList.length <= 0 ? (
        <View style={StylesMoreInfo.noneInfo}>
          <Text style={StylesMoreInfo.alertNone}>No checklist</Text>
        </View>
      ) : (
        <View>
          <Text>{checkList}</Text>
        </View>
      )}
    </>
  );
}
