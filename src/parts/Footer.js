import React from "react"

const Footer = props => (
  <div className="container">
    <div className="d-flex justify-content-center" style={{ margin: "2rem" }}>
      Copyright 2021 {props.copyright} - <a href='https://cantik.neocities.org' title='Cantik' target='_blank'>Cantik</a> - <a href='https://hariasia.co.vu' title='HariAsia' target='_blank'>HariAsia</a> - <a href='https://brajag.netlify.app/type-approval-indonesia/' title='Type Approval Indonesia' target='_blank'>Type Approval Indonesia</a> 
    </div>
  </div>
)

export default Footer
