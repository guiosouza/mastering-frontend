//
const people = {
  greeting: "Good morning!",
  talk() {
    console.log(this.greeting);
  },
};

people.talk(); // console.log(people.greeting);
const talk = people.talk;
talk(); // undefined;
