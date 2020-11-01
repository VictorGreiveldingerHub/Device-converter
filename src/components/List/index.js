import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const List = ({currencies}) => {
    const currenciesJSX = currencies.map((currencie) => {
        return <li>{currencie.name}</li>
    });

    return (
        <ul className="list">
            {currenciesJSX}
        </ul>
    );
};

List.PropTypes = {
    currencies: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            rate: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default List;