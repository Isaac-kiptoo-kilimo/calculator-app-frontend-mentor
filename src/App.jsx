
import './App.css'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'


const App=()=> {

  return (
   < div className='main-container'>
    <h2>SPLI <br /> TTER</h2>
    <div className='main-card'>
      
     <div className="left-card">
     <div className="input-top">
     <label htmlFor="Bill">Bill</label>
        <Input/>
      </div>
      <div className="btn-perc">
        <h4>Select Tip %</h4>
       <div className="btn-app">
       <Button className="btn-five" btn="5%"/>
        <Button className="btn-ten" btn="10%"/>
        <Button className="btn-fifteen" btn="15%"/>
        <Button className="btn-twenty-five" btn="25%"/>
       <Button className="btn-fifty" btn="50%"/>
       <Button className="btn-custom" btn="custom"/>
       </div>
      </div>
      <div className="input-bottom">
      <label htmlFor="peopleNumber">Number Of People</label>
        <Input/>
      </div>
     
     </div>
     <div className="right-card">
     <Card/>
     </div>
     

    </div>
    </div>
  )
}

export default App;