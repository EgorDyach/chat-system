import Add from "../img/AddAvatar.png"
const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Expert chat</span>
                <span className="title">Login</span>
                <form action="">
                    <input type="email" placeholder="email" />
                    <input type="passworld" placeholder="password" />
                    <button>Login</button>
                </form>
                <p>Don't have an account? Register</p>
            </div>
        </div>
    );
}

export default Login;

