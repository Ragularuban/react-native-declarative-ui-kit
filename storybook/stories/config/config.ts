import { platform } from "os";
import { Platform } from "@unimodules/core";

let font;

if (Platform.OS == 'ios') {
    font = 'Arial';
} else {
    font = 'sans-serif';
}

export const UIConfigurations = {
    global: {
        colors: {
            regular: '#4A4A4A',
            primary: "#FF1A70",
            _primary: {
                _100: "#FFF4F8",
                _200: "#FFDBE9",
                _300: "#FEA8C8",
                _400: "#FD5695",
                _500: "#FF1A70", // This is the primary color
                _600: "#D92569",
                _700: "#B81854",
                _800: "#951243",
                _900: "#780832",
            },
            basic: "#414A4F",
            _basic: {
                _100: "#FFFFFF", // This is just white <(._.)<
                _200: "#ECF2F4",
                _300: "#D8E0E3",
                _400: "#B6C2C7",
                _500: "#88969B",
                _600: "#5E6B6F",
                _700: "#414A4F", // This is the primary color
                _800: "#951243",
                _900: "#1A2124",
            },
            success: "#00D68F",
            _success: {
                _100: "#F0FFF5",
                _200: "#CCFCE3",
                _300: "#8CFAC7",
                _400: "#2CE69B",
                _500: "#00D68F", // This is the primary color
                _600: "#00B887",
                _700: "#00997A",
                _800: "#007D6C",
                _900: "#004A45",
            },
            info: "#0095FF",
            _info: {
                _100: "#F2F8FF",
                _200: "#C7E2FF",
                _300: "#94CBFF",
                _400: "#42AAFF",
                _500: "#0095FF", // This is the primary color
                _600: "#006FD6",
                _700: "#0057C2",
                _800: "#0041A8",
                _900: "#002885",
            },
            warning: "#FFAA00",
            _warning: {
                _100: "#FFFDF2",
                _200: "#FFF1C2",
                _300: "#FFE59E",
                _400: "#FFC94C",
                _500: "#FFAA00", // This is the primary color
                _600: "#DB8B00",
                _700: "#B86E00",
                _800: "#945400",
                _900: "#703C00",
            },
            danger: "#FF3D3D",
            _danger: {
                _100: "#FDEEEE",
                _200: "#FCD0D0",
                _300: "#FEA0A0",
                _400: "#FF6E6E",
                _500: "#FF3D3D", // This is the primary color
                _600: "#DC1F1F",
                _700: "#B71010",
                _800: "#8D0202",
                _900: "#520000",
            },
            secondary: "#2DCE9B",
            // Shades of Grey
            light: '#9B9B9B',
            lighter: '#cccccc',
            smoke: '#f4f4f4',
            dark: '#222222',
            darker: '#101010',
            // Other Colors
            green: '#EEEEEE',
            blue: '#5552E1',
            light_blue: '#6595F1',
            white: '#ffffff',
            red: '#F45454',
            purple_1: '#6D67FF',
            light_green: '#2ecc71'
        },
        gradientPallet: {
            lightGrey: {
                colors: ['#ffffff', '#f4f4f4'],
                start: [0, 0.75],
                end: [1, 0.25]
            },
            red: {
                colors: ['#FF4D46', '#FD5292'],
                start: [0, 0.75],
                end: [1, 0.25]
            },
            blue: {
                colors: ['#1488CC', '#2B32B2'],
                start: [0, 0.75],
                end: [1, 0.25]
            },
            purple: {
                colors: ['#F088FD', '#ba59c6'],
                start: [0, 0.75],
                end: [1, 0.25]
            },
            orange: {
                colors: ['#fccc85', '#FCAF16'],
                start: [0, 0.75],
                end: [1, 0.25]
            },
            nelson: {
                colors: ['#f2709c', '#ff9472'],
                start: [0, 0.75],
                end: [1, 0.25]
            },
            veryBlue: {
                colors: ['#0575E6', '#021B79'],
                start: [0, 0.75],
                end: [1, 0.25]
            },
            instagram: {
                // Todo: need to check
                colors: ['#833ab4', '#fd1d1d', '#fcb045'],
                start: [0, 0.75],
                end: [1, 0.25]
            },
            fbMessenger: {
                colors: ['#00c6ff', '#0072ff'],
                start: [0, 0.75],
                end: [1, 0.25]
            },
            lush: {
                colors: ['#56ab2f', '#a8e063'],
                start: [0, 0.75],
                end: [1, 0.25]
            },
            ohHappiness: {
                colors: ['#00b09b', '#96c93d'],
                start: [0, 0.75],
                end: [1, 0.25]
            },
            shifter: {
                colors: ['#bc4e9c', '#f80759'],
                start: [0, 0.75],
                end: [1, 0.25]
            },
            purpleDuo: {
                colors: ['#7B91F2', '#BA89CE'],
                start: [0, 0.75],
                end: [1, 0.25]
            },
            orangeDuo: {
                colors: ['#FF5F5F', '#6594FF'],
                start: [0, 0.75],
                end: [1, 0.25]
            },
            combineLighter: {
                colors: ['#D881FF', '#5FF4D7'],
                start: [0, 0.75],
                end: [1, 0.25]
            }
        },
        font: {
            regular: font,
            bold: font,
            semiBold: font,
            light: font
        }
    }
};


export async function ConfigureUI(Font) {
    await Promise.all([
        Font.loadAsync({
            // 'Signika': require('./../../../assets/fonts/signika/Signika-Regular.ttf'),
            // 'Signika-light': require('./../../../assets/fonts/signika/Signika-Light.ttf'),
            // 'Signika-Light': require('./../../../assets/fonts/signika/Signika-Light.ttf'),
            // 'Signika-semibold': require('./../../../assets/fonts/signika/Signika-SemiBold.ttf'),
            // 'Signika-SemiBold': require('./../../../assets/fonts/signika/Signika-SemiBold.ttf'),
            // 'Signika-bold': require('./../../../assets/fonts/signika/Signika-Bold.ttf'),
            // 'Signika-Bold': require('./../../../assets/fonts/signika/Signika-Bold.ttf'),
            // 'Arial': require('./../../../assets/fonts/arial/Arial-Regular.ttf'),
        }, () => { console.log("font loaded") }),
    ]);
    console.log("Fonts Loaded");
}

export const Assets = {
    app: {
        icon_app: require('./../../../assets/images/app/app-icon.png'),
        logo_mascot: require('./../../../assets/images/app/logo-mascot.png'),
        logo_text: require('./../../../assets/images/app/logo-text.png'),
        logo: require('./../../../assets/images/app/logo.png'),
        playStoreFeatured: require('./../../../assets/images/app/play-store-featured.png'),
        icon_playstoreApp: require('./../../../assets/images/app/playstore-app-icon.png'),
        splash: require('./../../../assets/images/app/splash.png'),
        logo_new: require('./../../../assets/images/app/logo_new.png'),
    },
    loaders: {
        content_loading: require('./../../../assets/images/loaders/loading-content.gif'),
        loading_tiny: require('./../../../assets/images/loaders/loading-tiny.gif'),
    },
    misc: {
        avatar: require('./../../../assets/images/misc/avatar.png'),
    },
};