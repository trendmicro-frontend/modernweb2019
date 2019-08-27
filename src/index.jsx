import React from 'react';
import ReactDOM from 'react-dom';
import FinalFormTest from './FinalFormTest';

const handleSubmit = values => {
    window.alert(JSON.stringify(values, 0, 2));
};

const App = () => {
    return (
        <FinalFormTest
            fieldCount={1000}
            onSubmit={handleSubmit}
        />
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
