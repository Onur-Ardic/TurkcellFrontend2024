function InputArea(props) {
    return (
        <div>
            <input type="text" placeholder="Title" spellCheck="false" onChange={props.titleChangeFunc} value={props.title}></input>
            <input type="text" placeholder="Content" spellCheck="false" onChange={props.contentChangeFunc} value={props.content}></input>
            <button onClick={props.saveItem}>Save</button>
        </div>
    )
}

export default InputArea