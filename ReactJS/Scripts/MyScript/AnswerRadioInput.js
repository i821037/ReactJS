var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AnswerRadioInput = (function (_super) {
    __extends(AnswerRadioInput, _super);
    function AnswerRadioInput(props) {
        var _this = _super.call(this, props) || this;
        // getInitialState()
        var id = _this.props.id ? _this.props.id : 'radio-11';
        var checked = !!_this.props.checked;
        _this.state = { id: id, checked: checked, name: id }; // initial 用 this.state =  ? 其他地方用this.setState ?
        return _this;
    }
    AnswerRadioInput.prototype.handleChanged = function (e) {
        var checked = e.target.checked;
        this.setState({ checked: checked });
        if (checked) {
            this.props.onChanged(this.props.value);
        }
    };
    AnswerRadioInput.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "radio" },
            React.createElement("label", { htmlFor: this.state.id },
                React.createElement("input", { type: "radio", name: this.props.name, id: this.props.id, value: this.props.value, checked: this.state.checked, onChange: function (e) { return _this.handleChanged(e); } }),
                this.props.label)));
    };
    return AnswerRadioInput;
}(React.Component));
//http://stackoverflow.com/questions/37282159/default-property-value-in-react-component-using-typescript 
AnswerRadioInput.defaultProps = {
    id: null,
    checked: false
};
//# sourceMappingURL=AnswerRadioInput.js.map