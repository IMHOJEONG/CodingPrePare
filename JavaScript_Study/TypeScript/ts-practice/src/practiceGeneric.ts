function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });

function wrap<T>(param: T) {
  return {
    param
  };
}

const wrapped = wrap(10);

interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ["a", "b", "c"]
};

/*
    type Items<T> = {
        list: T[];
    };

    const items: Items<string> = {
        list: ['a','b','c']
    };
*/
