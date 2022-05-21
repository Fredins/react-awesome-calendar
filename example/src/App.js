import logo from './logo.svg';
import './App.css';
import Calendar from 'react-awesome-calendar';

const events = [{
  id: 1,
  color: '#fd3153',
  from: '2022-04-03T18:00:00+00:00',
  to: '2022-04-03T19:00:00+00:00',
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
