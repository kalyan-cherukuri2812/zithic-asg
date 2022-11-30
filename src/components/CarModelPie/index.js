import "./index.css"
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const CarModelPie=props=>{
    const {details}=props
   


    const carsModelsData =details.map(each=>(
        each.vehicalInformation.model
    ))
const carModels=[...new Set(carsModelsData)]
    

const b=carModels.map(eachModel=>({
    CarModel:eachModel,
        count:(details.filter(each=>(
            each.vehicalInformation.model===eachModel)
        )).length
}))




const COLORS = ['#0088FE', '#00C49F', '#FFBB28','#e95566','#ff81ae', '#FF8042'];

  

    return(
      <>
      <h1>Pie chart for their car models on the basis of their Car Maker</h1>
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
                 <Cell name={each.CarModel } fill={COLORS[Math.floor(Math.random() * COLORS.length)]} />
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

export default CarModelPie