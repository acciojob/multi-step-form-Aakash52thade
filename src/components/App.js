import React, { useState } from "react";
import './../styles/App.css';
import Step from './Step.js';

const App = () => {
  const [fields, setFields] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: ""
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (name, value) => {
    setFields({
      ...fields,
      [name]: value
    });
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", fields);
    // Add form submission logic here
  };

  return (
    <div>
      {/* Render current step based on currentStep state */}
      {currentStep === 1 && (
        <Step 
          stepNumber={1}
          fields={fields}
          handleInputChange={handleInputChange}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      )}
      {currentStep === 2 && (
        <Step 
          stepNumber={2}
          fields={fields}
          handleInputChange={handleInputChange}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      )}
      {currentStep === 3 && (
        <Step 
          stepNumber={3}
          fields={fields}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          handlePrevious={handlePrevious}
        />
      )}
    </div>
  );
}

export default App;