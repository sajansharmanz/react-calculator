import Button from "../button/button.component"

const ButtonContainer = (props) => {
   let {clickFn} = props;
    return (
        <div className="calculator-button-container">
            <Button name="(" clickFn={clickFn} />
            <Button name=")" clickFn={clickFn} />
            <Button name="DEL" clickFn={clickFn} />
            <Button name="C" clickFn={clickFn} />

            <Button name="1" clickFn={clickFn} />
            <Button name="2" clickFn={clickFn} />
            <Button name="3" clickFn={clickFn} />
            <Button name="+" clickFn={clickFn} />

            <Button name="4" clickFn={clickFn} />
            <Button name="5" clickFn={clickFn} />
            <Button name="6" clickFn={clickFn} />
            <Button name="-" clickFn={clickFn} />

            <Button name="7" clickFn={clickFn} />
            <Button name="8" clickFn={clickFn} />
            <Button name="9" clickFn={clickFn} />
            <Button name="*" clickFn={clickFn} />

            <Button name="." clickFn={clickFn} />
            <Button name="0" clickFn={clickFn} />
            <Button name="=" clickFn={clickFn} />
            <Button name="/" clickFn={clickFn} />
        </div>
    )
}

export default ButtonContainer;