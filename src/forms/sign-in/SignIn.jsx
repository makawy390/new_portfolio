import * as Yup from 'yup';
import {Formik , Field , Form , ErrorMessage} from 'formik'
import { Container } from '@mui/material';
import './signin.css';
import {useDispatch} from 'react-redux'
import  axios  from 'axios';
import { api } from './../../api/api';
import { addedToken } from '../../rtk/reducer/addToken';
const SignIn = () => {
   const initialFormData = {
  username:'',
  password :'',
 };
const dispatch = useDispatch();
 const objectSchema = Yup.object({
  username : Yup.string().required("user name is required"),
  password : Yup.string().required("password is required"),
 });

function checkSignIn(username,password){
axios.post(`${api}api/users/login`,{
  username : username,
  password : password
}).then(res => {
  console.log(res.data)
  sessionStorage.setItem("token" , res.data.token)
  dispatch(addedToken(res.data.token))
})
.catch(err => console.log(err))
}
  return (
    <div className='sign-in'>
      <Container fixed>
     <Formik validationSchema={objectSchema} initialValues={initialFormData} onSubmit={(e) => {
     checkSignIn(e.username , e.password)
   }}>
    <Form>
   
    <label htmlFor="email">Email</label>
    <Field name='username' type="text"/>
    <ErrorMessage name="username" >
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

export default SignIn