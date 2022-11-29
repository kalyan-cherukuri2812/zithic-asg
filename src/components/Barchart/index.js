
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
  } from "recharts"




  const Barcharts = (props) => {
    const {details}=props

    
   const countryData=details.map(each=>(
    each.address
   ))
   const country=[...new Set(countryData)]
   

 

const b=country.map(eachCntry=>(
    {
        countryName:eachCntry,
        len:(details.filter(each=>(
            each.address===eachCntry)
        )).length
    }
))


  


    const DataFormatter = (number) => {
      if (number > 1000) {
        return `${(number / 1000).toString()}k`
      }
      return number.toString()
    }
  
    return (
      <ResponsiveContainer width="80%" height={500}>
        <BarChart 
          data={b}
          
          
        >
          <XAxis
            dataKey="countryName"
            tick={{
              stroke: "gray",
              strokeWidth: 1,
            }}
          />
          
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: "gray",
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 0,
            }}
          />
          <Bar  dataKey="len" name="country users" fill="#1f77b4"  />
         
        </BarChart>

    </ResponsiveContainer>
  )
}

export default Barcharts