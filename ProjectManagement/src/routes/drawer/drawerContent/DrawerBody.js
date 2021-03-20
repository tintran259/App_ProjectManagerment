import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native';

// Icon+Styles
import IconAntd from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import stylesDrawer from '../../../assets/styles/Drawer';

// Action + Contants
import { actGetListProject } from '../../../redux/action/ProjectAction';
import { GetListProjectBusiness } from '../../../business/ProjectScreenBusiness';
import {
  GetListTaskBusiness,
  GetListSprintBusiness,
  GetListProjecTypeBusiness,
} from '../../../business/TaskScreenBusiness';
import { DATA_STATUS, DATA_STORAGE } from '../../../utils/configs';

import {
  getListTask,
  getListSprint,
  getListProjectType,
} from '../../../redux/action/TaskAction';
import {
  actShowLoading,
  actHideLoading,
} from '../../../redux/action/Globalaction';

import I18n from '../../../utils/I18n';

export default function DrawerBody({ navigation }) {
  const userInfo = useSelector((state) => state.LoginReducer.userInfo);
  const url = useSelector((state) => state.GlobalReducer.url);
  const dispatch = useDispatch();

  const [language, setLanguage] = useState(userInfo.userContext.lang);

  const [languageOnApp, setLanguageOnApp] = useState('');
  const onAppEnglish = () => {
    I18n.locale = 'en-Us';
    setLanguageOnApp('English');
  };

  const onAppVietnamese = () => {
    I18n.locale = 'vi-VN';
    setLanguageOnApp('Vietnamese');
  };

  const onAsyncLanguage = () => {
    if (language === 'vi_VN') {
      onAppVietnamese();
    } else {
      onAppEnglish();
    }
  };

  useEffect(() => {
    onAsyncLanguage();
  }, [language]);

  //const [url, setUrl] = useState('');

  const handleTaskScreens = () => {
    navigation.navigate('StackTaskScreens');
  };

  const handleProjectsScreens = async () => {
    navigation.navigate('StackProjectsScreens');
  };

  /* call API to render List Task */
  useEffect(() => {
    const fetchData = async () => {
      dispatch(actShowLoading());

      await GetListTaskBusiness(userInfo.uid, url)
        .then((response) => {
          if (response.status === DATA_STATUS.SUCCESS) {
            const listTask = response.data;

            dispatch(getListTask(listTask));
            dispatch(actHideLoading());
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch(actHideLoading());
        });

      await GetListProjectBusiness(url)
        .then((response) => {
          if (response.status === DATA_STATUS.SUCCESS) {
            const listProject = response.data;
            dispatch(actGetListProject(listProject));
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch(actHideLoading());
        });

      await GetListSprintBusiness(url)
        .then((response) => {
          if (response.status === DATA_STATUS.SUCCESS) {
            const listSprint = response.data;
            dispatch(getListSprint(listSprint));
            // dispatch(actHideLoading());
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch(actHideLoading());
        });

      await GetListProjecTypeBusiness(url)
        .then((response) => {
          if (response.status === DATA_STATUS.SUCCESS) {
            const listProjectType = response.data;
            dispatch(getListProjectType(listProjectType));
            // dispatch(actHideLoading());
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch(actHideLoading());
        });
    };

    fetchData();
  }, []);

  return (
    <View style={stylesDrawer.body}>
      <View style={stylesDrawer.contentBody}>
        <TouchableOpacity onPress={handleTaskScreens}>
          <View style={stylesDrawer.itemBody}>
            <Icon style={stylesDrawer.iconTask} name="tasks" size={25} />
            <Text style={stylesDrawer.textBody}>{I18n.t('task')}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleProjectsScreens}>
          <View style={stylesDrawer.itemBody}>
            <IconAntd style={stylesDrawer.iconTask} name="layout" size={25} />
            <Text style={stylesDrawer.textBody}>{I18n.t('project')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
