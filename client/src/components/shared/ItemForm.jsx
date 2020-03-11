import React from 'react'

const ItemForm = ({
  item,
  handleSubmit,
  handleChange,
  cancelPath,
  history
}) => (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          placeholder='A vetted item.'
          value={item.title}
          name='title'
          required
          onChange={handleChange}
        />

        <label>Image Link</label>
        <input
          placeholder='http://acoolitem.com'
          value={item.image_url}
          name='image_url'
          required
          onChange={handleChange}
        />

        <label>Product Description </label>
        <input
          placeholder='A very nice product'
          value={item.description}
          name='description'
          required
          onChange={handleChange}
        />

        <label>Condition</label>
        <input
          placeholder='New, slightly used, used, or needs repair'
          value={item.condition}
          name='condition'
          required
          onChange={handleChange}
        />

        <label>Price</label>
        <input
          placeholder='$150.00'
          value={item.price}
          name='price'
          required
          onChange={handleChange}
        />

        <label>Color</label>
        <input
          placeholder='Black and red'
          value={item.color}
          name='color'
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

export default ItemForm