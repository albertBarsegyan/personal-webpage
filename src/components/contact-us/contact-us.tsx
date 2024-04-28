'use client';
import { Input } from '@/components/common/input/input';
import { Textarea } from '@/components/common/textarea/textarea';
import { Button } from '@/components/common/button/button';
import { ChangeEvent, FormEvent, useReducer } from 'react';
import classNames from 'classnames';
import { ErrorText } from '@/components/common/error-text/error-text';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  errors: {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
};

interface ReducerActionType {
  value?: string
  error?: string
  type: 'SUBMIT' | 'CHANGE'
  field?: string
}

const reducer = (state: typeof initialState, action:ReducerActionType) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action?.field ?? '']: action.value,
        errors: {
          ...state.errors,
          [action?.field ?? '']: action.error
        }
      };
    case 'SUBMIT':
      return {
        ...state,
        errors: {
          name: !state.name.trim() ? 'Name is required' : '',
          email: !/\S+@\S+\.\S+/.test(state.email) ? 'Invalid email address' : '',
          subject: !state.subject.trim() ? 'Subject is required' : '',
          message: !state.message.trim() ? 'Message is required' : ''
        }
      };
    default:
      return state;
  }
};

export function ContactUs() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (field:string, value:string) => {
    let error = '';
    if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Invalid email address';
    } else if (!value.trim()) {
      error = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }

    dispatch({ type: 'CHANGE', field, value, error });
  };

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: 'SUBMIT' });

    if (!state.errors.name && !state.errors.email && !state.errors.subject && !state.errors.message) {
      console.log('Form submitted:', state);
    }
  };

  return (
    <div className='mt-10 bg-secondary rounded-3xl px-4 py-6 md:p-10'>
      <div className='flex justify-center items-center flex-col'>
        <span className='text-xl md:text-3xl font-bold'>Contact Us</span>
        <p className='text-sm md:text-2xl mt-2 md:mt-5'>Let’s Build Your VR Experience</p>
      </div>
      <form className='flex flex-col gap-4 mt-8 md:mt-20' onSubmit={handleSubmit}>
        <div className='flex items-center w-full justify-between gap-x-5'>

          <div className='w-full'>
            <Input placeholder='Email' className='w-full' value={state.email} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('email', e.target.value)} />
            <ErrorText errorMessage={state.errors.email}/>
          </div>
        </div>
        <div>
          <Textarea placeholder='Message' value={state.message} onChange={(e) => handleChange('message', e.target.value)} />
          <ErrorText errorMessage={state.errors.message}/>
        </div>
      </form>
      <div className='w-full flex justify-center mt-4 md:mt-5'>
        <Button variant='filled' type="submit" className='md:w-1/3 w-full h-10 md:h-14 text-sm md:text-2xl'>Send us</Button>
      </div>
    </div>
  );
}
