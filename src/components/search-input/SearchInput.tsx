import './SearchInput.scss';
import { useState, useEffect } from 'react';

type Prop = {
  preValue: string
  handleSubmit: Function
}

function SearchInput({ preValue, handleSubmit }: Prop) {
  const [value, setValue] = useState("")

  useEffect(() => {
    setValue(preValue)
  }, [preValue])

  const handleInputChange = (event: any) => {
    setValue(event.target.value)
  }
  return (
    <form className='search-input' onSubmit={(e) => handleSubmit(e, value)}>
      <input type="text" placeholder="8.8.8.8" value={value} onChange={handleInputChange} />
      <button type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" fill="white" /></svg>
      </button>
    </form>
  );
}

export default SearchInput;
