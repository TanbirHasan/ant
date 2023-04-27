import logo from './logo.svg';
import './App.css';
import AntTabs from './components/AntTabs';
import AntAvatar from './components/AntAvatar';
import AntDesignStyling from './components/AntDesignStyling';
import AntCarousel from './components/AntCarousel';
import AntSteps from './components/AntSteps';
import AntButton from './components/AntButton';
import AntInput from './components/AntInput';
import AntSelect from './components/AntSelect';
import AntForm from './components/AntForm';
import AntTable from './components/AntTable';
import AntTablePa from './components/AntTable/AntTablePa';
import AntRowsCustomSelection from './components/AntTable/AntRowsCustomSelection';

function App() {
  return (
    <div className='p-10 bg-slate-200'>
      <h2 className='text-2xl font-semibold m-5'>Ant Design Learning</h2>
      {/* <AntTabs/>
      <AntAvatar/> */}
      {/* <AntDesignStyling/> */}
      {/* <AntCarousel/> */}
      {/* <AntSteps/> */}
      {/* <AntButton/>
      <AntInput />
      <AntSelect/> */}
      {/* <AntForm /> */}
      {/* <AntTable /> */}
      {/* <AntTablePa /> */}
      <AntRowsCustomSelection/>
    </div>
  );
}

export default App;
