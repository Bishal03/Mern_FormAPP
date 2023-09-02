import React from 'react'

const sucess = () => {
  return (
    <div style={{
        backgroundColor:"#ececec"
    }}>
        <div style={{
            width:'640px',
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:"none",
            background:"white"

        }}>
            <h1>Thank you for submitting</h1>
            <p>we will be getting back to you very soon</p>
            <p><a href="/">Go back to home page.</a></p>
        </div>
    </div>
  )
}

export default sucess