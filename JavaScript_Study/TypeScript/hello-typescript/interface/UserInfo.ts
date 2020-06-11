interface UserInfo {
    username: string;
    password: string;
    age? : number;
    address? : string;
}

const userInfo: UserInfo = {
    username: '39ghwjd@naver.com',
    password: '123'
}

console.log(userInfo);