import React from 'react'



const SubscribeForm = ({
subscribe,
subscriber,
handleSubmit,
handleChange,
cancelPath,
history
}) => (
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
        placeholder='First Name'
        value={subscriber.first_name}
        name='first_name'
        required
        onChange={handleChange}
        />
        <label>Last Name</label>
        <input
        placeholder='Last Name'
        value={subscriber.last_name}
        name='last_name'
        required
        onChange={handleChange}
        />
        <label>Email</label>
        <input
        placeholder='Email'
        value={subscriber.email}
        name='email'
        required
        onChange={handleChange}
        />
        <button type='submit'>Submit</button>
        <button className='danger' onClick={() => history.push(cancelPath)}>
        Cancel
        </button>
    </form>
    </div>
)

export default SubscribeForm