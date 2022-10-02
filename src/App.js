import './App.css';
import AssignmentMarks from './components/AssignmentMarks/AssignmentMarks';
import Navbar from './components/Navbar/Navbar';
import PhoneBar from './components/PhoneBar/PhoneBar';
import PricingOptions from './components/PricingOptions/PricingOptions';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-4xl font-bold'>This is heading</h1>
      <p>this is paragraph</p>
      <PricingOptions></PricingOptions>
      <AssignmentMarks></AssignmentMarks>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
