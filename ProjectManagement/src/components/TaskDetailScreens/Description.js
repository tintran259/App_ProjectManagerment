import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import HTML from 'react-native-render-html';
import StylesMoreInfo from '../../assets/styles/task/MoreInfo';

export default function Description({item}) {
  const htmlContent = item.item.description;

  // const htmlContent = `
  //         <h1>This HTML snippet is now rendered with native components !</h1>
  //         <h2>Enjoy a webview-free and blazing fast application</h2>
  //         <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
  //         <em style="textAlign: center;">Look at how happy this native cat is</em>
  //     `;

  return (
    <>
      {!htmlContent ? (
        <View style={StylesMoreInfo.noneInfo}>
          <Text style={StylesMoreInfo.alertNone}>No description</Text>
        </View>
      ) : (
        <ScrollView style={{flex: 1}}>
          <HTML html={htmlContent} />
        </ScrollView>
      )}
    </>
  );
}
