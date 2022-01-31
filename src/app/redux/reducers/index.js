import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import storage from "redux-persist-indexeddb-storage";
import authReducer from "../features/authSlice";
import messagingReducer from "../features/messageSlice";

const persistenceConfig = {
  key: "root",
  storage: storage("crx"),
  //   blacklist: ["messenger"],
};

const combined = combineReducers({
  auth: authReducer,
  messenger: messagingReducer,
});

const persisted = persistReducer(persistenceConfig, combined);

export default persisted;
