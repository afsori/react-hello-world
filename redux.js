// ada 4 step yg musti difahami
// store => wadah untuk menampung state secara global agar bisa digunakan disemua komponen
// reducer => fungi yg berisi value. dimana value atau state hanya bisa di update di reducer. tidak ada fungsi lain yg dpt merubah store selain reducer. sehingga dgn mudah men trace fungsi mana yg merubah value di store. jadi lebih terpantau ketika komponen melakukan update ke store, karena setiap ada update yg dilakukan compnent, kita bisa memantau lewat reducer, karena fungsi untuk meng update store telah kita lakukan secara baku di reducer. reducer berupa function yg dpt merubah store
// dispatch atau action => proses pemanggilan sebuah intruksi yg disediakan reducer. atau proses pemanggilan reducer karena reducer tidak akan bekerja tanpa ada proses pemanggilan. action ini bisa disebut juga agen yg memiliki task list  yg bisa dilakukan . nah proses dispatching / action inilah proses pemanggilan task list tersebut.
// Subscribtion => proses pemanggilan store yg kita perlukan .
// itulah 4 proses didalam redux
const redux = require('redux');
// buat store
const createStore = redux.createStore;

// buat state default
const initialState = {
    value: 0,
    age: 17
}



// Reducer
const rootReducer = (state = initialState, action) => {
    // console.log(action);
    // if (action.type === 'ADD_AGE') {
    //     return {
    //         ...state,
    //         age: state.age + 1
    //     }
    // }

    // if (action.type === 'CHANGE_VALUE') {
    //     return {
    //         ...state,
    //         value: state.value + action.newvalue
    //     }
    // }
    // return state;

    // cara simple
    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value + action.newvalue
            }
        default:
            return state;
    }
}

// Store => tertuju ke reducer
const store = createStore(rootReducer);
console.log(store.getState());


// Subscription => ketika melakukan subscription, maka setiap kali ada perubahan pada store, maka subsription akan terpanggil . akan mendpaat notifikasi dari redux jika terjadi perubahan pada store.
store.subscribe(() => {
    console.log('store change :', store.getState());

})

// Dispatch / action => tertuju ke reducer atau memberikan intruksi ke reducer, tolong lakukan action add_age
store.dispatch({ type: 'ADD_AGE' })
store.dispatch({ type: 'CHANGE_VALUE', newvalue: 12 })
console.log(store.getState());




