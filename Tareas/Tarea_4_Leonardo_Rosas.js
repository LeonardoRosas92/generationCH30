const student1Courses = ['Math', 'English', 'Programming','Geography'];
const student2Courses = ['Geography', 'Spanish', 'Programming', 'English'];

const matches = (array1, array2) => {
    return array1.filter( value => array2.includes(value));
}

console.log(matches(student1Courses,student2Courses));