// == Import npm
import React from 'react';

// == Import
import Form from 'src/components/Form';
import List from 'src/components/List';
import Result from 'src/components/Result';
import './styles.scss';
import currencies from 'src/data/currencies';



class Converter extends React.Component {
  state={
    currencies,
  };
  
  render() {
    console.log(currencies);
    return (
      <div id="todo">
        <Form />
        <List />
        <Result />
      </div>
    );
  };
};


// == Export
export default Converter;
