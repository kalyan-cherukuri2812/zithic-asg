import { faker } from '@faker-js/faker';
import './App.css';




function App() {

let a=[]

  for (let i = 0;i < 10; i++) {
    const ID= faker.datatype.uuid();
    const userName=faker.name.fullName();
  const address = faker.address.country(); 
  const age=faker.datatype.number({min: 18, max: 100});
  const phoneNumber=faker.phone.number();
  const occupation=faker.name.jobTitle();
  const vehicalInformation={
    model:faker.vehicle.vehicle(),
    carAge:faker.datatype.number({max:10})
  }
  a=[...a,{ID,userName,address,age,phoneNumber,occupation,vehicalInformation}]
  }
  
console.log(a)
  return (

   <>
<h1>hii</h1>
   </>
  );
}

export default App;

