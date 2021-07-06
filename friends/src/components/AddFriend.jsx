import React from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';

function AddFriend() {
    return(
        <Form>
            <Field
                type='text'
                name='name'
                placeholder='Enter Name'
            />
            <Field
                type='number'
                name='age'
                placeholder='Enter Age'
            />
            <Field
                type='text'
                name='email'
                placeholder='Enter Email'
            />
            <button type='submit' >Add Friend</button>
        </Form>
    )
}

const FormikAddFriend = withFormik({

    mapPropsToValues({ name, age, email }) {
        return {
            name: name || '',
            age: age || '',
            email: email || '',
        }
    },

    handleSubmit: (values) => {
        axios
            .post('http://localhost:5000/api/friends', values,{
                headers: {
                    authorization: `${localStorage.getItem('token')}`
                }
            })
            .then(res => (console.log(res)))
            .catch(err => {console.log(err)})
    }
})(AddFriend)

export default FormikAddFriend