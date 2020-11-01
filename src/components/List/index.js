import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const List = ({currencies}) => {
    const currenciesJSX = currencies.map((currencie) => {
        return <li><button>{currencie.name}</button></li>
    });

    return (
        <ul className="list">
            {currenciesJSX}
        </ul>
    );
};

// Mise en place de proptypes pour le tableau d'objet.
List.PropTypes = {
    currencies: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            rate: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default List;