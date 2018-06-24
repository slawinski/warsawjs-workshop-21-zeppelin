import React from 'react'
import {reduxForm, Field, formValueSelector} from 'redux-form'
import {connect} from 'react-redux'
import {required, length } from 'redux-form-validators'
import {Input, CheckInput} from '../../components'
import {login} from '../../actions/user'

let Home = ({handleSubmit, termsCheckbox, invalid, login}) => {
  const handleLogin = values => {
    // loginUser(values)
    console.log(values)
  }

  return (<div className='display-flex'>
    <img className='flex-2' src='https://gradientjoy.com/300x200?id=105' alt='random'/>
    <form className='flex-1'>
      <Field name='username' component={Input} label='Your name' type='text' validate={[required()]}/>
      <Field name='password' component={Input} label='Password' type='password' validate={[required(), length({ min: 8 })]}/>
    <Field name='termsCheckbox' component={CheckInput} label='termsCheckbox' type='checkbox'/>
    <button disabled={!termsCheckbox}>
        Continue
      </button>
    </form>
  </div>)
}

Home = reduxForm({form: 'LoginForm'})(Home)

Home = connect(state => ({
  termsCheckbox: formValueSelector('LoginForm')(state, 'termsCheckbox')
}), {
login
})(Home)

export default Home
