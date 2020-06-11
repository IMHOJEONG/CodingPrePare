var array = [1,2,3,1,2,3];

array.sort(); 

array = [1,2,11];

array.sort(); // UTF-16 코드 기준으로 정렬 
// 11 => "11"로 변화
// 1-> 49 2->50 이라 1,11,2로 정렬됨

// undefined가 포함된 배열 => 모든 undefined 요소들은 뒤로 정렬

var names = ["John", "Abu", "Babu", "Balu", "Antony"]

names.sort();

// 비교 함수를 넣을 수 있음 
// 2개의 인자를 필요로 하며. (0,1) ..... (len-2, len-1)의
// 순으로 원소들의 쌍을 비교함 

// compare 함수 작성 시 >0 이면 => a,b 바뀜
// <=0 이면 위치 변화 없음

function compare(a,b){

    if(a<b){
        return -1;
    }
    if (a>b){
        return 1;
    }

    return 0;

}
// 축약도 가능
function compareNumbers(a,b){
        return a-b;
}

var array = [2,1,11];
array.sort(compare);

// --------------- Sorting Array of Objects //

var users = 
[
    {name:"John", age: 20}, 
    {name:"Antony", age: 33}
];

function sortByAge(obj1, obj2){
    return obj1.age - obj2.age;
}

function sortByName(obj1, obj2){
    return obj1.name.localeCompare(obj2.name);
}
// localecompare 참고링크
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

users.sort(sortByAge);


users.sort(sortByName);

// 비교함수가 undefined, null, NaN, Infinity를 반환하면 
// 2개의 수를 정렬하지 않음




// 이 예제 집중 - 원하는 부분 까지만 정렬 가능
var array = [3,2,1,110, 102, 30];

function customCompare(a,b){
    if(a>10 || b>10){
        return Infinity;
    }
    return a-b;
}

array.sort(customCompare);