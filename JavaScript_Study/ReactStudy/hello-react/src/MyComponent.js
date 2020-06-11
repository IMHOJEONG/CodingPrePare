import React from 'react';
import PropTypes from 'prop-types';

// const MyComponent = props => {
//     const { name, children} = props;
// return <div>안녕하세요, 제 이름은 {name}<br/>
// children 값은 {children}
// </div>
// };
const MyComponent = ({name, favoriteNumber, children}) => {
return <div>{name}<br/>{children}<br/>
{favoriteNumber}</div>
}

MyComponent.defaultProps = {
    name : "Test"
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;