import React from 'react';

const Form = props => {
    return (
        <form onSubmit={props.getText}>
            <input type="text" name="racName" />
            <button>Search</button>
        </form>
    )
}

export default Form;