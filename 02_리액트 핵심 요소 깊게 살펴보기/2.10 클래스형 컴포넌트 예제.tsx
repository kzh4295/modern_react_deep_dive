import React from 'react';

interface SampleProps {
    required?: boolean;
    text: string;
}

interface SampleState {
    count: number;
    isLimited?: boolean;
}

class SampleComponent extends React.Component<SampleProps, SampleState> {
    constructor(props: SampleProps) {
        super(props);
        this.state = {
            count: 0,
            isLimited: false
        };
    }

    public render() {
        const {required, text} = this.props;
        const {count, isLimited} = this.state;

        return (
            <div>
                <h2>Sample Component</h2>
                <div>{required ? '필수' : '필수 아님'}</div>
                <div>{text}</div>
                <div>Count: {count}</div>
                <div>isLimited: {isLimited ? 'Yes' : 'No'}</div>
                <button onClick={this.handleClick}>증가</button>
            </div>
        );
    }

    private handleClick = () => {
        const newValue = this.state.count + 1;
        this.setState({count: newValue, isLimited: newValue >= 10});
    }
}

export default SampleComponent;
