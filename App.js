import * as React from 'react';
import { useFonts } from 'expo-font';
import SplashScreen from './splashscreen';
import Navigator from './routes/homeStack'

export default function App(){
  const [showSplash, setShowSplash] = React.useState(true);
  const [fontsLoaded] = useFonts({
    'audi-regular': require('./assets/fonts/AudiType-Normal_4.03.otf'),
    'audi-bold': require('./assets/fonts/AudiType-Bold_4.03.otf'),
    'audi-regular-extended': require('./assets/fonts/AudiType-ExtendedNormal_4.03.otf'), 
    'audi-bold-extended': require('./assets/fonts/AudiType-ExtendedBold_4.03.otf')
  });
  
  React.useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);
  
  if(showSplash || !fontsLoaded){
    return <SplashScreen />;
  } else {
    return <Navigator/>;
  }
}


  
