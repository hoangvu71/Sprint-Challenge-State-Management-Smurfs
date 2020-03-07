import axios from "axios"

export const FETCHING_SMURF_START = () => dispatch => {
    dispatch( { type: 'FETCHING_SMURF_START' });
    axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
        console.log("This is the res back from GET:", res);
        dispatch( { type: 'FETCHING_SMURF_SUCCESS', payload: res.data} )
    })
    .catch(err => console.log("Error encountered", err))
}

export const POSTING_SMURF_START = (state) => dispatch => {
    axios
    .post("http://localhost:3333/smurfs", {name: state.name, age: state.age, height: state.height})
    .then(res => {console.log("post success", res)})
    .catch(err => {console.log("Error encountered", err)})
}

export const REMOVING_SMURF = (item) => dispatch => {
    axios
    .delete(`http://localhost:3333/smurfs/${item}`)
    .then(res => {console.log(res)})
    .catch(err => console.log(err))
}