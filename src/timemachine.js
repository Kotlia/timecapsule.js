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

        const rows = this.db.prepare(`
            SELECT * FROM "${this.filename}"
        `).all()

        if (rows.length > 0) {
            Object.entries(param).forEach(it => {
                global[it[0]] = eval(`(${rows.filter(_ => _.name === it[0])[0].value})`)
            })
        } else {
            Object.entries(param).forEach(it => {
                global[it[0]] = it[1]
            })
        }

    }
}