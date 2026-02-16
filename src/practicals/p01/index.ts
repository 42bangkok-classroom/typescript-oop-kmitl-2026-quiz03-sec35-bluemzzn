import { Student } from './student'

const student = new Student('firstname', 'lastname')

student.firstname = 'John'
student.lastname = 'Doe'

student.printName()
// John Doe
