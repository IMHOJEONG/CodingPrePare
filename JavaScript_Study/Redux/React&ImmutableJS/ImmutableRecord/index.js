import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Record } from 'immutable';

const Person = Record({
    name: '임호정',
    age: 1
});

let person = Person();

console.log(person);

console.log(person.name, person.age);

person = person.set('name', '김민준');
console.log(person.name);


person = Person({
    name: '임호정2',
    age:21
});

const { name, age} = person;
console.log(name, age);

const dog = Record({
    name: '멍멍이', 
    age:1
})(); // 재 생성 할일이 없는 경우

console.log(dog.name);

const nested = Record({
    foo: Record({
        bar: true
    })()
})();

console.log(nested.foo.bar);

const nextNested = nested.setIn(['foo', 'bar'], false);
console.log(nextNested);

render(<App />, document.getElementById('root'));

1