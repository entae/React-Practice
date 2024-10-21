import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
        <TimerChallenge title="Warm Up" targetTime={1} />
        <TimerChallenge title="Easy" targetTime={5} />
        <TimerChallenge title="Not Bad" targetTime={10} />
        <TimerChallenge title="Pretty Good" targetTime={15} />
    </>
  );
}

export default App;
