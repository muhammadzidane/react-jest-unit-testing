import React, { useState } from 'react'

const ComponentUserEvent = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <p>Anda mengetik sebuah {value}</p>
      <input data-testid="inputValue" placeholder="input value" value={value} onChange={(event) => setValue(event.target.value)} />
      <button data-testid="submit" onClick={onSubmit} type="button">Submit</button>
    </div>
  )
}

export default ComponentUserEvent