import { all } from "redux-saga/effects";
import SkipSaga from "./Skip";

export default function* rootSaga() {
  yield all([SkipSaga()]);
}
