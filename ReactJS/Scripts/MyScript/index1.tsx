var Greeting = React.createClass({
    render: function () {
        return (
            <button className="btn btn-primary">{this.props.Text}</button>
        )
    }
});
interface IMyComponentProps {
    message: string
}

class MessageView extends React.Component<IMyComponentProps, {} > {
    public render() {
        return (
            <p>{this.props.message}</p>
        )
    }
}
var MessageView1 = React.createClass({
    render: function () {
        return (
            <p>{this.props.message}</p>
        )
    }
});

var RandomMessage = React.createClass({
    getInitialState: function () {
        return { message: 'Hello' };
    },
    onClick: function () {
        var messages = ['Hello, World', 'Hello, Planet', 'Hello, Universe'];
        var randomMessage = messages[Math.floor((Math.random() * 3))];

        this.setState({ message: randomMessage });
    },
    render: function () {
        return (
            <div>
                <MessageView message={this.state.message} />
                <p><button className="btn btn-primary" onClick={this.onClick}>Change Message</button></p>
            </div>
        )
    }
});

var Divider1 = React.createClass({
    render: function() {
        return (
            <div className="divider">
                <h2>{this.props.children}</h2> <hr />
            </div>
        )
    }
});
interface IMyComponentProps1 {
    id: string
}
class Divider extends React.Component<IMyComponentProps1, {}>
{
    public render() {
        var id = this.props.id;
        var style = {
            color: '#999'
        };
        return (
            <div id={id} className="divider" style={style}>
                <h2>{this.props.children}</h2> <hr />
            </div>
        )
    }
}

ReactDOM.render(
    <RandomMessage />,
    document.getElementById('greeting-div')
);

ReactDOM.render(
    <Divider id="div1">Nothing</Divider>,
    document.getElementById('content')
);