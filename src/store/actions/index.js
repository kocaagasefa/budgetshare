export default actionTypeCreate ={
    request : (actionType) => actionType+"_REQUEST",
    fail : (actionType) => actionType+"_FAIL",
    succes : (actionType) => actionType+"_SUCCESS"
}