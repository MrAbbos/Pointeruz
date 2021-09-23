import axios from 'axios'

const api =({dispatch})=>(next)=>(action)=>{
    if(action.type !=="api/apiCall" ){
        next(action)
        return 
    }
    next(action)

    const { url, method, onSuccess, onFail } = action.payload
    axios({
        baseURL:"https://pointer-register.herokuapp.com",
        url,
        method,
        // data
    }).then(res=>{
        dispatch({
            type:onSuccess,
            payload:res.data
        })
    })
    .catch(err=>{
        dispatch({
            type:onFail,
            payload:err.date
        })
    })
}

export default api