import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';

// Styles + Icon
import Icon from 'react-native-vector-icons/AntDesign';
import {StylesTaskDetail} from '../../assets/styles';
import {IconCalenda} from '../../assets/icons';

import {getDateByTimeZoneMin} from '../../utils/configs';

export default function BodyTaskDetail({item, timeZone}) {
  return (
    <View style={StylesTaskDetail.bodyDetail}>
      <View style={StylesTaskDetail.bodyContent}>
        <View style={StylesTaskDetail.itemBody}>
          <Text style={StylesTaskDetail.itemTitle}>Request</Text>

          <View style={StylesTaskDetail.itemContent}>
            <Image
              style={StylesTaskDetail.avatar}
              source={{
                uri: `https://uat.xboss.com/web/image?model=res.users&field=image&id=${item.item.create_uid[0]}`,
              }}
            />
            <Text style={StylesTaskDetail.detail}>
              {item.item.create_uid[1]}
            </Text>
          </View>

          <View style={StylesTaskDetail.itemContent}>
            <IconCalenda style={StylesTaskDetail.iconCalendar} />
            <Text numberOfLines={2} style={StylesTaskDetail.detail}>
              {getDateByTimeZoneMin(item.item.create_date, timeZone)}
            </Text>
          </View>
        </View>

        <View style={StylesTaskDetail.itemBody}>
          <Text style={StylesTaskDetail.itemTitle}>Assign</Text>

          <View style={StylesTaskDetail.itemContent}>
            <Image
              style={StylesTaskDetail.avatar}
              source={{
                uri: `https://uat.xboss.com/web/image?model=res.users&field=image&id=${item.item.user_id[0]}`,
              }}
            />

            <Text style={StylesTaskDetail.detail}>{item.item.user_id[1]}</Text>
          </View>

          <View style={StylesTaskDetail.itemContent}>
            <IconCalenda style={StylesTaskDetail.iconCalendar} />
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={StylesTaskDetail.detail}>
              {getDateByTimeZoneMin(item.item.date_assign, timeZone)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
