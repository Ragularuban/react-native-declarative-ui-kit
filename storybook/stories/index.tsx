import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { PlaygroundView } from './playgrounds/main.playground';
import { ButtonX } from './elements/button/button.element';
import { Widget } from './elements/card/card.element';
import { LoadingIndicator } from './elements/loading-indicator/loading-indicator';
import { ImageX } from './elements/image/image.element';
import { Column } from './layout/layout';


storiesOf('Storybook', module).add('Playground', () => <PlaygroundView />);

// storiesOf('Elements', module)
//   .addDecorator(getStory => <Column center middle>{getStory()}</Column>)
//   .add('Button', () => <ButtonX onPress={() => console.log("Button Clicked")} label={"Continue"} />)

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
