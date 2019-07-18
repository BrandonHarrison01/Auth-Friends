import React from 'react';
import { withFormik, Form, Field } from 'formik'
// import * as Yup from 'yup'
import axios from 'axios'

function LoginForm() {
    return(
        <Form>
            <Field
                type='text'
                name='username'
                placeholder='Enter Username'
            />
            <Field
                type='password'
                name='password'
                placeholder='Enter Password'
            />
            <button type='submit'>Submit!</button>
        </Form>
    )
}

const FormikLoginForm = withFormik({

    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || ''
        }
    },

    handleSubmit: (values) => {
        console.log(values);
        axios
            .post('http://localhost:5000/api/login', values)
            .then(res => {console.log(res.data)})
    }
})(LoginForm)

export default FormikLoginForm