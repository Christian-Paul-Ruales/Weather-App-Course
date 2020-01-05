import React from 'react';
import PropTypes from 'prop-types';

const Location = ({city}) => {
    //destructuring ES6

   // const city = props.city;

   /*const {city} = props;
    poniendo como parametro (props)
   */
  /**
   * const [x,...y] = ['a','b','c','d'];
   * x=a
   * y=['b','c','d']
   */
   
    return (
        <div>
            <h1>{city}</h1>
        </div>
    );

};

Location.propTypes = {
    city: PropTypes.string.isRequired,
};


export default Location;