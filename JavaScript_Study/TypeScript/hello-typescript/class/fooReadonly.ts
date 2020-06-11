class FooReadOnly {
    private readonly MAX_LEN: number = 5;
    private readonly MSG: string ;

    constructor() {
        this.MSG = 'hello';
    }

    log(){
        // this.MAX_LEN = 10;
        // this.MSG = 'Hi';

        console.log(`MAX_LEN: ${this.MAX_LEN}`);
        console.log(`MSG: ${this.MSG}`);
    }
}