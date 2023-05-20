const inputText = (props) =>{

    return <>
         <label htmlFor="" className="align-self-start">
          {props.titulo}
        </label>
        <input
          type="text"
          className="bg-light border border-none text-dark p-2 mb-3"
          placeholder={props.placeholder}
          required={props.required}
        />
    </>
}

export default inputText;