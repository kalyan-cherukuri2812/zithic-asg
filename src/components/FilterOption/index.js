import "./index.css"

import  { Component } from 'react'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'


export default class FilterOption extends Component {

state={carModelVal:"",carAgeVal:"",data:[]}

carModelChange=(event)=>{
  this.setState({carModelVal:event.target.value})
}

carAgeChange=event=>{
  this.setState({carAgeVal:event.target.value})
}

submitClick=(event)=>{
  event.preventDefault()
  const {carModelVal,carAgeVal}=this.state
  const {details}=this.props
  
  if(carModelVal!==""& carAgeVal!==""){
    const data=details.filter(each=>(
      each.vehicalInformation.model===carModelVal || each.vehicalInformation.carAge===carAgeVal
    ))

    

  this.setState({data:data})

  }

  


}
  render() {


const {carModelVal,carAgeVal,data}=this.state

    



    const {details}=this.props
const ageRange=["20-24","25-29","30-34","35-39","40-44","45-49","50-54","55-59","60-64","65-69","70-74","75-79","80-84","85-89","90-94","95-99"]
    
const rangeData=ageRange.map(eachrange=>({
range:eachrange,
count:(data.filter(each=>(each.age>=(parseInt(eachrange.slice(0,2))) && each.age<=(parseInt(eachrange.slice(3,)))))).length
}))

   
 
    const carModelData=details.map(each=>(
      each.vehicalInformation.model
    ))
    const carModel=[...new Set(carModelData)]
    

    const carAgeData=details.map(each=>(
      each.vehicalInformation.carAge
    ))
    const carAge=[...new Set(carAgeData)]

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28','#e95566','#ff81ae', '#FF8042'];


    return (
      <div>
        <h1>car’s models and car’s age chart according to user age
range</h1>
        <form onSubmit={this.submitClick}> 
          <div>
          <select value={carModelVal} onChange={this.carModelChange}>
            <option value="" >Car Model</option>
            {carModel.map(each=>(
              <option key={each} value={each}>{each}</option>
            ))}
          </select>
          
          <select value={carAgeVal} onChange={this.carAgeChange}>
            <option value="" >Car Age</option>
            {carAge.map(each=>(
              <option key={each} value={each}>{each}</option>
            ))}
          </select>
          </div>
        
         <button type="submit">Apply</button>
          
        </form>

        <ResponsiveContainer  className="piechart"   width="100%" height={300}>
        <PieChart>
          <Pie 
            cx="50%"
            cy="50%"
            data={rangeData}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="70%"
            dataKey="count"
            labelLine={true}
            label="len"
            
          >
            {rangeData.map(each=>(
                 <Cell name={each.range } fill={COLORS[Math.floor(Math.random() * COLORS.length)]} />
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
        


      </div>
    )
  }
}
