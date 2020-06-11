interface ITodo {
    id:number;
    content: string;
    completed: boolean;
}

class Todo3 implements ITodo {
    constructor(
        public id: number,
        public content: string,
        public completed: boolean
    ) {}
}

const todo3 = new Todo3(1, 'TypeScript', false);

console.log(todo3);