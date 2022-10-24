import StartScreen from '../../pages/start-screen/start-screen';

type AppProp = {
  placeCount: number;
}

function App({ placeCount }: AppProp): JSX.Element {
  return <StartScreen placeCount={placeCount}/>;
}

export default App;
