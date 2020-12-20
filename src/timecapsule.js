import path from 'path'
import Database from 'better-sqlite3'
import serialize from 'serialize-javascript'
import { globalOption } from "./globalOption.js";

export default class Timecapsule {
    static globaloption = globalOption
    constructor(initialState, meta) {
        this.db = Database(Timecapsule.globaloption.location)

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
            Object.entries(initialState).forEach(it => {
                global[it[0]] = eval(`(${rows.filter(_ => _.name === it[0])[0].value})`)
            })
        } else {
            Object.entries(initialState).forEach(it => {
                global[it[0]] = it[1]
            })
        }

        const stmt = this.db.prepare(`INSERT OR REPLACE INTO "${this.filename}" VALUES (?, ?)`)

        setInterval(() => {
            Object.entries(global).forEach(it => {
                if (!["global",
                    "clearInterval",
                    "clearTimeout",
                    "clearImmediate",
                    "setInterval",
                    "setTimeout",
                    "queueMicrotask",
                    "setImmediate"
                ].includes(it[0])) {
                    stmt.run(it[0], serialize(it[1]))
                }
            }, Timecapsule.globaloption.interval)
        })

    }
}