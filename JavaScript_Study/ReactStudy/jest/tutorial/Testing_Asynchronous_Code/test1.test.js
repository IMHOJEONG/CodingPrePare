// Callbacks
    
test('the data is peanut butter', done => {
    // 이렇게 쓰지 말자
    // function callback(data){
    //     expect(data).toBe('peanut butter');
    // }

    // fetchData(callback)
    function callback(data){
        expect(data).toBe('peanut butter');
        done();
    }

    fetchData(callback);
});

// Promises
test('the data is peanut butter', ()=>{
    return fetchData().then(data =>{
        expect(data).toBe('peanut butter');
    });
});

test('the fetch fails with an error', ()=>{
    expect.assertions(1);
    return fetchData().catch(e => expect(e).toMatch('error'));

});

// .resolves / ./rejects
test('the data is peanut butter', ()=>{
    return expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () =>{
    return expect(fetchData()).rejects.toMatch('error');
});

// Async/Await
test('the data is peanut butter', async ()=>{
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async ()=>{
    expect.assertions(1);
    try{
        await fetchData();
    } catch(e){
        expect(e).toMatch('error');
    }
});

test('the data is peanut butter', async ()=>{
    await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async ()=>{
    await expect(fetchData()).rejects.toThrow('error');
});