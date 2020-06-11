const expectExport = require("expect");

// // Repeating Setup For Many Tests
beforeEach(()=>{
    initializeCityDatabase();
});

afterEach(()=>{
    clearCityDatabase();
});

test('city database has Vienna', ()=>{
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan',()=>{
    expect(isCity('San Juan')).toBeTruthy();
});

// // One-time Setup
beforeAll(()=>{
    return initializeCityDatabase();
});

afterAll(()=>{
    return clearCityDatabase();
});

test('city database has Vienna', ()=>{
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan',()=>{
    expect(isCity('San Juan')).toBeTruthy();
});

// Scoping
beforeEach(()=>{
    return initializeCityDatabase();
});

test('city database has Vienna', ()=>{
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan',()=>{
    expect(isCity('San Juan')).toBeTruthy();
});

describe('matching cities to foods', ()=>{
    beforeEach(()=>{
        return initializeFoodDatabase();
    });

    test('Vienna <3 sausage', ()=>{
        expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
    });

    test('San Juan <3 plantains', ()=>{
        expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    });

});

// // top-level beforeEach is executed before the beforeEach inside the describe block
// help to illustrate the order of execution of all books
beforeAll(()=> console.log('1 - beforeAll'));
afterAll(()=>console.log('1 - afterAll'));
beforeEach(()=>console.log('1 - beforeEach'));
afterEach(()=>console.log('1 - afterEach'));
test('', ()=> console.log('1 - test'));
describe('Scoped / Nested block', ()=>{
    beforeAll(()=>{
         console.log('2 - beforeAll');
    });
    afterAll(()=>{
        console.log('2 - afterAll');
    });
    beforeEach(()=>{
        console.log('2 - beforeEach');
    });
    afterEach(()=>{
        console.log('2 - afterEach');
    });
    test('', ()=> console.log('2 - test'));
});

// Order of execution of describe and test blocks
describe('outer', ()=>{
    console.log('describe outer-a');

    describe('describe inner 1', ()=>{
        console.log('describe inner 1');
        test('test 1', ()=>{
            console.log('test for describe inner 1');
            expect(true).toEqual(true);
        });
    });

    console.log('describe outer-b');

    test('test 1', ()=>{
        console.log('test for describe outer');
        expect(true).toEqual(true);
    });

    describe('describe inner 2' , ()=>{
        console.log('describe inner 2');
        test('test for describe inner 2', ()=>{
            console.log('test for describe inner 2');
            expect(false).toEqual(false);
        });
    });

    console.log('describe outer-c');
});


// General Advice
test.only('this will be the only test that runs', ()=>{
    expect(true).toBe(false);
});

test('this test will not run', ()=> {
    expect('A').toBe('A');
});

