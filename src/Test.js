import React,{useState} from 'react'
import Link from '@material-ui/core/Link'
export default function Test(){
 const [gretting,setGretting] = useState("Hello")
 const [value,setValue] =useState('three');
 const handleChange = (e) =>(
     setValue(e.target.value)
 )
 const handleSubmit = (e) =>(
     e.preventDefault()
 )
 function func(){
     setGretting("Chaw")
 }
 return(
     <div>
         <Hello greet = {gretting}/>
        
        <Select value ={value} handleSubmit = {handleSubmit} handleChange ={handleChange}/>
     </div>
 )
}
function Hello(props){
   
    return(
        <div>
            <p>{props.greet}</p>
        </div>
    )
}
function Bye(props) {
    return(
        <div>
            <Link onClick={props.displayChaw} href="#">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </Link>
            
        </div>
    )
}
function Select({handleSubmit,handleChange,value}){
    return(
      <form onSubmit = {handleSubmit}>
          <label>
              pick your favourite number
        <select value = {value} onChange = {handleChange}>
        <option value ='one'>1</option>
        <option value ='two'>2</option>
        <option value ='three'>3</option>
    </select>
    </label>
    <input type="submit" value="Submit"/>
      </form>
    )
}