import actionCreator from '../index';
import { SET_AUTH_USER, SESSION } from "./actionTypes";
import Firebase from '../../../services/firebase';


export const setAuth = (authUser) => dispatch => dispatch({
    type:SET_AUTH_USER,
    auth:authUser
});
const sessionRequest =() => ({
    type:actionCreator.request(SESSION)
})
const sessionSuccess = () =>({
    type:actionCreator.succes(SESSION)
})
const sessionFail = () =>({
    type:actionCreator.fail(SESSION)
})


export const signIn = (email,password) => dispatch => {
    
    dispatch(sessionRequest());
    return Firebase.auth.signInWithEmailAndPassword(email,password)
        .then(user=> dispatch(sessionSuccess()))
        .catch(error => dispatch(sessionFail()))

}
export const signUp = (email,password) => dispatch => {
    dispatch(sessionRequest());
    return Firebase.auth.createUserWithEmailAndPassword(email, password)
        .then(user => dispatch(sessionSuccess()))
        .catch(error=> dispatch(sessionFail()))
}

export const signOut = () => dispatch => {
    dispatch(sessionRequest());
    return Firebase.auth.signOut()
    .then(
        user => dispatch(sessionSuccess())
    )
    .catch(error => dispatch(sessionFail()));
}