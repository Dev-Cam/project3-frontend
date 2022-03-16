


function Login() {


  return(
    <div className="login-form">
      <h2>Enter Pin</h2>
      <form>
        <input className="pin-input" type="text"></input>
        <input className="pin-input" type="text"></input>
        <input className="pin-input" type="text"></input>
        <input className="pin-input" type="text"></input>
        <button onSubmit>Login</button>
      </form>
    </div>

  )
}

export default Login;