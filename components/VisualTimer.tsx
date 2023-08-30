import { View, Text, StyleSheet } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

export default function UrgeWithPleasureComponent() {
    return (
        <View style={styles.timer} >
            <CountdownCircleTimer
                isPlaying
                isGrowing={true}
                strokeLinecap='butt'
                size={300}
                strokeWidth={24}
                rotation='counterclockwise'
                duration={50 * 60}
                colors={['#6D6DCB', '#9999D2']}
                colorsTime={[10, 0]}
            >
                {({ remainingTime }) => <Text style={styles.text}>{humanReadable(remainingTime)}</Text>}
            </CountdownCircleTimer>
        </View>
    );
}

function humanReadable(seconds: number) {
    if (seconds < 61) {
        return '00:' + addZero(seconds)
    }
    // sec
    var mins = Math.floor(seconds / 60)
    var secs = seconds - mins * 60
    return addZero(mins) + ':' + addZero(secs)

    function addZero(num: number) {
        return ((num < 10) ? '0' : '') + num
    }
}

const styles = StyleSheet.create({
    timer: {
        display: 'flex',
        width: 300,
        height: 410,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'nanum-bold',
        textAlign: 'center',
        margin: 'auto',
        fontSize: 70,
        letterSpacing: -2,
        color: 'white',
    },
});