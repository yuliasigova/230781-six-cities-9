import MainScreen from '../main-screen/main-screen';

type AppScreenProps = {
  offerCount: number;
}

function App({offerCount}:AppScreenProps): JSX.Element {
  return (
    <MainScreen offerCount = {offerCount} />
  );
}

export default App;
