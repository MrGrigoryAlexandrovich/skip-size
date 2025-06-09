import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchSkips,
  fetchSkipsFailed,
  fetchSkipsSuccess,
} from "../reducers/Skip";
import { apiFetchSkips } from "../../api/Skip";

function* handleOnFetchSkips() {
  const url = "/skips/by-location?postcode=NR32&area=Lowestoft";

  try {
    // We use '@ts-ignore' here because without a proper return type annotation on the generator function,
    // the 'yield' expression implicitly results in an 'any' type, causing a TypeScript error (ts7057).
    // Typically, in Redux Saga, it's common to destructure the response as `const { data } = yield call(...)`
    // to get the data payload directly and avoid this issue when the API returns an object with a `data` property.
    // @ts-ignore
    const data = yield call(apiFetchSkips, { url });
    yield put(fetchSkipsSuccess(data));
  } catch (e) {
    yield put(fetchSkipsFailed(e)); // TODO handle error
  }
}

function* SkipSaga() {
  yield takeLatest(fetchSkips, handleOnFetchSkips);
}

export default SkipSaga;
