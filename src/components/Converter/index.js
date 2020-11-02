// == Import npm
import React, {useState} from 'react';

// == Import
import Form from 'src/components/Form';
import List from 'src/components/List';
import Result from 'src/components/Result';
import './styles.scss';
import initialCurrencies from 'src/data/currencies';



const Converter = () => {
  const [currencies, setCurrencies] = useState('United States Dollar');
  const [value, setValue] = useState(1.094103);

  const handleClick = (currenciesName) => {
    setCurrencies(currenciesName);
    return currenciesName;
  };


  return (
    <div id="todo">
      <Form />
      <List initialCurrencies={initialCurrencies} handleClick={handleClick}/>
      <Result value={value} currencies={currencies} initialCurrencies={initialCurrencies} />
    </div>
  );
};

// == Export
export default Converter;
