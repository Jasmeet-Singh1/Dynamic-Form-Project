import { useEffect, useState } from 'react';
import AddInput from './Components/AddInputs';
import InputList from './Components/InputList';

function App() {
  const [inputDetails, setInputDetails] = useState({ label: '', type: '' });
  const [allInputs, setAllInputs] = useState([]);

  return (
    <>
      <div className='text-black bg-slate-500 flex flex-col gap-48 px-10'>
        <h1 className='flex items-center justify-center text-4xl pt-20'>Dynamic Form project React</h1>
        <AddInput
          inputDetails={inputDetails}
          setInputDetails={setInputDetails}
          allInputs={allInputs}
          setAllInputs={setAllInputs}
        />
        <InputList allInputs={allInputs} />
      </div>
    </>
  );
}

export default App;
