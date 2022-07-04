import React, { useState } from 'react'

const SimpleShowHide = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow((showState) => !showState);
  };

  return (
    <div>
      <div>Saya sedang {show ? "muncul" : "sembunyi"}</div>
      <button data-testid="hideShow" onClick={handleToggle} type="button">{show ? "Sembunyikan" : "Munculkan"}</button>
    </div>
  )
}

export default SimpleShowHide