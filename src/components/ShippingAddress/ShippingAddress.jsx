import React from 'react';
import { Formik } from 'formik';

const validate = values => {
    const { name, email, address } = values;
    const errors = {};
    if (!name) { errors.name = 'Required' };
    if (!email) { errors.email = 'Required'}; 
    if (!address) { errors.address = 'Required'};
      
    return errors;
}

const ShippingAddress = ({ setShipping }) => {
    const initialValues = {
        name: '',
        email: '',
        address: ''
    }

    return (
        <div className="">
            <h4>Shipping Address</h4>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={(values) => {
                    console.log('values', values)
                    setShipping(values)
                }}
            >
                {
                    ({ values, errors, handleChange, handleSubmit }) => {
                        const { name, email, address } = errors;
                        return (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input 
                                        className={ "nomad-input" + (name ? 'errors' : '')}
                                        type="text" 
                                        name="name" 
                                        placeholder="Name"
                                        value={values.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input 
                                        className={ "nomad-input" + (email ? 'errors' : '')}
                                        type="email" 
                                        name="email" 
                                        placeholder="Email"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input 
                                        className={ "nomad-input" + (address ? 'errors' : '')}
                                        type="text" 
                                        name="address" 
                                        placeholder="Address"
                                        value={values.address}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="submit-btn">
                                    <button 
                                        className="button is-black nomad-btn submit"
                                        type="submit">
                                        CONTINUE
                                    </button>
                                </div>
                            </form>
                        )
                    }
                }
            </Formik>
        </div>
    );
}

export default ShippingAddress;