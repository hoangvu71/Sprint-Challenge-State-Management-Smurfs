import React, {useState} from "react"
import { POSTING_SMURF_START } from "../actions/index"
import { connect } from "react-redux"

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const handleChanges = updatedValue => {
        setValue(updatedValue)
    };
    return [value, setValue,handleChanges];
}
const NewSmurf = (props) => {
    const [smurf, setSmurf] = useState( {} )
    const [name, setName, handleName] = useInput('');
    const [age, setAge, handleAge] = useInput('');
    const [height, setHeight, handleHeight] = useInput('');
    const submitHandler = (event) => {
        event.preventDefault()
        setSmurf( {name: name, age: age, height: height} );
        props.POSTING_SMURF_START(smurf)
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <input onChange={(event) => handleName(event.target.value)}/>
                <input onChange={(event) => handleAge(event.target.value)}/>
                <input onChange={(event) => handleHeight(event.target.value)}/>
                <button>Submit</button>
            </form>
                <div>{smurf.name}</div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      error: state.error,
      smurf: state.smurf
    }
  }
  
  export default connect(mapStateToProps, { POSTING_SMURF_START })(NewSmurf);