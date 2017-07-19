import React from 'react';
import { ScrollView, StyleSheet, ListView, View, Text, TouchableOpacity } from 'react-native';
import { List, ListItem } from 'react-native-elements'



const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
 
]
export default class LinksScreen extends React.Component {
constructor() {
    super();
    
    
  }
  componentWillMount() {
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

this.state = {
      dataSource: ds.cloneWithRows(list),
    };
  }
  static navigationOptions = {
    title: 'Matches',
  };
renderRow (rowData, sectionID) {
  return (
    <ListItem
      roundAvatar
      key={sectionID}
      title={rowData.name}
      subtitle={rowData.subtitle}
      avatar={{uri:rowData.avatar_url}}
    />
  )
}
  render() {
    return (
      <View>
        <ScrollView 
        contentContainerStyle={styles.listMatches}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        >
          <Avatar
              style={styles.imgs}
              large
              rounded
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
            <Avatar 
            style={styles.imgs}
              large
              rounded
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
            <Avatar
            style={styles.imgs}
              large
              rounded
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
        </ScrollView>


        <Text style={styles.textBox} >
          Conversations
        </Text>


      <ScrollView style={styles.container}>
        <List style={{flex: 1}}>
          <TouchableOpacity>
          <ListView
            renderRow={this.renderRow}
            dataSource={this.state.dataSource}
          />
          </TouchableOpacity>
        </List>
      </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  listMatches: {
    height: 90,
    minWidth: 375,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imgs: {
    marginLeft: 50,
    marginRight: 50
  },
  textBox: {
    padding: 10,
    alignSelf: 'center'
  }

});