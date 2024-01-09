// import React from 'react'
import {Formik , Field , Form , ErrorMessage} from 'formik'
import { Container } from '@mui/material';
import * as Yup from 'yup';
import './signup.css'
import  axios  from 'axios';
import { api } from '../../api/api';
// import { useState } from 'react';
const SignUp = () => {
 const initialFormData = {
  username:'',
  email:'',
  password :'',
  image : '',
 }
 const objectSchema = Yup.object({
  username : Yup.string().required("user name is required").min(4 ,"user name is shorty!"),
  email : Yup.string().email("Invalid Email").required("email is required"),
  password : Yup.string().required("password is required").min(6 ,"password is shorty!"),

 });
 const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  }


 function addDataToSignUp(username,password , email , image){
const formDataFile = new FormData();
formDataFile.append('image',image);
axios.post(`${api}api/users/register`,config,{
  username : username,
  email : email ,
  password : password,
  image : image

}).then(res => {
  console.log(res.data)
})
.catch(err => console.log(err))
}
  return (
    <div className="sign-up">
      <Container fixed>
     <Formik validationSchema={objectSchema} initialValues={initialFormData} onSubmit={(e) => {
    console.log(e);
    addDataToSignUp(e.username , e.email , e.password , e.image)
   }}>
    <Form>
  <Field name='file' type="file" />
    <ErrorMessage name="file">
      {msg => <div style={{color:"red"}}>{msg}</div>}
    </ErrorMessage>
    <label htmlFor="username">Username</label>
    <Field name='username' type="text" />
    <ErrorMessage name="username">
      {msg => <div style={{color:"red"}}>{msg}</div>}
    </ErrorMessage>
    
    <label htmlFor="email">Email</label>
    <Field name='email' type="email" />
    <ErrorMessage name="email">
      {msg => <div style={{color:"red"}}>{msg}</div>}
    </ErrorMessage>

    <label htmlFor="password">password</label>
    <Field name='password' type="password" />
    <ErrorMessage name="password">
      {msg => <div style={{color:"red"}}>{msg}</div>}
    </ErrorMessage>
<button type='submit'>Submit</button>
    </Form>

   </Formik>
</Container>
    </div>
  )
}

export default SignUp