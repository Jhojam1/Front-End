import './Login.css'

function Login() {

    return (
        <>
            <div className="Formulario">
                <form>
                    <div className="Titulo">
                        <h1>Iniciar Sesión</h1>
                    </div>
                    <div className="Campo">
                        <label htmlFor="user">Usuario:</label>
                        <input type="text" id="user" required/>
                    </div>
                    <div className="Campo">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" required/>
                    </div>
                    <div className="BotonesYCheckbox">
                        <button type="submit">Sign Up</button>
                        <div className="Checkbox">
                            <label>
                                <input type="checkbox"/>
                                Recuérdame
                            </label>
                        </div>
                    </div>
                    <div className="OlvidasteContra">
                        <a href="/Recuperacion">¿Olvidaste tu contraseña?</a>
                    </div>
                    <div className="registro">
                    <p>¿No tienes cuenta aún? <a href="/Registro">Registrar</a></p>
                    </div>
                    </form>
            </div>
        </>
    )
}

export default Login
