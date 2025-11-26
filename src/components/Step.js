import React from 'react';

const Step = ({
  stepNumber,
  fields,
  handleInputChange,
  handleSubmit,
  handlePrevious,
  handleNext
}) => {
  switch(stepNumber) {
    case 1:
      return (
        <div>
          <div>
            <label htmlFor="first_name">First Name</label>
            <input 
              type='text'
              id='first_name'
              name='first_name'
              value={fields.first_name}
              onChange={(e) => handleInputChange('first_name', e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="last_name">Last Name</label>
            <input 
              type='text'
              id='last_name'
              name='last_name'
              value={fields.last_name}
              onChange={(e) => handleInputChange('last_name', e.target.value)}
            />
          </div>

          <button type='button' onClick={handleNext}>Next</button>
        </div>
      );

    case 2:
      return (
        <div>
          <div>
            <label htmlFor="model">Car Model</label>
            <input 
              type='text'
              id='model'
              name='model'
              value={fields.model}
              onChange={(e) => handleInputChange('model', e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="car_price">Car Price</label>
            <input 
              type='text'
              id='car_price'
              name='car_price'
              value={fields.car_price}
              onChange={(e) => handleInputChange('car_price', e.target.value)}
            />
          </div>

          <button type='button' onClick={handlePrevious}>Previous</button>
          <button type='button' onClick={handleNext}>Next</button>
        </div>
      );

    case 3:
      return (
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
          <div>
            <label htmlFor="card_info">Credit Card Number</label>
            <input 
              type='text'
              id='card_info'
              name='card_info'
              value={fields.card_info}
              onChange={(e) => handleInputChange('card_info', e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="expiry_date">Expiration Date</label>
            <input 
              type='date'
              id='expiry_date'
              name='expiry_date'
              value={fields.expiry_date}
              onChange={(e) => handleInputChange('expiry_date', e.target.value)}
            />
          </div>
          
          <button type='button' onClick={handlePrevious}>Previous</button>
          <button type='submit'>Submit</button>
        </form>
      );

    default:
      return null;
  }
}

export default Step; // This was missing!