import { faker } from '@faker-js/faker';
import './App.css';
import Barcharts from "./components/Barchart"
import CarModelPie from "./components/CarModelPie"
import CarAgePie from "./components/CarAgePie"




function App() {

let data=[]

  for (let i = 0;i < 1000; i++) {
    const ID= faker.datatype.uuid();
    const userName=faker.name.fullName();
    const address=faker.helpers.arrayElement(['Canada', 'United States', 'Sweden','Japan','Australia','United Kingdom','France','India','Russia','Italy',]);

  const age=faker.datatype.number({min: 18, max: 100});
  const phoneNumber=faker.phone.number();
  const occupation=faker.name.jobTitle();
 
  const vehicalInformation={
    model:faker.helpers.arrayElement(['Nissan F-150', 'Chrysler Cruze', 'Volvo Camaro', 'Land Rover V90', 'Audi Beetle', 'BMW Challenger', 'Polestar Model 3', 'Mercedes Benz Volt', 'Porsche Volt', 'Chevrolet Durango',]),
    carAge:faker.datatype.number({min:1,max:10})
  }
  data=[...data,{ID,userName,address,age,phoneNumber,occupation,vehicalInformation}]
  }
  

  return (

   <div className='bg-container'>

<Barcharts  details={data} />
<CarModelPie details={data} />
<CarAgePie details={data}/>
   </div>
  );
}

export default App;

