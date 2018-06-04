/**
 * Datetimer class file
 *
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */

import moment from "moment";

export abstract class Datetimer {

    /**
     * 
     */
    protected date: Date;

    constructor() {
        this.date = new Date();
    }

    public getCurrentTimestamp(): number {
        return moment(this.date).unix();
    }

    public load(datetime?: string) {
        return moment(datetime);
    }
    
    /**
     * 
     * @param datetime 
     */
    public abstract setCurrentDatetime(datetime: string): void;
}