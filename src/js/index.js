import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/core.scss';

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello React!</h1>
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);