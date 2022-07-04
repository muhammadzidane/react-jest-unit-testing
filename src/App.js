import './App.css';
import ComponentAxiosCall from './materi-testing/ComponentAxiosCall';
import ComponentRole from './materi-testing/ComponentRole';
import ComponentUserEvent from './materi-testing/ComponentUserEvent';
import ComponentVariant from './materi-testing/ComponentVariant';
import SampleRTLComp from './materi-testing/SampleRTLComp';
import SimpleShowHide from './materi-testing/SimpleShowHide';

function App() {
  return (
    <>
      <SampleRTLComp />
      <SimpleShowHide />
      <ComponentRole />
      <ComponentVariant />
      <ComponentUserEvent />
      <ComponentAxiosCall />
    </>
  );
}

export default App;
