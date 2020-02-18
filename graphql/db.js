export const people = [
    {
        id: 0,
        name: "LeeJaeYoung",
        age: 24,
        gender: "male",
    },
    {
        id: 1,
        name: "jang",
        age: 26,
        gender: "male",
    },
    {
        id: 2,
        name: "kim",
        age: 23,
        gender: "male",
    },
    {
        id: 3,
        name: "lee",
        age: 22,
        gender: "male",
    },
];

//요청한 id와 같은 id를 가진 객체정보를 리턴
export const getById = (id, name) => {
    console.log(id);
    const filteredPeople = people.filter(
        person => person.id === id && person.name === name
    );
    return filteredPeople[0];
}
