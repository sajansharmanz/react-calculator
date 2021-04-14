import "./screen.styles.css";

const Screen = (props) => {
    let {results} = props;
    return (
        <div className="calculator-screen">
            <p>{results}</p>
        </div>
    )
}

export default Screen;