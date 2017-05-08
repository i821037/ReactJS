var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AnswerMultipleChoiceQuestion = (function (_super) {
    __extends(AnswerMultipleChoiceQuestion, _super);
    function AnswerMultipleChoiceQuestion(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { id: "mmm", value: _this.props.value };
        return _this;
    }
    AnswerMultipleChoiceQuestion.prototype.handleChanged = function (value) {
        this.setState({ value: value });
        //this.props.onCompleted(value);
    };
    AnswerMultipleChoiceQuestion.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "form-group" },
            React.createElement("label", { htmlFor: this.state.id }, this.props.label),
            React.createElement("div", { id: this.state.id },
                React.createElement(AnswerRadioInput, { name: "bbb", label: "男", value: "1", onChanged: function (e) { return _this.handleChanged(e); } }),
                React.createElement(AnswerRadioInput, { name: "bbb", label: "女", value: "2", checked: true, onChanged: function (e) { return _this.handleChanged(e); } }))));
    };
    return AnswerMultipleChoiceQuestion;
}(React.Component));
// 先前使用interface宣告 React.PropTypes.string 不能用...，也能這樣寫，但是有作用嗎？看來沒用
AnswerMultipleChoiceQuestion.propTypes = {
    value: React.PropTypes.string,
    choice: React.PropTypes.array.isRequired,
    onCompleted: React.PropTypes.func.isRequired
};
//# sourceMappingURL=AnswerMultipleChoiceQuestion.js.map