import { Dimensions, Platform, StatusBar } from 'react-native';

export function isSmallerScreen() {
    const screen = Dimensions.get('window');
    // iPhone 5 - 320 × 568
    // iPhone X - 375 × 812
    // Ideally, can identify this by checking if width is less than 340
    return (
        screen.width <= 340
    );
}

export function ifSmallerScreen(smallerScreenStyle, regularStyle?) {
    if (isSmallerScreen()) {
        return smallerScreenStyle;
    }
    return (regularStyle !== null) ? regularStyle : {};
}

// export function getStatusBarHeight(safe) {
//     return Platform.select({
//         ios: ifSmallerScreen(safe ? 44 : 30, 20),
//         android: StatusBar.currentHeight
//     });
// }