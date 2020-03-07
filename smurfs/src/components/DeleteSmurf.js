import React, { useState } from "react"
import { REMOVING_SMURF } from "../actions/index"
import { connect } from "react-redux"
const DeleteSmurf = (props) => {
    const [id, setId] = useState();
    const [deleteItem, setDeleteItem] = useState()
    const submitHandler = (e) => {
        e.preventDefault();
        setDeleteItem(id);
        props.REMOVING_SMURF(deleteItem);
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <input onChange={e => {setId(e.target.value)}}placeholder="Delete item id#..."/>
                <button>Delete</button>
            </form>
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

export default connect(mapStateToProps, { REMOVING_SMURF })(DeleteSmurf);