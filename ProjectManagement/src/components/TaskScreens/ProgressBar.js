import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {set} from 'react-native-reanimated';
import StylesProgressBar from '../../assets/styles/task/ProgressBar';

export default function ProgressBar({done}) {
  const [style, setStyle] = React.useState({});

  const newStyle = {
    backgroundColor: '#2980b9',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',

    height: '100%',

    opacity: 1,
    width: `${done}%`,
  };

  useEffect(() => {
    setStyle(newStyle);
  }, [done]);

  //   setTimeout(() => {
  //   }, 200);

  return (
    <View style={StylesProgressBar.progress}>
      {done === 0 ? (
        <View style={StylesProgressBar.viewZero}>
          <Text style={StylesProgressBar.zero}>{done}%</Text>
        </View>
      ) : (
        <View style={style}>
          <Text style={StylesProgressBar.number}> {done}%</Text>
        </View>
      )}
    </View>
  );
}
