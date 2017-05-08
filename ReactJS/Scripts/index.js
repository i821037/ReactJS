var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Greeting = React.createClass({
    render: function () {
        return (React.createElement("button", { className: "btn btn-primary" }, this.props.Text));
    }
});
var MessageView = (function (_super) {
    __extends(MessageView, _super);
    function MessageView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageView.prototype.render = function () {
        return (React.createElement("p", null, this.props.message));
    };
    return MessageView;
}(React.Component));
var MessageView1 = React.createClass({
    render: function () {
        return (React.createElement("p", null, this.props.message));
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
        return (React.createElement("div", null,
            React.createElement(MessageView, { message: this.state.message }),
            React.createElement("p", null,
                React.createElement("button", { className: "btn btn-primary", onClick: this.onClick }, "Change Message"))));
    }
});
var Divider1 = React.createClass({
    render: function () {
        return (React.createElement("div", { className: "divider" },
            React.createElement("h2", null, this.props.children),
            " ",
            React.createElement("hr", null)));
    }
});
var Divider = (function (_super) {
    __extends(Divider, _super);
    function Divider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Divider.prototype.render = function () {
        var id = this.props.id;
        var style = {
            color: '#999'
        };
        return (React.createElement("div", { id: id, className: "divider", style: style },
            React.createElement("h2", null, this.props.children),
            " ",
            React.createElement("hr", null)));
    };
    return Divider;
}(React.Component));
ReactDOM.render(React.createElement(RandomMessage, null), document.getElementById('greeting-div'));
ReactDOM.render(React.createElement(Divider, { id: "div1" }, "Nothing"), document.getElementById('content'));
//# sourceMappingURL=index.js.map