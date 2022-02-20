import React, {useState} from 'react';
import { Image, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={{
            marginTop: 30,
            marginHorizontal: 30,
            justifyContent: 'space-between'
        }}>
            <Text>Hello world</Text>
            <Text>Its a kisp application</Text>
            <Text>Developed by JSONCMD</Text>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
