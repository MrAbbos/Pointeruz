import {configureStore} from '@reduxjs/toolkit';
import api from './Middleware/api';

import Slice from './Slice'



export default configureStore({
    reducer:{
        Slice
    },
    middleware:[api]
})