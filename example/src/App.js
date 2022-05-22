import logo from './logo.svg';
import './App.css';
import Calendar from 'react-awesome-calendar';

const events = [{
  id: 1,
  color: '#B9ACF2',
  from: '2020-04-03T04:00:00+00:00',
  to: '2020-04-03T06:00:00+00:00',
  title: 'Seeing family',
}];

function App() {
  return (
    <div className="App">
     <Calendar 
      events={events}
      defaultState={{
        mode: 'monthlyMode',
        year: 2020,
        month: 2,
        day: 2,
      }}
    /> 
    </div>
  );
}

export default App;
