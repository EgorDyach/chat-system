import Add from "../img/AddAvatar.png"
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useState } from "react";
const Login = () => {

    const [err, setErr] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(123)
        const email = e.target[0].value
        const password = e.target[1].value
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/')
        } catch (err) {
            setErr(true)
            console.log(err)
        }


    }

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Expert chat</span>
                <span className="title">Вход</span>
                <form action="" onSubmit={handleSubmit}>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="Пароль" />
                    <button>Войти</button>
                    {err && <span>Что-то пошло не так...</span>}

                </form>
                <p>Нет аккаунта? <Link to={"/register"}>Зарегестрироваться</Link></p>
            </div>
        </div>
    );
}

export default Login;

