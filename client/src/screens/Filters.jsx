import React from 'react'

export default function Filters(props) {

  const { toggleHiddenColor,
    createFilterColor,
    isHiddenColor,
    toggleHiddenCondition,
    toggleHiddenFilter,
    changeColor,
    handleSubmit,
    value,
    handleChange,
    toggleHiddenPrice,
    createFilterPrice,
    isHiddenFilter,
    isHiddenCondition,
    createFilterCondition,
    isHiddenPrice,
    handleMode,
    isLight } = props

  return (
    <div className=''>
      <button onClick={handleMode} id="toggleButton">
        {isLight ? "Dark" : "Light"} Mode
    </button>
      <div className='buttons-container'>
        <div className='button-subcontainer1'>
          <button onClick={(e) => toggleHiddenFilter(e)}>Filter</button>
          {!isHiddenFilter && (
            <>
              <button onClick={(e) => toggleHiddenColor(e)}>Color</button>
              {!isHiddenColor && createFilterColor()}
              <button onClick={(e) => toggleHiddenCondition(e)
              }>Condition</button>
              {!isHiddenCondition && createFilterCondition()}
              <button onClick={(e) => toggleHiddenPrice(e)}>Price</button>
              {!isHiddenPrice && createFilterPrice()}
            </>
          )}
          <button onClick={changeColor}>Reset</button>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <label> Sort
              <select value={value} onChange={handleChange}>
                <option value="AZ">A to Z</option>
                <option value="ZA">Z to A</option>
                <option value="highestFirst">High to Lowest</option>
                <option value="lowestFirst">Lowest to Highest</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  )
}
