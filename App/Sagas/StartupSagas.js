import { put, select } from "redux-saga/effects";
import { is } from "ramda";

// process STARTUP actions
export function* startup(action) {
  if (__DEV__ && console.tron) {
    console.tron.log("Startup app");
  }
}
