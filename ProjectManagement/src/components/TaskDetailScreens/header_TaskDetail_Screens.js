import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

// Styles + Icon

import {IconStar, IconDatePicker, IconClipboard} from '../../assets/icons';
import {StylesTaskDetail} from '../../assets/styles';

import ModalSprint from '../createTaskScreen/ModalSprint';
import ModalComfirm from './ModalConfirm';
import {getDateByTimeZoneMin, getDateByTimeZoneDay} from '../../utils/configs';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function HeaderTaskDetail({
  item,
  editInput,
  setEditInput,
  modalConfirm,
  setModalConfirm,
  onGetData,
  timeZone,
}) {
  const [editForm, setEditForm] = useState({
    id: item.item.id,
    nameTask: item.item.name,
    deadlineShow: getDateByTimeZoneDay(item.item.date_deadline, timeZone),
    deadline: '',
    sprintId: item.item.sprint_id[0],
    sprintName: item.item.sprint_id[1],
  });

  /* reinstall TASK DETAIL when cancel edit */
  useEffect(() => {
    if (!editInput) {
      setEditForm({
        ...editForm,
        nameTask: item.item.name,
        deadline: getDateByTimeZoneDay(item.item.date_deadline, timeZone),
        sprintId: item.item.sprint_id[0],
        sprintName: item.item.sprint_id[1],
      });
    }
  }, [editInput]);

  /* Modal Sprint */
  const [visibleSprint, setVisibleSprint] = useState(false);

  const handleShowModalSprint = () => {
    setVisibleSprint(true);
  };

  const onInputSprint = (item) => {
    setEditForm({
      ...editForm,
      sprintId: item.item.id,
      sprintName: item.item.name,
    });
  };

  /* DAY PICKER */
  //const today = new Date();

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    if (selectedDate === undefined) {
      setShow(false);
    } else {
      //const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      //setDate(currentDate);

      let dateString = JSON.stringify(selectedDate);
      let dateUTC = dateString.split('"').join('');
      let dateShow = getDateByTimeZoneDay(dateUTC, timeZone);
      setEditForm({...editForm, deadline: dateUTC, deadlineShow: dateShow});
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View style={StylesTaskDetail.headerBody}>
      <View style={StylesTaskDetail.top}>
        {editInput ? (
          <View style={StylesTaskDetail.headerBody_Left}>
            <TextInput
              style={StylesTaskDetail.editName}
              value={editForm.nameTask}
              onChangeText={(text) =>
                setEditForm({...editForm, nameTask: text})
              }
            />
          </View>
        ) : (
          <View style={StylesTaskDetail.headerBody_Left}>
            <Text numberOfLines={1} style={StylesTaskDetail.titleBodyHeader}>
              {item.item.name}
            </Text>
          </View>
        )}

        {item.item.priority <= 1 ? (
          <View style={StylesTaskDetail.headerBody_Right}>
            <IconStar style={StylesTaskDetail.star} />
            <IconStar style={StylesTaskDetail.emptyStar} />
            <IconStar style={StylesTaskDetail.emptyStar} />
          </View>
        ) : item.item.priority == 2 ? (
          <View style={StylesTaskDetail.headerBody_Right}>
            <IconStar style={StylesTaskDetail.star} />
            <IconStar style={StylesTaskDetail.star} />
            <IconStar style={StylesTaskDetail.emptyStar} />
          </View>
        ) : (
          <View style={StylesTaskDetail.headerBody_Right}>
            <IconStar style={StylesTaskDetail.star} />
            <IconStar style={StylesTaskDetail.star} />
            <IconStar style={StylesTaskDetail.star} />
          </View>
        )}
      </View>

      <View style={StylesTaskDetail.middle}>
        <View style={StylesTaskDetail.item}>
          <Text style={StylesTaskDetail.projectText}>Project :</Text>

          <Text numberOfLines={2} style={StylesTaskDetail.textDetailProject}>
            {item.item.project_id[1]}
          </Text>
        </View>

        <View style={StylesTaskDetail.item}>
          <Text style={StylesTaskDetail.projectText}>Task Type :</Text>

          <Text numberOfLines={2} style={StylesTaskDetail.textDetailProject}>
            {item.item.type_id[1]}
          </Text>
        </View>

        <View style={StylesTaskDetail.item}>
          <Text style={StylesTaskDetail.projectText}>Sprint :</Text>

          <View style={StylesTaskDetail.haveModal}>
            {editInput ? (
              <View style={StylesTaskDetail.haveModal}>
                <Text style={StylesTaskDetail.textInModal}>
                  {editForm.sprintName}
                </Text>

                <TouchableOpacity onPress={handleShowModalSprint}>
                  <IconClipboard style={StylesTaskDetail.showModal} />
                </TouchableOpacity>
              </View>
            ) : (
              <Text
                numberOfLines={2}
                style={StylesTaskDetail.textDetailProject}>
                {editForm.sprintName}
              </Text>
            )}
          </View>
        </View>

        <View style={StylesTaskDetail.item}>
          <Text style={StylesTaskDetail.projectText}>Deadline :</Text>

          {editInput ? (
            <View style={StylesTaskDetail.haveModal}>
              <TextInput
                style={StylesTaskDetail.editDeadline}
                value={editForm.deadlineShow}
                onChangeText={(text) =>
                  setEditForm({...editForm, deadlineShow: text})
                }
              />

              <TouchableOpacity onPress={showDatepicker}>
                <IconDatePicker style={StylesTaskDetail.showModal} />
              </TouchableOpacity>
            </View>
          ) : (
            <Text style={StylesTaskDetail.textDetailProject}>
              {getDateByTimeZoneDay(item.item.date_deadline, timeZone)}
            </Text>
          )}
        </View>
      </View>

      <ModalSprint
        visibleSprint={visibleSprint}
        setVisibleSprint={setVisibleSprint}
        onInputSprint={onInputSprint}
      />

      <ModalComfirm
        editForm={editForm}
        onGetData={onGetData}
        modalConfirm={modalConfirm}
        setModalConfirm={setModalConfirm}
        setEditInput={setEditInput}
      />

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}
