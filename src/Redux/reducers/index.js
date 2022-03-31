import { combineReducers } from "redux";

import PostLogin from "./auth/login";
import PostSignUp from "./auth/signup";
import GetTransactionHistory from './main/transactionHistory'
import GetTransferReceiver from "./main/receiverList";
import UserDetails from "./main/userDetails";
import PostTransaction from "./main/createTransaction";

const rootReducers = combineReducers({
    PostLogin,
    PostSignUp,
    UserDetails,
    GetTransactionHistory,
    GetTransferReceiver,
    PostTransaction
})

export default rootReducers