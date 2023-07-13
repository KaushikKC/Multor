import React, { useState } from 'react'

function BookingForm() {
    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bookingType, setBookingType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation here
    console.log('Form submitted:', { firstName, lastName, email, phone, bookingType });
  };

  const validateEmail = (email) => {
    // Simple email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <div className='w-[400px] rounded-md p-8 h-[670px] bg-[#152F2E] flex flex-col items-center'>
        <div className='text-white space-y-8 flex flex-col text-center items-center'>
            <h1 className='text-4xl font-bold'>Schedule an Appointment</h1>
            <p>Here, let visitors know what will happen when they complete your form.</p>
        </div>
    <form onSubmit={handleSubmit} className='flex-col flex'>
      <label>
        
        <input
        className='w-[300px] h-[38px] my-5 rounded-xl p-2'
          type="text"
          placeholder='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>

      <label>
        
        <input
        className='w-[300px] h-[38px] my-5 rounded-xl p-2'
          type="text"
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>

      <label>
       
        <input
        className='w-[300px] h-[38px] my-5 rounded-xl p-2'
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        
        <input
        className='w-[300px] h-[38px] my-5 rounded-xl p-2'
          type="tel"
          placeholder='Phone Number'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>

      <label>
        
        <select className='w-[300px] h-[38px] my-5 rounded-xl p-2' value={bookingType} onChange={(e) => setBookingType(e.target.value)} required>
          <option value="">-- Type of Booking --</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </label>

      <button className='px-4 py-2 bg-orange-700 rounded-xl mt-2 text-white font-semibold' type="submit">Submit</button>
    </form>
    </div>
  )
}

export default BookingForm