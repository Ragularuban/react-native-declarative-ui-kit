export const UIConfigurations = {
    global: {
        colors: {
            regular: '#4A4A4A',
            primary: "#FF0166",
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
            regular: 'Arial',
            bold: 'Arial',
            semiBold: 'Arial',
            light: 'Arial'
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