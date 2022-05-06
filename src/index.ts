/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
interface Student {
  readonly name: string;
  readonly age: number;
  readonly enrolled: boolean;
}

interface Undergrad extends Student {
  readonly major: string | number;
}

export const greg: Undergrad = {
  major: 'biology',
  name: 'Edet',
  enrolled: false,
  age: 34,
};

export const Student2 = class {
  protected readonly name: string;

  private readonly age: number;

  private enrolled: boolean;

  constructor({ name, age, enrolled }: Student) {
    this.name = name;
    this.enrolled = enrolled;
    this.age = age;
  }

  updateName = (name: string) => this.name === name;

  updateAge = (age: number) => this.age === age;

  updateEnrolled = (enrolled: boolean) => this.enrolled === enrolled;
};

const Greg2 = new Student2({ name: 'Godswill Edet', age: 23, enrolled: true });

console.log(Greg2.updateAge(34));

export const Teacher = class extends Student2 {
  protected major: string | number | boolean;

  constructor({ name, age, enrolled, major }: Undergrad) {
    super({ name, age, enrolled });

    this.major = major;
  }

  //   who = () => this.undee === 'greg';
};
