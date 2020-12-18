import path from 'path'
import Database from 'better-sqlite3'
import serialize from 'serialize-javascript'
import { globalOption } from "./globalOption.js";

export default class Timemachine {
    static globaloption = globalOption
    constructor(param, meta) {
        this.db = Database(Timemachine.globaloption.location)

        this.filename = meta.url
            .split("/")
            .splice(-1)[0]
            .toString()
            .replace(".js", "")
            .replace(".mjs", "")

        this.db.exec(`
            CREATE TABLE IF NOT EXISTS "${this.filename}"
            (
                "name"  TEXT NOT NULL UNIQUE,
                "value" BLOB
            );
        `)

    }
}