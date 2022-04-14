import {TweetsSearchResults} from "./components/TweetsSearchResults";
import './App.css';

function App() {
  const tweets = [
    {
      category: 'Entertainment',
      retweets: 54,
      isLocal: false,
      text: 'OMG! A tweet.'
    },
    {
      category: 'Entertainment',
      retweets: 100,
      isLocal: false,
      text: 'OMG! Another =))'
    },
    {
      category: 'Technology',
      retweets: 32,
      isLocal: false,
      text: 'New ECMAScript features!'
    },
    {
      category: 'Technology',
      retweets: 99,
      isLocal: true,
      text: 'Started learnin\' React'
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Break the UI into a Hierarchy of Components</h1>
        <TweetsSearchResults tweets={tweets} />
      </header>
    </div>
  );
}

export default App;
