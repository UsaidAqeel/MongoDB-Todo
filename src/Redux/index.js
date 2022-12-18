import { configureStore } from "@reduxjs/toolkit";
import  SignUp from "./Slicer";
import GetUserData  from "./GetUserSlicer";
import UpdateUser from "./UpdateUserSlicer";
import  LoginUser  from "./LoginUserSlicer";

const Store = configureStore({
    reducer : {
       SignUpuser  : SignUp,
       GetUser : GetUserData,
       UpdateUser : UpdateUser,
       LoginUser
    }
})

export {Store}