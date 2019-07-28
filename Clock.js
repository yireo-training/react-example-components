import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = { time: this.getCurrentTime() };
    }

    getCurrentTime() {
        return new Date().toLocaleTimeString()
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.time}.</h2>
            </div>
        );
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: this.getCurrentTime() }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default Clock;
