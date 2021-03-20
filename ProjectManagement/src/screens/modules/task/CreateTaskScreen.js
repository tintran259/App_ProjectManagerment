import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  IconChevronLeft,
  IconStar,
  IconClipboard,
  IconDatePicker,
} from '../../../assets/icons';
import CreateTaskStyles from '../../../assets/styles/task/CreateTask';
import {
  CreateTaskBusiness,
  GetListTaskBusiness,
} from '../../../business/TaskScreenBusiness';
import ModalProjectId from '../../../components/createTaskScreen/ModalProjectId';
import ModalProjectType from '../../../components/createTaskScreen/ModalProjectType';
import ModalSprint from '../../../components/createTaskScreen/ModalSprint';
import {
  actHideLoading,
  actShowLoading,
} from '../../../redux/action/Globalaction';
import {getListTask} from '../../../redux/action/TaskAction';
import {
  DATA_STATUS,
  getDateByTimeZoneDay,
  getDateByTimeZone,
  getDateCovertUTC,
} from '../../../utils/configs';
import DateTimePicker from '@react-native-community/datetimepicker';
import I18n from '../../../utils/I18n';

export default function CreateTaskScreen({navigation}) {
  const [createForm, setCreateForm] = useState({
    nameTask: '',
    deadline: '',
    deadlineShow: '',
    projectId: '',
    projectName: '',
    typeId: '',
    typeName: '',
    sprintId: '',
    sprintName: '',
  });

  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.LoginReducer.userInfo);

  const listType = useSelector((state) => state.TaskReducer.listProjectType);
  const listSprint = useSelector((state) => state.TaskReducer.listSprint);
  const listProject = useSelector((state) => state.ProjectReducer.listProject);

  const onBlurType = () => {
    for (let i = 0; i < listType.length; i++) {
      if (listType[i].name === createForm.typeName) {
        let item = listType[i];
        setCreateForm({...createForm, typeId: item.id});
      }
    }
  };

  const onBlurSprint = () => {
    for (let i = 0; i < listSprint.length; i++) {
      if (listSprint[i].name === createForm.sprintName) {
        let item = listSprint[i];
        setCreateForm({...createForm, sprintId: item.id});
      }
    }
  };

  const onBlurProject = () => {
    for (let i = 0; i < listProject.length; i++) {
      if (listProject[i].name === createForm.sprintName) {
        let item = listProject[i];
        setCreateForm({...createForm, projectId: item.id});
      }
    }
  };

  const timeZone = userInfo.userContext.tz;
  const [visibleSprint, setVisibleSprint] = useState(false);

  const url = useSelector((state) => state.GlobalReducer.url);

  const onCreateTask = async () => {
    const {nameTask, deadline, projectId, typeId, sprintId} = createForm;

    /* convert string to int for insert to params */
    const projectIdCV = parseInt(projectId);
    const typeIdCV = parseInt(typeId);
    const sprintIdCV = parseInt(sprintId);

    const priority = rating.toString();

    if (
      !createForm.nameTask ||
      !createForm.deadlineShow ||
      !createForm.projectName ||
      !createForm.sprintName ||
      !createForm.typeName
    ) {
      alert('Vui lòng điển đầy đủ thông tin!!!');
    } else {
      await CreateTaskBusiness(
        url,
        userInfo.uid,
        nameTask,
        deadline,
        priority,
        projectIdCV,
        typeIdCV,
        sprintIdCV,
      ).then((response) => {
        if (response.status === DATA_STATUS.SUCCESS) {
          dispatch(actShowLoading());
          const createTask = response.data;
          onReloadListTask();
        }
      });
    }
  };

  const onReloadListTask = async () => {
    await GetListTaskBusiness(userInfo.uid, url).then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const listTask = response.data;
        dispatch(getListTask(listTask));

        navigation.navigate('StackTaskScreens', {
          screen: 'TaskScreen',
        });
        dispatch(actHideLoading());
      }
    });
  };

  const handleShowModalSprint = () => {
    setVisibleSprint(true);
  };

  const onInputSprint = (item) => {
    setCreateForm({
      ...createForm,
      sprintId: item.item.id.toString(),
      sprintName: item.item.name,
    });
  };

  const [visibleProjectType, setVisibleProjectType] = useState(false);

  const handleShowModalProjectType = () => {
    setVisibleProjectType(true);
  };

  const onInputProjectType = (item) => {
    setCreateForm({
      ...createForm,
      typeId: item.item.id.toString(),
      typeName: item.item.name,
    });
  };

  const [visibleProjectId, setVisibleProjectId] = useState(false);

  const handleShowModalProjectId = () => {
    setVisibleProjectId(true);
  };

  const onInputProjectId = (item) => {
    setCreateForm({
      ...createForm,
      projectId: item.item.id.toString(),
      projectName: item.item.name,
    });
  };

  const onGoBack = () => {
    navigation.goBack();
  };

  /* RENDER STAR */
  const [rating, setRating] = useState(0);
  let stars = [];
  let numRating = 3;

  const onRating = (star) => {
    setRating(star);
  };

  for (let i = 1; i <= numRating; i++) {
    stars.push(
      <View key={i} style={CreateTaskStyles.priorityStar}>
        <TouchableOpacity onPress={() => onRating(i)}>
          <IconStar
            style={
              i <= rating ? CreateTaskStyles.star : CreateTaskStyles.emptyStar
            }
          />
        </TouchableOpacity>
      </View>,
    );
  }

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
      setCreateForm({...createForm, deadline: dateUTC, deadlineShow: dateShow});
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  /*  */

  return (
    <View style={CreateTaskStyles.createContainer}>
      <View style={CreateTaskStyles.space}>
        <View style={CreateTaskStyles.forwardPosition}>
          <TouchableOpacity
            onPress={onGoBack}
            style={CreateTaskStyles.forwardBtn}>
            <IconChevronLeft style={CreateTaskStyles.forwardIcon} />
            <Text style={CreateTaskStyles.forwardText}>{I18n.t('back')}</Text>
          </TouchableOpacity>
        </View>

        <Text style={CreateTaskStyles.createTitle}>
          {I18n.t('create_task')}
        </Text>
      </View>

      <View style={CreateTaskStyles.inputContainer}>
        <View style={CreateTaskStyles.inputBox}>
          <View style={CreateTaskStyles.inputBox}>
            <Text style={CreateTaskStyles.inputTitle}>Priority</Text>
            <View style={CreateTaskStyles.priority}>{stars}</View>
          </View>
        </View>

        <View style={CreateTaskStyles.inputBox}>
          <View style={CreateTaskStyles.inputBox}>
            <Text style={CreateTaskStyles.inputTitle}>Name task</Text>

            <View style={CreateTaskStyles.inputArea}>
              <TextInput
                style={CreateTaskStyles.textInput}
                placeholder="Name task"
                value={createForm.nameTask}
                onChangeText={(text) => {
                  setCreateForm({...createForm, nameTask: text});
                }}
              />
            </View>
          </View>
        </View>

        <View style={CreateTaskStyles.inputBox}>
          <View style={CreateTaskStyles.inputBox}>
            <Text style={CreateTaskStyles.inputTitle}>Deadline</Text>

            <View style={CreateTaskStyles.inputArea}>
              <TextInput
                showSoftInputOnFocus={false}
                style={CreateTaskStyles.textInput}
                placeholder="Deadline"
                value={createForm.deadlineShow}
                onChangeText={(text) => {
                  setCreateForm({...createForm, deadlineShow: text});
                }}
                onFocus={showDatepicker}
              />

              <TouchableOpacity onPress={showDatepicker}>
                <IconDatePicker style={CreateTaskStyles.showModal} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={CreateTaskStyles.inputBox}>
          <View style={CreateTaskStyles.inputBox}>
            <Text style={CreateTaskStyles.inputTitle}>Project</Text>

            <View style={CreateTaskStyles.inputArea}>
              <TextInput
                style={CreateTaskStyles.textInput}
                placeholder="Project"
                value={createForm.projectName}
                onChangeText={(text) => {
                  setCreateForm({...createForm, projectName: text});
                }}
                onBlur={onBlurProject}
              />

              <TouchableOpacity onPress={handleShowModalProjectId}>
                <IconClipboard style={CreateTaskStyles.showModal} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={CreateTaskStyles.inputBox}>
          <View style={CreateTaskStyles.inputBox}>
            <Text style={CreateTaskStyles.inputTitle}>Type</Text>

            <View style={CreateTaskStyles.inputArea}>
              <TextInput
                style={CreateTaskStyles.textInput}
                placeholder="Project Type"
                value={createForm.typeName}
                onChangeText={(text) => {
                  setCreateForm({...createForm, typeName: text});
                }}
                onBlur={onBlurType}
              />

              <TouchableOpacity onPress={handleShowModalProjectType}>
                <IconClipboard style={CreateTaskStyles.showModal} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={CreateTaskStyles.inputBox}>
          <View style={CreateTaskStyles.inputBox}>
            <Text style={CreateTaskStyles.inputTitle}>Sprint</Text>

            <View style={CreateTaskStyles.inputArea}>
              <TextInput
                style={CreateTaskStyles.textInput}
                placeholder="Sprint"
                value={createForm.sprintName}
                onChangeText={(text) => {
                  setCreateForm({...createForm, sprintName: text});
                }}
                onBlur={onBlurSprint}
              />

              <TouchableOpacity onPress={handleShowModalSprint}>
                <IconClipboard style={CreateTaskStyles.showModal} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={onCreateTask}>
          <View style={CreateTaskStyles.btnArea}>
            <Text style={CreateTaskStyles.btnCreate}>Create Task</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <ModalSprint
        visibleSprint={visibleSprint}
        setVisibleSprint={setVisibleSprint}
        onInputSprint={onInputSprint}
      />

      <ModalProjectType
        visibleProjectType={visibleProjectType}
        setVisibleProjectType={setVisibleProjectType}
        onInputProjectType={onInputProjectType}
      />

      <ModalProjectId
        visibleProjectId={visibleProjectId}
        setVisibleProjectId={setVisibleProjectId}
        onInputProjectId={onInputProjectId}
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
