import React from 'react';
import ReactLoading from 'react-loading';
 
const Example = ({ type, color }) => (
    <ReactLoading className="flex z-40" type={type} color={color} height={667} width={375} />
);
 
export default Example;