import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials ,{rejectWithValue})=>{
        try{
const response = await axios.post("https://reqres.in/api/login",
    credentials,{
        headers:{
        "x-api-key": "reqres-free-v1"
        }
    }
);
localStorage.setItem("token",response.data.token);
return response.data;

        }catch(error){
            return rejectWithValue("Invalid credentails");

        }
    }
);

/* const authSlice = createSlice({
    name : "auth",
    initialState : {
        token : localStorage.getItem("token")||null,
        status : "idle" ,
        error : null,
    },
    reducers:{
        logout:(state)=>{
            state.token = null;
            localStorage.removeItem("token");

        },
    },

    extraReducers:(builder) => {
        builder
.addCase(loginUser.pending, (state) => {
            state.status = "loading"
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.status = "succeded";
            state.token = action.payload.token;
            state.error = null;

        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.status = "failed",
            state.error = action.payload;

        });
    },
}); */


const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },  
  reducers: {
    login: (state) => { state.isLoggedIn = true },
    logout: (state) => { state.isLoggedIn = false }
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;