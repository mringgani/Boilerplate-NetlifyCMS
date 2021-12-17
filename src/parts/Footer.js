import React from "react"

const Footer = props => (
  <div className="container">
    <div className="d-flex justify-content-center" style={{ margin: "2rem" }}>
      Copyright 2021 {props.copyright} - <a href='https://hariasia.co.vu' title='HariAsia' target='_blank'>HariAsia</a>
    </div>
  </div>
)

export default Footer
