import React from 'react';
import Layout from '../../layout/Layout';
import { Formik } from 'formik';
import './SignIn.scss';

const SignIn = () => {
    const initialValues = {
        email: '',
        password: '',
    }

    return (
        <Layout>
            <div className="sign-in">
                <h1>Sign In</h1>
                <div className="form-container">
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => {
                            console.log(values)
                        }}
                    >
                        {
                            ({values, errors, handleChange, handleSubmit, isSubmitting}) => {
                                const { email } = errors;
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <input 
                                                type="email"
                                                name="email"
                                                onChange={handleChange}
                                                value={values.email}
                                                placeholder='Email'
                                                className={ 'nomad-input ' + ( email ? 'error' : '')}
                                            />
                                        </div>
                                        <div>
                                            <input 
                                                type="password"
                                                name="password"
                                                onChange={handleChange}
                                                value={values.password}
                                                placeholder='Password'
                                                className="nomad-input password"
                                            />
                                        </div>
                                        <div className="submit-btn">
                                            <button 
                                                className="button is-black nomad-btn submit"
                                                type="submit"
                                                disabled={isSubmitting}>
                                                Sign In
                                            </button>
                                        </div>
                                    </form>
                                )
                            }
                        }
                    </Formik>
                </div>
            </div>
        </Layout>
    );
}

export default SignIn;