type Person2 = {
  name: string;
  age?: number;
};

type Developer2 = Person2 & {
  skills: string[];
};

const person2: Person2 = {
  name: "김사람"
};

const expert2: Developer = {
  name: "김개발",
  skills: ["javascript", "react"]
};

type People = Person2[];

const people2: People = [person, expert];

type Color = "red" | "orange" | "yellow";
const color2: Color = "red";
const colors: Color[] = ["red", "orange"];
