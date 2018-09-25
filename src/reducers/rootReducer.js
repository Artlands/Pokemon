const initState = {
  posts:[
    {id:'1', title:'test1', body:'bodytest1'},
    {id:'2', title:'test2', body:'bodytest2'},
    {id:'3', title:'test3', body:'bodytest3'}
  ]
}
const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPost = state.posts.filter(post => action.id !== post.id);
    return {
      ...state,
      posts: newPost
    }
  }
  return state;
}

export default rootReducer;