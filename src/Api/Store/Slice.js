import {createSlice} from '@reduxjs/toolkit';
import {apiCall} from './api';

const slice =createSlice({
    name:"Registration",
    initialState:{
        course:[],
        login:[],
        teacher:[]
    },
    reducers:{
        courseGet:(state,action)=>{
            state.course = action.payload
        },
        TeacherGet:(state,action)=>{
            state.teacher=action.payload
        }
    }
})

export const getCourse = (data) => apiCall({
    url:"/api/admin/get-course",
    method:"get",
    // data,
    onSuccess: slice.actions.courseGet.type
})

// export const getTeacher = (data) => apiCall({
//     url:"/api/admin/get-teacher/page={page}&&size={size}?page=0&size=10",
//     method:"get",
//     // data,
//     onSuccess: slice.actions.TeacherGet.type
// })



export default slice.reducer