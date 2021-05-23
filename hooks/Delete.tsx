import React, { useMemo, useState } from 'react'
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
} from 'react-native'
import {DATA} from '../hooks/DATA'

// changed this to a functional component so you can use hooks. You can't use hooks in class components.
const Flatlistexample = () => {
  // you don't actually need to `useState` for your list, since you're always just filtering `data`
  // you would need to use `useState` if you were receiving data from an API request, but here it's static

  const [search, setSearch] = useState('') // this should live in the main component so you can filter the list

  const parsedSearch = search.toLowerCase() // do this once outside the filter, otherwise you're converting it for each item in the data array

  const filteredList = useMemo(
    () =>
      DATA.filter(item => {
        const itemText = `${item.name.toLowerCase()} ${item.detailed.toLowerCase()}`
        return itemText.indexOf(parsedSearch) > -1 // returns `true` if search is found in string
      }),
    [parsedSearch], // this will only run if parsedSearch changes
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        //called
        data={filteredList} // use the filtered list here
        renderItem={({ item, index }) => {
          return (
            <ScrollView>
              <SafeAreaView
                style={[
                  styles.container,
                  { backgroundColor: index % 2 === 0 ? '#fafafa' : '#bbb' },
                ]}
              >
                <View style={styles.rightside}>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
              </SafeAreaView>
            </ScrollView>
          )
        }}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => {
          return (
            <View style={styles.container}>
              <TextInput
                style={styles.textInput}
                placeholder={'Search...'}
                value={search}
                onChangeText={text => {
                  setSearch(text)
                }}
              />
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
}

export default Flatlistexample

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: 'gray',
    },
    profile: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginLeft: 10,
    },
    rightside: {
      marginLeft: 20,
      justifyContent: 'space-between',
      marginVertical: 5,
    },
    name: {
      fontSize: 22,
      marginBottom: 10,
    },
    searchContainer: {
      padding: 10,
      borderWidth: 2,
      borderColor: 'gray',
    },
    textInput: {
      fontSize: 16,
      backgroundColor: '#f9f9f9',
      padding: 10,
    },
  })