import React, {useState, useMemo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';

// Styles + Icon
import {StylesListTask} from '../../../assets/styles';
import {
  IconBars,
  IconPlussquareo,
  IconEmpArr,
  IconSearch,
} from '../../../assets/icons/index';

//Components
import {ListTask} from '../../../components/TaskScreens';
import style from '../../../assets/styles/task/ProgressBar';

import I18n from '../../../utils/I18n';

export default function TaskScreen({navigation}) {
  const [search, setSearch] = useState('');
  const [userSearch, setUserSearch] = useState(false);

  const listTask = useSelector((state) => state.TaskReducer.listTask);

  const listTaskSearch = useMemo(() => {
    let result = listTask.filter((task) => {
      return task.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    return result;
  }, [listTask, search]);

  const onCreateTaskScreen = () => {
    navigation.navigate('StackTaskScreens', {
      screen: 'CreateTaskScreen',
    });
  };

  const ItemSeparatorComponent = () => {
    return <View style={{marginVertical: 7}}></View>;
  };

  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const ListEmptyComponent = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 500,
        }}>
        <IconEmpArr size={50} color="gray" />
        <Text style={{color: 'gray', fontSize: 24, fontWeight: 'bold'}}>
          {I18n.t('no_task')}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <View style={StylesListTask.headerTask}>
        <View style={StylesListTask.headerTaskContent}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <IconBars style={StylesListTask.headerIcon} />
          </TouchableOpacity>

          <Text style={StylesListTask.headerTitle}>{I18n.t('list_task')}</Text>

          <View style={StylesListTask.btnHeader}>
            <TouchableOpacity
              onPress={() => {
                setUserSearch(!userSearch);
              }}>
              <IconSearch style={StylesListTask.headerIconSearch} />
            </TouchableOpacity>

            <TouchableOpacity onPress={onCreateTaskScreen}>
              <IconPlussquareo style={StylesListTask.headerIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {userSearch ? (
        <View>
          <TextInput
            style={StylesListTask.searchBox}
            placeholder={I18n.t('search')}
            value={search}
            onChangeText={(text) => {
              setSearch(text);
            }}
          />
        </View>
      ) : null}

      <View style={StylesListTask.container}>
        <FlatList
          data={listTaskSearch}
          keyExtractor={(item) => `${item.id}`}
          renderItem={(item) => {
            return <ListTask navigation={navigation} item={item} />;
          }}
          ItemSeparatorComponent={ItemSeparatorComponent}
          ListEmptyComponent={ListEmptyComponent}
          contentContainerStyle={{paddingVertical: 10}}
        />
      </View>
    </View>
  );
}
