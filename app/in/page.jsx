import React from 'react'
import './style.css'

function page() {
  return (
    <div>
<div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Log in</title>
  <link rel="stylesheet" href="style.css" />
  <header>
    <h1>Mascot</h1>
  </header>
  <section className="container">
    <section className="left" />
    <section className="right">
      <div className="box">
        <form>
          <input type="email" name="email" id={1} placeholder="Email" className="text-box" />
          <input type="password" name="pass" id={2} placeholder="Password" className="text-box" />
          <input type="submit" defaultValue="Log in" className="submit" />
          <div className="check">
            <input type="checkbox" name="check" id="check" />
            <label htmlFor="check">Remember me.</label>
          </div>
          <a href="#">Forget password?</a>
        </form>
      </div>
    </section>
  </section>
</div>

    </div>
  )
}

export default page