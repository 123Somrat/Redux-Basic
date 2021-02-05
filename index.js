const redux = require('redux');

//console.log(redux)


//state
const initstate = {
    num: 0,
    name: "somrat",
    wifename: "ela"

}


//reducer
//reudcer is function 
//reducer takes two perametar first one is current state and second one in action
const rootreducer = (currentstate = initstate, action) => {
    if (action.type === "INC_NUM") {
        return {
            ...currentstate,
            num: currentstate.num + 1,

        }


    }
    if (action.type === "ADD_NUM") {
        return {
            ...currentstate,
            num: currentstate.num + action.value


        }


    }

    return currentstate
}


//creating store

const store = redux.createStore(rootreducer);

console.log(store.getState());


//Subscribe
store.subscribe(() => {
    console.log("[subscribe]", store.getState());


})



//Dispatching Action

store.dispatch({
    type: "INC_NUM"


});


store.dispatch({

    type: "ADD_NUM",
    value: 34


})

