//Action 就是View 发出的通知，表示State应该要发生变化了。
const action = {
  type: 'ADD_TODO',
  payload: 'Learn Redux'
}


//Action Creator
const ADD_TODO = '添加 TODO';
//View 要发送多少信息，就会有多少种Action
//所以创建一个Action 方法，改变其携带信息就是一个Action;
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
const action = addTodo('Learn Redux')


//store.dispatch();是View 发出 Action 的唯一方法；
import { createStore } from 'redux';
const store = createStore(fn);

store.dispatch({
  type: 'ADD_TODO',
  payload: 'Learn Redux'
})


//结合 Action Creator 和 store.dispatch()
store.dispatch(addTodo('Learn Redux'))


//Reducer
//Store 收到Action 以后，必须给出一个新的State,这样View 才会发生变化。这种State的计算过程就叫做 Reducer
//Reducer 是一个函数。
const reducer = function(state, action) {
  return new_state;
};
//实例
const defaultState = 0;
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    default:
      return state;
  }
};
const state = reducer(1, {
  type: 'ADD',
  payload: 2
})


//store.dispatch 方法会触发Reducer 的自动执行。为此需要将Reducer 函数作为参数，传入store中。
import { createStore } from 'redux';
const store = createStore(reducer);

//store.subscribe(); 方法设置监听函数，一旦State发生变化，就自动执行这个函数。
import { createStore } from 'redux';
const store = createStore(reducer);
store.subscribe(listener);


//reducer 的拆分。
//Redux 提供了一个combineReducers 方法，用于Reducer的拆分。
import { combinReducers } from 'redux';
const chatReducer = combinReducers({
  chatLog,
  statusMessage,
  userName
})
