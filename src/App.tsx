import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
interface Prop{
  id:number;
  name:string;
}
function App() {
  const [User,SetUser]=useState<Prop[]>([])

  useEffect(()=>{
    axios.get<Prop[]>('https://jsonplaceholder.typicode.com/users').then(res=>SetUser(res.data))
  })
  
  return (
    <div>
      <ul>
        {
          User.map(
            (val)=><li>{val.id} {val.name}</li>
          )
        }
      </ul>
    </div>
  )
}

export default App
