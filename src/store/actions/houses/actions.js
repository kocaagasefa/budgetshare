import actionCreator from '../';
import { GET_HOUSES, ADD_HOUSE,  } from "./actionTypes";
import Firebase from '../../../services/firebase';

const getHousesRequest =() => ({
    type:actionCreator.request(GET_HOUSES)
})
const getHousesSuccess = (data) =>({
    type:actionCreator.succes(GET_HOUSES)
})
const getHousesFail = () =>({
    type:actionCreator.fail(GET_HOUSES)
})

export const getHouses = (callback) => dispatch => {
    dispatch(getHousesRequest());
    return Firebase.firestore.collection("houses").onSnapshot(qs => {
        const data = qs.docs.map(doc => {return {id:doc.id,...doc.data()}});
        dispatch(getHousesSuccess(data))
        return callback(data);
    })
    //TODO: continue
}

const addHouseRequest =() => ({
    type:actionCreator.request(ADD_HOUSE)
})
const addHouseSuccess = (data) =>({
    type:actionCreator.succes(ADD_HOUSE)
})
const addHouseFail = () =>({
    type:actionCreator.fail(ADD_HOUSE)
})

export const addHouse = (name, description) => dispatch => {
    dispatch(addHouseRequest());
    const house = {
        name,
        description,
        owner:Firebase.auth.currentUser.uid,
        members:[
            {uid:Firebase.auth.currentUser.uid, type:"admin"}
        ]
    }
    return Firebase.firestore.collection("houses").add(house)
    .then(data=> {
        console.log(data);
        dispatch(addHouseSuccess())
        return true;
    })
    .catch(error => {
        dispatch(addHouseFail());
    })
}