import React, {useState} from 'react'

export const Update = () => {

  const [book, setBook] = useState({
     title: "",
     desc: "",
     price: null,
     cover: "",
  })
  const handleChange = (e) => {
       setBook((prev) => ({...prev, [e.target.name] : [e.target.value]}))
  }
  return (
    <>
      <div className="form">
         <h1>Update Book</h1>
         <div>
              <input type="text" placeholder='title' name='title' onChange={handleChange} />
         </div>
         <div>
              <input type="text" placeholder='desc' name='desc' onChange={handleChange} />
         </div>
         <div>
              <input type="number" placeholder='price' name='price' onChange={handleChange} />
         </div>
         <div>
              <input type="text" placeholder='cover' name='cover' onChange={handleChange} />
         </div>
      </div>
    </>
  )
}
export default Update