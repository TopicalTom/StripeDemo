import React, { useState } from 'react';
import Layout from '../../layout/Layout';
import { Formik } from 'formik';
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase/index';
import './SignIn.scss';

const SignIn = () => {
    const [error, setError] = useState(null);
    const initialValues = {
        email: '',
        password: '',
    }

    const handleSignIn = async (values, { setSubmitting }) => {
        const { email, password } = values;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setSubmitting(false);
            PushManager('/shop');
        } catch (error) {
            console.log(error);
            setSubmitting(false);
            setError(error);
        }
    }

    return (
        <Layout>
            <div className="sign-in">
                <h1>Sign In</h1>
                <div className="form-container">
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSignIn}
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
                                        <div className="error-message">
                                            {error &&
                                                <p>{error.message}</p>
                                            }
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

export default withRouter(SignIn);