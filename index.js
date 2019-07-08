/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Setup from './src/Setup';
import {name as appName} from './app.json';


GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;


AppRegistry.registerComponent(appName, () => Setup);
