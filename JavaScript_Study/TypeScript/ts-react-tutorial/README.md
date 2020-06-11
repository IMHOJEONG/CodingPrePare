This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---

## 개인적인 공부 내용 추가

- [참고링크](https://velog.io/@velopert/using-hooks-with-typescript)

- 상태가 null일 수도 아닐 수도 있을 때 Generics를 활용

```typescript
type Information = { name: string; description: string };
const [info, setInformation] = useState<Information | null>(null);
```

- 상태의 타입이 까다로운 구조를 가진 객체 or 배열일 때는 명시하는 것이 좋음

```typescript
type Todo = { id: number; text: string; done: boolean };
const [todos, setTodos] = useState<Todo[]>([]);
```

- 리듀서를 만들 땐 파라미터로 받아오는 상태의 type과 함수가 리턴하는 타입을 동일하게 설정하는 것이 매우 중요

- 변수 값 관리

```typescript
const id = useRef<number>(0);
const increaseId = () => {
  id.current += 1;
};
// typescript 환경에서 useRef를 통해 어떤 변수 값을 관리하고 싶을 때
```

- DOM 관리
  - ref 안에 DOM을 담을 때는 초깃값을 null로 설정
