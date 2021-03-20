import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';

// Styles + Icon
import {StylesListTask} from '../../assets/styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {getTaskDetail} from '../../redux/action/TaskAction';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconStopWatch, IconStar} from '../../assets/icons';
import ProgressBar from './ProgressBar';
import {getDateByTimeZoneMin, getDateCovertUTC} from '../../utils/configs';

export default function ListTask({navigation, item}) {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.LoginReducer.userInfo);
  const timeZone = userInfo.userContext.tz;

  const deadlineFormat = getDateByTimeZoneMin(
    item.item.date_deadline,
    timeZone,
  );

  const [timeUp, setTimeUp] = useState(false);

  let dateObj = new Date();

  let day = parseInt(dateObj.getDate());
  let dayFormat = day < 10 ? `0${day}` : day;

  let month = dateObj.getMonth() + 1;
  let year = dateObj.getFullYear();
  let today = year + '-' + month + '-' + dayFormat;

  let deadline = item.item.date_deadline;

  let todayParse = Date.parse(today);
  let deadlineParse = Date.parse(deadline);

  const onDeadline = () => {
    if (deadlineParse < todayParse) {
      setTimeUp(true);
    }
  };

  useEffect(() => {
    onDeadline();
  }, [deadline]);

  const handleTaskDetail_Screen = () => {
    dispatch(getTaskDetail(item));

    navigation.navigate('StackTaskScreens', {
      screen: 'TaskDetailScreen',
    });
  };

  const avatarCreator = () => {
    return `https://uat.xboss.com/web/image?model=res.users&field=image&id=${item.item.create_uid[0]}`;
  };

  const avatarWriter = () => {
    return `https://uat.xboss.com/web/image?model=res.users&field=image&id=${item.item.user_id[0]}`;
  };

  return (
    <TouchableOpacity onPress={handleTaskDetail_Screen}>
      <View style={StylesListTask.listask}>
        <View style={StylesListTask.listaskContent}>
          <View style={StylesListTask.header}>
            <Text numberOfLines={1} style={StylesListTask.taskTile}>
              {item.item.name}
            </Text>

            {item.item.priority <= 1 ? (
              <View style={StylesListTask.Right}>
                <IconStar style={StylesListTask.star} />
                <IconStar style={StylesListTask.emptyStar} />
                <IconStar style={StylesListTask.emptyStar} />
              </View>
            ) : item.item.priority == 2 ? (
              <View style={StylesListTask.Right}>
                <IconStar style={StylesListTask.star} />
                <IconStar style={StylesListTask.star} />
                <IconStar style={StylesListTask.emptyStar} />
              </View>
            ) : (
              <View style={StylesListTask.Right}>
                <IconStar style={StylesListTask.star} />
                <IconStar style={StylesListTask.star} />
                <IconStar style={StylesListTask.star} />
              </View>
            )}
          </View>

          <View style={StylesListTask.body}>
            <View style={StylesListTask.bodyInfo}>
              <Text numberOfLines={1} style={StylesListTask.infoContent}>
                {item.item.project_id[1]}
              </Text>

              <Text style={StylesListTask.infoContent}>
                {item.item.type_id[1]}
              </Text>

              <Text style={StylesListTask.infoContent}>
                {item.item.stage_id[1]}
              </Text>
            </View>

            <View style={StylesListTask.Right}>
              <View style={StylesListTask.bodyProgress}>
                <ProgressBar done={item.item.progress} />
              </View>
            </View>
          </View>

          <View style={StylesListTask.footer}>
            <View style={StylesListTask.footerLeft}>
              <View
                style={
                  timeUp ? StylesListTask.deadLine : StylesListTask.notDeadLine
                }>
                <IconStopWatch style={StylesListTask.deadLineIcon} />

                <Text style={StylesListTask.deadLineText}>
                  {deadlineFormat}
                </Text>
              </View>
            </View>

            <View style={StylesListTask.Right}>
              <Image
                style={StylesListTask.avatar}
                source={{uri: avatarCreator()}}
              />

              <Icon name="right" style={StylesListTask.iconRight} />

              <Image
                style={StylesListTask.avatar}
                source={{uri: avatarWriter()}}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
