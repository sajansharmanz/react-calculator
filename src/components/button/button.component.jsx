import "./button.styles.css";

const Button = (props) => {
    let {name, clickFn} = props;
    return (
        <button className="calculator-button" name={name} onClick={e => clickFn(e.target.name)}>{name}</button>
    )
}

export default Button;