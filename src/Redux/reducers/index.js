import { combineReducers } from "redux";

import PostLogin from "./auth/login";
import PostSignUp from "./auth/signup";
import GetTransactionHistory from './main/transactionHistory'
import GetTransferReceiver from "./main/receiverList";
import UserDetails from "./main/userDetails";
import PostProfilePicture from "./main/uploadProfile";
import PutPhoneNumber from "./main/changePhoneNumber";
import PutUserPassword from "./main/changePassword";
import PutUserPin from "./main/changePin";
import PostTopUp from "./main/topUp";
import PostTransaction from "./main/createTransaction";

const rootReducers = combineReducers({
    PostLogin,
    PostSignUp,
    UserDetails,
    PostProfilePicture,
    PutPhoneNumber,
    PutUserPassword,
    PutUserPin,
    GetTransactionHistory,
    GetTransferReceiver,
    PostTopUp,
    PostTransaction
})

export default rootReducers