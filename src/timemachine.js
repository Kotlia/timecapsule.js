import path from 'path'
import Database from 'better-sqlite3'
import serialize from 'serialize-javascript'
import { globalOption } from "./globalOption.js";

export default class Timemachine {
    static globaloption = globalOption
}