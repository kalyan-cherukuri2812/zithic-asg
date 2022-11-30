import "./index.css"
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const CarAgePie=props=>{
    const {details}=props



    const carsAgeData =details.map(each=>(
        each.vehicalInformation.carAge
    ))
const carAges=[...new Set(carsAgeData)]
    

const b=carAges.map(eachAge=>({
    carAge:eachAge,
        count:(details.filter(each=>(
            each.vehicalInformation.carAge===eachAge)
        )).length
}))




const COLORS = ['#0088FE', '#00C49F', '#FFBB28','#e95566','#ff81ae', '#FF8042'];

  
  

    return(
      <>
      <h1>Pie chart for their car’s age.</h1>
      <ResponsiveContainer  className="piechart"   width="100%" height={300}>
        <PieChart>
          <Pie 
            cx="50%"
            cy="50%"
            data={b}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="70%"
            dataKey="count"
            labelLine={true}
            label="len"
            
          >
            {b.map(each=>(
                 <Cell name={`${each.carAge} Years Old`} fill={COLORS[Math.floor(Math.random() * COLORS.length)]} />
            ))} 
           
           
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
      </>
        
    )
}

export default CarAgePie