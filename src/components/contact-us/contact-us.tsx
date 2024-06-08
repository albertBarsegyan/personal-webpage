'use client';
import { ChangeEvent, FormEvent, useReducer } from 'react';

import { Button } from '@/components/common/button/button';
import { ErrorText } from '@/components/common/error-text/error-text';
import { Input } from '@/components/common/input/input';
import { Textarea } from '@/components/common/textarea/textarea';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  errors: {
    name: '',
    email: '',
    subject: '',
    message: '',
  },
};

interface ReducerActionType {
  value?: string;
  error?: string;
  type: 'SUBMIT' | 'CHANGE';
  field?: string;
}

const reducer = (state: typeof initialState, action: ReducerActionType) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action?.field ?? '']: action.value,
        errors: {
          ...state.errors,
          [action?.field ?? '']: action.error,
        },
      };
    case 'SUBMIT':
      return {
        ...state,
        errors: {
          name: !state.name.trim() ? 'Name is required' : '',
          email: !/\S+@\S+\.\S+/.test(state.email) ? 'Invalid email address' : '',
          subject: !state.subject.trim() ? 'Subject is required' : '',
          message: !state.message.trim() ? 'Message is required' : '',
        },
      };
    default:
      return state;
  }
};

export function ContactUs() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (field: string, value: string) => {
    let error = '';
    if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Invalid email address';
    } else if (!value.trim()) {
      error = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }

    dispatch({ type: 'CHANGE', field, value, error });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: 'SUBMIT' });

    if (!state.errors.name && !state.errors.email && !state.errors.subject && !state.errors.message) {
      console.log('Form submitted:', state);
    }
  };

  return (
    <div className="bg-secondary mt-10 rounded-3xl px-4 py-6 md:p-10">
      <div className="flex flex-col items-center justify-center">
        <span className="text-xl font-bold md:text-3xl">Contact Us</span>
        <p className="mt-2 text-sm md:mt-5 md:text-2xl">Let’s Build Your VR Experience</p>
      </div>
      <form className="mt-8 flex flex-col gap-4 md:mt-20" onSubmit={handleSubmit}>
        <div className="flex w-full items-center justify-between gap-x-5">
          <div className="w-full">
            <Input
              placeholder="Email"
              className="w-full"
              value={state.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('email', e.target.value)}
            />
            <ErrorText errorMessage={state.errors.email} />
          </div>
        </div>
        <div>
          <Textarea
            placeholder="Message"
            value={state.message}
            onChange={(e) => handleChange('message', e.target.value)}
          />
          <ErrorText errorMessage={state.errors.message} />
        </div>
      </form>
      <div className="mt-4 flex w-full justify-center md:mt-5">
        <Button variant="filled" type="submit" className="h-10 w-full text-sm md:h-14 md:w-1/3 md:text-2xl">
          Send us
        </Button>
      </div>
    </div>
  );
}
