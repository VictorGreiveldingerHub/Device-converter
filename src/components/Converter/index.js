// == Import npm
import React, { useState } from 'react';

// == Import
import './styles.scss';
import currencies from 'src/data/currencies';


const Converter = () => {
  const [currencie, setCurrencies] = useState(currencies);
  console.log(currencie);
  
  return (
    <div id="todo">
      Hello
    </div>
  );
};

// == Export
export default Converter;
