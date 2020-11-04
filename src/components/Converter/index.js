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
  const [inputValue, setInputValue] = useState(1);

  const handleClick = (currenciesName, currenciesRate) => {
    setCurrencies(currenciesName);
    setValue(currenciesRate);
    return currenciesName;
  };

  const handleChangeInput = (valueInput) => {
    setInputValue(valueInput);
  };

  return (
    <div id="todo">
      <Form 
        value={inputValue} 
        handleChangeInput={handleChangeInput}
      />
      <List 
        initialCurrencies={initialCurrencies} 
        handleClick={handleClick}
      />
      <Result 
        value={value} 
        currencies={currencies}
        inputValue={inputValue}
      />
    </div>
  );
};

// == Export
export default Converter;
