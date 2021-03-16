import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Alert, StatusBar,} from 'react-native';

import { RootStackParamList } from '../types';
import BlockOk from '../hooks/BlockOk'
export default function FilterScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'FilterSk'>) {
  return (
      <View style={{backgroundColor: '#000', flex: 1, marginTop: 50, }}>
          <TouchableOpacity onPress={() => navigation.replace('NotFound')} style={{backgroundColor: '#000'}}>
              <Text style={{color:'#fff'}}>NotFound</Text>
          </TouchableOpacity>
          <BlockOk path="lololol" />
      </View>
  );
}