import Add from "../img/AddAvatar.png"
const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Expert chat</span>
                <span className="title">Register</span>
                <form action="">
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="email" />
                    <input type="passworld" placeholder="password" />
                    <input style={{display: 'none'}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>Do you have an account? Login</p>
            </div>
        </div>
    );
}

export default Register;

