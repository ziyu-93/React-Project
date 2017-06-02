import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(logger)
)

// 写法一：名称相同，参数不同
// { type: 'FETCH_POSTS' }
// { type: 'FETCH_POSTS', status: 'error', error: 'Oops' }
// { type: 'FETCH_POSTS', status: 'success', response: { ... } }

// 写法二：名称不同
// { type: 'FETCH_POSTS_REQUEST' }
// { type: 'FETCH_POSTS_FAILURE', error: 'Oops' }
// { type: 'FETCH_POSTS_SUCCESS', response: { ... } }
