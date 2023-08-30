import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Button(props: { onPress: any; title: any; }) {
    const { onPress, title = 'button' } = props;
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>시작하기</Text>
            </Pressable>
            <View style={styles.subContainer}>
                <Pressable style={styles.subButton} onPress={onPress}>
                    <Text style={styles.text}>기록</Text>
                </Pressable>
                <Pressable style={styles.subButton} onPress={onPress}>
                    <Text style={styles.text}>랭킹</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: '31%',
    },
    subContainer: {
        flexDirection: 'row',

        justifyContent: 'center'

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 32,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: '#31313D',
        marginVertical: 6,
    },
    subButton: {
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 32,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: '#31313D',
        marginVertical: 6,
        marginHorizontal: 5
    },
    text: {
        fontFamily: 'nanum',
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
