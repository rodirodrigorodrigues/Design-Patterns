export class MyDatabaseClassic {
    static instance = null;
    constructor() { }
    static getInstance() {
        if (this.instance === null) {
            this.instance = new MyDatabaseClassic();
        }
        return this.instance;
    }
}
// Usage
const db1 = MyDatabaseClassic.getInstance();
const db2 = MyDatabaseClassic.getInstance();
console.log(db1 === db2); // true
//# sourceMappingURL=my-database-clssic.js.map