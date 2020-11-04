import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// Dans Result on veut récuperer :
//  - la valeur de la device cliqué,
//  - le nom de la device cliqué.

const Result = ( {value, currencies, inputValue} ) => {

    const multiplier = inputValue * value;

    return (
        <div className="result">
            <span className="value">{multiplier}</span>
            <p className="description">{currencies}</p>
        </div>
    );
};

Result.propTypes = {
    value: PropTypes.number.isRequired,
    currencies: PropTypes.string.isRequired,
    inputValue: PropTypes.number.isRequired,
};

export default Result;