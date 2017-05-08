interface IAnswerRadioInputProps {
    id?: string;
    name: string;
    label: string;
    value: string;
    checked?: boolean;
    onChanged?: (e: any) => void;
}
interface IAnswerRadioInputState {
    id: string;
    checked: boolean;
    name: string;
}
class AnswerRadioInput extends React.Component<IAnswerRadioInputProps, IAnswerRadioInputState>
{
    //http://stackoverflow.com/questions/37282159/default-property-value-in-react-component-using-typescript 
    static defaultProps: Partial<IAnswerRadioInputProps> = { // 不加Partial也可以
        id: null,
        checked: false
    };
    constructor(props: IAnswerRadioInputProps) {
        super(props);
        // getInitialState()
        var id = this.props.id ? this.props.id : 'radio-11';
        var checked = !!this.props.checked;
        this.state = { id: id, checked: checked, name:id }; // initial 用 this.state =  ? 其他地方用this.setState ?
    }
    public handleChanged(e: any): void {
        var checked = e.target.checked;
        this.setState({ checked: checked });
        if (checked) {
            this.props.onChanged(this.props.value);
        }
    }
    render() {
        return (
            <div className="radio">
                <label htmlFor={this.state.id} >
                    <input type="radio" name={this.props.name} id={this.props.id} value={this.props.value} checked={this.state.checked} onChange={e => this.handleChanged(e)} />
                    {this.props.label}
                </label>
            </div>
        )
    }
}
