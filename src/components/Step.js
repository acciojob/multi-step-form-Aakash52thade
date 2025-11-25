import React from 'react'

const Step = ({
    fields, 
    handleInputChange, 
    handleSubmit, 
    handlePrevious,
    currentStep, 
    handleNext
}) => {
  
    if(currentStep === 1){
        return(
           <form className="form-container" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label>First Name</label>
                <input 
                  type='text'
                  id='first_name'
                  name='firstName'
                  value={fields.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                />
              </div>

               <div>
                <label>Last Name</label>
                <input 
                  type='text'
                  id='last_name'
                  name='lastName'
                  value={fields.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                />
            </div>

            <button type='button' onClick={handleNext}>Next</button>
           </form>
        )
    }

    if(currentStep === 2){
        return(
           <form className="form-container" onSubmit={(e) => e.preventDefault()}>
             <div>
                <label>Brand</label>
                <input 
                  type='text'
                  id='make'
                  name='make'
                  value={fields.make}
                  onChange={(e) => handleInputChange('make', e.target.value)}
                />
              </div>

              <div>
                <label>Model</label>
                <input 
                  type='text'
                  id='model'
                  name='model'
                  value={fields.model}
                  onChange={(e) => handleInputChange('model', e.target.value)}
                />
              </div>

              <button type='button' onClick={handlePrevious}>Previous</button>
              <button type='button' onClick={handleNext}>Next</button>
           </form>
        )
    }

    if(currentStep === 3){
        return(
            <form className="form-container" onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}>
              <div>
                <label>Credit Card Number</label>
                <input 
                  type='text'
                  id='card_info'
                  name='card_info'
                  value={fields.card_info}
                  onChange={(e) => handleInputChange('card_info', e.target.value)}
                />
              </div>

              <div>
                <label>Expiration Date</label>
                <input 
                  type="month"
                  id='expiry_date'
                  name='expiry_date'
                  value={fields.expiry_date}
                  onChange={(e) => handleInputChange('expiry_date', e.target.value)}
                />
              </div>
              
              <button type='button' onClick={handlePrevious}>Previous</button>
              <button type='submit'>Submit</button>
            </form>
        )
    }

    return null;
}

export default Step;
