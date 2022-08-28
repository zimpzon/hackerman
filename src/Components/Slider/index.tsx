interface SliderProps {
    onChange: (newValue: number) => void;
}

function Slider(props: SliderProps): JSX.Element {
    return (<>
        <div className="slidecontainer">
            <input type="range" min="1" max="100" value="50" className="slider" id="myRange" onChange={(e) =>  props.onChange(parseInt(e.currentTarget.value))}/>
        </div></>);
}

export default Slider;