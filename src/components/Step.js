import React from 'react'

const Step = ({
    fields,
    handleInputChange,
    handleSubmit,
    handlePrevious,
    currentStep,
    handleNext
}) => {

    // STEP 1
    if (currentStep === 1) {
        return (
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label>First Name</label>
                    <input
                        type='text'
                        id='first_name'
                        value={fields.first_name}
                        onChange={(e) => handleInputChange("first_name", e.target.value)}
                    />
                </div>

                <div>
                    <label>Last Name</label>
                    <input
                        type='text'
                        id='last_name'
                        value={fields.last_name}
                        onChange={(e) => handleInputChange("last_name", e.target.value)}
                    />
                </div>

                <button type='button' onClick={handleNext}>Next</button>
            </form>
        );
    }

    // STEP 2
    if (currentStep === 2) {
        return (
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label>Model</label>
                    <input
                        type='text'
                        id='model'
                        value={fields.model}
                        onChange={(e) => handleInputChange("model", e.target.value)}
                    />
                </div>

                <div>
                    <label>Car Price</label>
                    <input
                        type='text'
                        id='car_price'
                        value={fields.car_price}
                        onChange={(e) => handleInputChange("car_price", e.target.value)}
                    />
                </div>

                <button type='button' onClick={handlePrevious}>Previous</button>
                <button type='button' onClick={handleNext}>Next</button>
            </form>
        );
    }

    // STEP 3
    if (currentStep === 3) {
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(); // ONLY THIS LOGS FIELDS
            }}>
                <div>
                    <label>Credit Card Number</label>
                    <input
                        type='text'
                        id='card_info'
                        value={fields.card_info}
                        onChange={(e) => handleInputChange("card_info", e.target.value)}
                    />
                </div>

                <div>
                    <label>Expiration Date</label>
                    <input
                        type='month'
                        id='expiry_date'
                        value={fields.expiry_date}
                        onChange={(e) => handleInputChange("expiry_date", e.target.value)}
                    />
                </div>

                <button type='button' onClick={handlePrevious}>Previous</button>
                <button type='submit'>Submit</button>
            </form>
        );
    }

    return null;
}

export default Step;
