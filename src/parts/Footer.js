import React from "react"

const Footer = props => (
  <div className="container">
    <div className="d-flex justify-content-center" style={{ margin: "2rem" }}>
      Copyright 2021 {props.copyright} - <a href='https://cantik.neocities.org' target='_blank'>Cantik</a> 
    </div>
  </div>
)

export default Footer
