import "./body.styles.css";

const Body = (props) => {
    let {children} = props;
    return(
        <div className="calculator-body">
            {children}
        </div>
    )
}

export default Body;