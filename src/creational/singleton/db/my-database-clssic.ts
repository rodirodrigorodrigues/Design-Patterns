export class MyDatabaseClassic {
  private static instance: MyDatabaseClassic | null = null;

  private constructor() { }

  public static getInstance(): MyDatabaseClassic {
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