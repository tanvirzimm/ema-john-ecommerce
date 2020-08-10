import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useAuth } from '../Login/useAuth';
import { useState } from 'react';

const Shipment = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);


  const auth = useAuth();


  
  


  return (

    <form className='hook-form' onSubmit={handleSubmit(onSubmit)}>

      <input name="name" defaultValue={auth.user.name}  ref={register({ required: true })} placeholder='Your name' />
      {

        errors.name && <span>name is required</span>

      }

      <input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder='Your Email'/>
      {

        errors.email && <span>email is required</span>

      }

      <input name="address1" ref={register({ required: true })} placeholder='Your Address Line 1'/>
      {

        errors.address1 && <span>Address Line 1 is required</span>

      }


      <input name="address2" ref={register} placeholder='Your Address Line 2'/>


      <input name="city" ref={register({ required: true })} placeholder='Your City'/>
      {

        errors.city && <span>city is required</span>

      }

      <input name="country" ref={register({ required: true })} placeholder='Your Country'/>
      {

        errors.country && <span>country is required</span>

      }


      <input name="zipcode" ref={register({ required: true })} placeholder='Your Zipcode'/>
      {

        errors.zipcode && <span>zipcode is required</span>

      }



      <input type="submit" />
    </form>
  );
};

export default Shipment;