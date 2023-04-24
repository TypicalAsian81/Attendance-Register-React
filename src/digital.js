import React from 'react';
import { useState } from 'react';
import QRCode from 'react-qr-code';
import Styles from './digital.module.css';
  
function Digital() {
  const [value, setValue] = useState();
  const [back, setBack] = useState('#FFFFFF');
  const [fore, setFore] = useState('#000000');
  const [size, setSize] = useState(256);
  
  return (
    <div className="App">
      <center>
        <br />
        <br />
        <input
          className='qr-input'
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter URL"
        />
        <div className='qr'>
        {value && (
          <QRCode
            title="NITT"
            value={value}
          />
        )}
        </div>
      </center>
    </div>
  );
}
  
export default Digital;