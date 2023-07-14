import React, { useState } from 'react';

function BookingForm() {
  // State variables
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bookingType, setBookingType] = useState('');
  const [popUp, setPopUp] = useState(false);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation here
    setPopUp(true);
  };

  // Close pop-up and reset form fields
  const handleClose = () => {
    setPopUp(false);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setBookingType('');
  };

  // Email validation function
  const validateEmail = (email) => {
    // Simple email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="md:w-[400px] w-[350px] rounded-md p-8 h-[670px] bg-[#152F2E] flex flex-col items-center">
      {/* Header */}
      <div className="text-white space-y-8 flex flex-col text-center items-center">
        <h1 className="text-4xl font-bold">Schedule an Appointment</h1>
        <p>Here, let visitors know what will happen when they complete your form.</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex-col flex">
        <label>
          <input
            className="w-[300px] h-[38px] my-5 rounded-xl p-2"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>

        <label>
          <input
            className="w-[300px] h-[38px] my-5 rounded-xl p-2"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>

        <label>
          <input
            className="w-[300px] h-[38px] my-5 rounded-xl p-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          <input
            className="w-[300px] h-[38px] my-5 rounded-xl p-2"
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>

        <label>
          <select
            className="w-[300px] h-[38px] my-5 rounded-xl p-2"
            value={bookingType}
            onChange={(e) => setBookingType(e.target.value)}
            required
          >
            <option value="">-- Type of Booking --</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </label>

        <button className="px-4 py-2 bg-orange-700 rounded-xl mt-2 text-white font-semibold" type="submit">
          Submit
        </button>
      </form>

      {/* Pop-up */}
      {popUp && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-300/50">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#305753] outline-none focus:outline-none">
                <div className="md:w-[700px] w-[380px] px-2 h-[400px] flex flex-col justify-center items-center space-y-5 text-white">
                  <h1 className="text-3xl text-center font-bold">You Have Submitted the Form</h1>
                  <p>
                    <span className="font-semibold mr-2">First Name:</span> {firstName}
                  </p>
                  <p>
                    <span className="font-semibold mr-2">Last Name:</span> {lastName}
                  </p>
                  <p>
                    <span className="font-semibold mr-2">Email:</span> {email}
                  </p>
                  <p>
                    <span className="font-semibold mr-2">Phone:</span> {phone}
                  </p>
                  <p>
                    <span className="font-semibold mr-2">Booking Type:</span> {bookingType}
                  </p>
                  <button className="px-4 py-2 bg-orange-700 rounded-xl mt-2 text-white font-semibold" onClick={handleClose}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BookingForm;
