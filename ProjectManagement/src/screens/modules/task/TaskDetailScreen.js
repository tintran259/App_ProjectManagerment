import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

// Styles + Icon
import {StylesTaskDetail} from '../../../assets/styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {IconCheck, IconTimes} from '../../../assets/icons';

//Components
import {
  BodyTaskDetail,
  HeaderTaskDetail,
} from '../../../components/TaskDetailScreens';

import {
  EditTaskBusiness,
  GetListTaskBusiness,
} from '../../../business/TaskScreenBusiness';

import {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DATA_STATUS} from '../../../utils/configs';
import {getListTask} from '../../../redux/action/TaskAction';
import MoreInfo from '../../../components/TaskDetailScreens/MoreInfo';
import I18n from '../../../utils/I18n';

export default function TaskDetailScreens({navigation}) {
  const dispatch = useDispatch();
  const taskDetail = useSelector((state) => state.TaskReducer.taskDetail);

  const userInfo = useSelector((state) => state.LoginReducer.userInfo);
  const timeZone = userInfo.userContext.tz;
  const url = useSelector((state) => state.GlobalReducer.url);

  const [editInput, setEditInput] = useState(false);

  const onEdit = () => {
    setEditInput(true);
  };

  const onCancelEdit = () => {
    setEditInput(false);
  };

  const onConfirm = () => {
    setModalConfirm(true);
  };

  /* modal edit */
  const [modalConfirm, setModalConfirm] = useState(false);

  const onGetData = async (item) => {
    await EditTaskBusiness(
      url,
      item.id,
      item.nameTask,
      item.deadline,
      item.sprintId,
    ).then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        console.log('nam => ', response.data);
        UpdateListTask();
      } else {
        alert('sai thong tin');
      }
    });
  };

  const UpdateListTask = async () => {
    await GetListTaskBusiness(userInfo.uid, url).then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const listTask = response.data;
        dispatch(getListTask(listTask));

        onGoBack();
      }
    });
  };

  const onGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={StylesTaskDetail.header}>
        <Icon
          onPress={onGoBack}
          style={StylesTaskDetail.BackIcon}
          name="left"
          size={28}
        />
        <Text style={StylesTaskDetail.headerTitle}>
          {I18n.t('task_detail')}
        </Text>
        {editInput ? (
          <View style={StylesTaskDetail.editIcon}>
            <TouchableOpacity onPress={onConfirm}>
              <IconCheck style={StylesTaskDetail.FormIcon} size={30} />
            </TouchableOpacity>

            <TouchableOpacity onPress={onCancelEdit}>
              <IconTimes style={StylesTaskDetail.cancelIcon} size={30} />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={onEdit}>
            <Icon style={StylesTaskDetail.FormIcon} name="form" size={30} />
          </TouchableOpacity>
        )}
      </View>

      <View style={StylesTaskDetail.body}>
        <ScrollView style={{paddingHorizontal: 10}}>
          <HeaderTaskDetail
            item={taskDetail}
            editInput={editInput}
            setEditInput={setEditInput}
            modalConfirm={modalConfirm}
            setModalConfirm={setModalConfirm}
            onGetData={onGetData}
            timeZone={timeZone}
          />
          <BodyTaskDetail item={taskDetail} timeZone={timeZone} />

          <MoreInfo item={taskDetail} />
        </ScrollView>
      </View>
    </>
  );
}
