import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { PlaygroundView } from './playgrounds/main.playground';
import { ButtonX } from './elements/button/button.element';
import { Widget } from './elements/card/card.element';
import { LoadingIndicator } from './elements/loading-indicator/loading-indicator';
import { ImageX } from './elements/image/image.element';
import { Column } from './layout/layout';
import { LayoutPagePlayground } from './playgrounds/layout-page/layout-page.playground';
import { ColorProfilePagePlayground } from './playgrounds/color-profiles-page/color-profile';
import { ButtonsPage } from './pages/buttons-page/buttons-page.page';
import { InputsPage } from './pages/inputs-page/inputs-page.page';
import { CheckBoxPage } from './pages/check-box/check-box-page.page';
import { RadioButtonPage } from './pages/radio-button-page/radio-button-page.page';
import { SwitchXPage } from './pages/switch-page/switch-page.page';
import { TabXPage } from './pages/tab-page/tabX-page.page';
import { ButtonNavigationPage } from './pages/button-navigation/button-navigation-page.page';
import { ImageXPage } from './pages/image-page/image-page.page';
import { ToastPage } from './pages/toast-page/toast-page.page';
import { BottomModalPage } from './pages/bottom-modal-page/bottom-modal.page';
import { PopupPage } from './pages/popup-page/popup-page.page';
import { UserProfilePage } from './pages/user-profile-page/user-profile-page.page';
import { AppPurchaseFaqPage } from './pages/app-purchase-faq-page/app-purchase-faq-page.page';
import { OnBoardingPage } from './pages/on-boarding-page/on-boarding-page.page';
import { AnalyticsPage } from './pages/analytics-page/analytics-page.page';



storiesOf('Storybook', module).add('Playground', () => <PlaygroundView />);

storiesOf('Theme', module)
    // .addDecorator(getStory => <Column center middle>{getStory()}</Column>)
    .add('Color Profiles', () => <ColorProfilePagePlayground />)
    .add('Buttons', () => <ButtonsPage />)
    .add('Input', () => <InputsPage />)
    .add('Check Box', () => <CheckBoxPage />)
    .add('Radio Button', () => <RadioButtonPage />)
    .add('Switch', () => <SwitchXPage />)
    .add('Tab View', () => <TabXPage />)
    .add('Button Navigation', () => <ButtonNavigationPage />)
    .add('ImageX', () => <ImageXPage />)
    .add('Toast', () => <ToastPage />)
    .add('Bottom Modal', () => <BottomModalPage />)
    .add('Popup Modal', () => <PopupPage />)
    .add('User Profile Page', () => <UserProfilePage />)
    .add('FAQ Page', () => <AppPurchaseFaqPage />)
    .add('Intro Page', () => <OnBoardingPage />)
//   .addDecorator(getStory => <Column center middle>{getStory()}</Column>)
//   .add('Card', () => <Widget width={300} height={200} />)

//   .addDecorator(getStory => <Column center middle>{getStory()}</Column>)
//   .add('Loading Indicator', () => <LoadingIndicator />)

//   .addDecorator(getStory => <Column center middle>{getStory()}</Column>)
//   .add('Image', () => <ImageX source={require('./../../assets/sample.gif')} style={{}} />)



// storiesOf('Button', module)
//   .addDecorator(getStory => <Column center middle>{getStory()}</Column>)
//   .add('with text', () => (
//     <Button onPress={action('clicked-text')}>
//       <Text>Hello Button</Text>
//     </Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onPress={action('clicked-emoji')}>
//       <Text>😀 😎 👍 💯</Text>
//     </Button>
//   ))
//   .add('with some emofasdfji', () => (
//     <Button onPress={action('clicked-emoji')}>
//       <Text>😀 😎 👍 💯</Text>
//     </Button>
//   ));


// storiesOf('ButtonXX', module)
//   .addDecorator(getStory => <Column center middle>{getStory()}</Column>)
//   .add('with text', () => (
//     <Button onPress={action('clicked-text')}>
//       <Text>Hello Button</Text>
//     </Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onPress={action('clicked-emoji')}>
//       <Text>😀 😎 👍 💯</Text>
//     </Button>
//   ));
