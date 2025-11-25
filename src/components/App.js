import React, { useState } from "react";
import './../styles/App.css';
import Step from './Step.js'

const App = () => {

  const [fields, setFields] = useState({
    first_name: "",
    last_name:"", 
    model:"",
    car_price:"", 
    card_info:"", 
    expiry_date:""
  })

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if(currentStep < 3){
      setCurrentStep(currentStep + 1);
    }
  }

  const handlePrevious = () => {
    if(currentStep > 1){
      setCurrentStep(currentStep -1);
    }
  }

  const handleInputChange = (name, value) => {
    setFields({
      ...fields, [name]: value
    })
  }

  const handleSubmit = () => {
    console.log("Form Submitted:", fields);
  }
  
  return (
    <div className="container">   {/* <-- ADDED CLASSNAME */}
       <Step 
          fields={fields} 
          handleInputChange={handleInputChange} 
          handleSubmit={handleSubmit}  
          handlePrevious={handlePrevious} 
          currentStep={currentStep} 
          handleNext={handleNext}
       />
    </div>
  )
}

export default App;
