import React, { useEffect } from 'react'

function Footer() {

  useEffect(() => {
      document.querySelector("#year").innerHTML = new Date().getFullYear();
  },[])

  return (
    <footer>
          <img src="logo.svg" alt="" />
          <span>
              Made with Love and <span>All Rights Reserved. <strong id="year"></strong> </span>
          </span>
    </footer>
  )
}

export default Footer
