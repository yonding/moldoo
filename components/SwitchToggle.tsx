import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text, Pressable } from 'react-native';

export default function SwitchToggle() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: 'white', true: '#6D6DCB' }}
                thumbColor={isEnabled ? 'white' : 'white'}
                ios_backgroundColor="#C8C8E5"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={styles.switch}
            >
            </Switch>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '28%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    switch: {
        transform: [{ scaleX: 2 }, { scaleY: 2 }],
        width: 50
    }
});
