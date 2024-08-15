import * as api from '../api'
 export const getPosts = () => async(dispatch) =>{
  try{
    const {data} = await api.fetchPosts()

    dispatch({type:'FETCH-ALL',payload:data})
  }catch(err)
  {
    console.log(err.message)
  }

 }

 export const createPost = (post) => async(dispatch) =>{
  try{
    const {data} = await api.createPost(post)

    dispatch({type:'CREATE',payload:data})
  }catch(err)
  {
    console.log(err.message)
  }

 }

//  export const updatePost = (id,post) => async(dispatch) =>{
//   try{
//     const {data} = await api.updatePost(id)

//     dispatch({type:'UPDATE',payload:data})
//   }catch(err)
//   {
//     console.log(err.message)
//   }

//  }
export const updatePost = (id, post) => async (dispatch) => {
  try {
    // Send the post data to the API
    const { data } = await api.updatePost(id, post);
    
    // Dispatch the action with the updated post data
    dispatch({ type: 'UPDATE', payload: data });
  } catch (err) {
    console.error('Error updating post:', err.message);
  }
};

 export const deletePost = (id) => async(dispatch) =>{
  try{
    await api.deletePost(id)

    dispatch({type:'DELETE',payload:id})
  }catch(err)
  {
    console.log(err.message)
  }

 }


 export const likePost = (id) => async(dispatch) =>{
  try{
    const {data} = await api.likePost(id)

    dispatch({type:'LIKE',payload:data})
  }catch(err)
  {
    console.log(err.message)
  }

 }
