/* eslint-disable react/prop-types */

export default function AddInputs(props) {
  const { setInputDetails, inputDetails, allInputs, setAllInputs } = props;

  const onHandleSubmit = () => {
    let updatedItems;
    const existingItems = JSON.parse(localStorage.getItem('list'));
    if (existingItems?.length) {
      updatedItems = [{ ...inputDetails, id: existingItems.length + 1 }, ...existingItems];
      localStorage.setItem('list', JSON.stringify(updatedItems));
    } else {
      updatedItems = [{ ...inputDetails, id: 1 }];
      localStorage.setItem('list', JSON.stringify(updatedItems));
    }
    setAllInputs(updatedItems);
    setInputDetails({ name: '', description: '', estimatedTime: '' });
  };

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex gap-96'>
        <button className='text-3xl border-4 border-black' onClick={() => setInputDetails({ type: 'text' })}>
          Add Text
        </button>
        <button className='text-3xl border-4 border-black' onClick={() => setInputDetails({ type: 'number' })}>
          Add Number
        </button>
      </div>
      {inputDetails.type === 'text' && (
        <>
          <div className='flex gap-10'>
            Text:
            <input
              id='labelInput'
              className='text-black  bg-indigo-300'
              value={inputDetails.label}
              onChange={(e) => {
                setInputDetails((prev) => ({ ...prev, label: e.target.value }));
              }}
              placeholder='Enter Text Label'
            />
          </div>
          <div className='flex gap-10'>
            Type:
            <input className='text-black  bg-indigo-300' value='Text' disabled />
            <button className='text-3xl' onClick={onHandleSubmit}>
              Add
            </button>
          </div>
        </>
      )}
      {inputDetails.type === 'number' && (
        <>
          <div className='flex gap-10'>
            Number:
            <input
              id='labelInput'
              className='text-black  bg-indigo-300'
              value={inputDetails.label}
              onChange={(e) => {
                setInputDetails((prev) => ({ ...prev, label: e.target.value }));
              }}
              placeholder='Enter Number Label'
            />
          </div>
          <div className='flex gap-10'>
            Type:
            <input className='text-black bg-indigo-300' value='Number' disabled />
            <button className='text-3xl' onClick={onHandleSubmit}>
              Add
            </button>
          </div>
        </>
      )}
    </div>
  );
}
