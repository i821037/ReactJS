class AnswerMultipleChoiceQuestion extends React.Component<any, any>{
    // 先前使用interface宣告 React.PropTypes.string 不能用...，也能這樣寫，但是有作用嗎？看來沒用
    static propTypes = {
        value: React.PropTypes.string,
        choice: React.PropTypes.array.isRequired,
        onCompleted: React.PropTypes.func.isRequired
    };
    constructor(props: any) {
        super(props);
        this.state = { id: "mmm", value : this.props.value };
    }
    handleChanged(value) {
        this.setState({ value: value });
        //this.props.onCompleted(value);
    }
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.state.id}>{this.props.label}</label>
                <div id={this.state.id}>
                    <AnswerRadioInput name="bbb" label="男" value="1" onChanged={e => this.handleChanged(e)} />
                    <AnswerRadioInput name="bbb" label="女" value="2" checked onChanged={e => this.handleChanged(e)} />
                </div>
            </div>
        );
    }

}