// == Import npm
import React, {useState} from 'react';
import { Container } from 'semantic-ui-react';

// == Import
import Form from 'src/components/Form';
import List from 'src/components/List';
import Result from 'src/components/Result';
import initialCurrencies from 'src/data/currencies';

import './styles.scss';
import 'semantic-ui-css/semantic.min.css';

const Converter = () => {
  const ROUNDED = 100;

  const [currencies, setCurrencies] = useState('United States Dollar');
  const [value, setValue] = useState(Math.round(1.094103 * ROUNDED) / ROUNDED);
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
    <Container 
      id="todo"
      fluid
    >
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
    </Container>
  );
};

// == Export
export default Converter;
