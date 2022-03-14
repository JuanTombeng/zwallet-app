import { combineReducers } from "redux";

import PostLogin from "./auth/login";
import PostSignUp from "./auth/signup";

const rootReducers = combineReducers({
    PostLogin,
    PostSignUp
})

export default rootReducers