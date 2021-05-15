import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Image} from 'react-native';


import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {TabOneScreen} from '../screens/TabOneScreen';
import {TabTwoScreen} from '../screens/TabTwoScreen';
import TabTryScreen from '../screens/TabTryScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabTryParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="игры"
      
  //   tabBarOptions= {
  //     activeTintColor: '#0a0a0a',
  //     labelStyle: {
  //         fontSize: ScreenUtil.scale(14),
  //     },
  //     style: {
  //         backgroundColor: '#f7f7f7',
  //         //----------add this line------------------------//
  //         height: 70;
  //         borderTopWidth: 1,
  //         borderTopColor: 'red'
  //     },
  // }
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint, inactiveTintColor: '#000' }}>
      <BottomTab.Screen
        name="игры"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="list-bullet" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="любимые"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon2 name="favorite" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="игротехника"
        component={TabTryNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon3 name="dice" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Foundation>['name']; color: string }) {
  return <Foundation size={24} style={{ marginBottom: 0 }} {...props} />;
}
function TabBarIcon2(props: { name: React.ComponentProps<typeof MaterialIcons>['name']; color: string }) {
  return <MaterialIcons size={24} style={{ marginBottom: 0 }} {...props} />;
}
function TabBarIcon3(
  props: { name: React.ComponentProps<typeof FontAwesome5>['name']; color: string }) {
  return <FontAwesome5 size={20} style={{ marginBottom: 0 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{headerShown: false }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabTryStack = createStackNavigator<TabTryParamList>();

function TabTryNavigator() {
  return (
    <TabTryStack.Navigator>
      <TabTryStack.Screen
        name="TabTryScreen"
        component={TabTryScreen}
        options={{ headerShown: false }}
        // options={{ headerTitle: 'Tab Try Title' }}
      />
    </TabTryStack.Navigator>
  );
}