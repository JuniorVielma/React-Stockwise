export default function Login() {

    return (
        <html>
            <header id="main-header">

            <a id="logo-header" href="/">
                <span class="site-name">Stockwise</span>
                <span class="site-desc">Licencia / Ayuda / Preguntas Frecuentes</span>
            </a>

            <nav class="menu-h">
                <ul class="menu-h-style">
                    <li class="menu-h-list"><a href="#" class="menu-h-list-a">Contactos</a></li>
                    <li class="menu-h-list"><a href="#" class="menu-h-list-a">Acerca de</a></li>
                    <li class="menu-h-list"><a href="/Registro" class="menu-h-list-a">Registrate</a></li>
                </ul>
            </nav>
        </header>
        <section id="container">
                    <section class="inicio-sesion">
                        <form className="loginform">
                            <h1>INICIAR SESION</h1>
                            <input class="input-form" type="text" placeholder="Usuario" id="usuario" />
                            <input class="input-form" type="password" placeholder="Contrasena" id="contraseña" />
                            <a href="/Panel" class="btn btn-primary">
                                Ingresar
                            </a><br />
                            <p class="login-divider">o inicia con</p>
                            <section class="social-media">
                                <ul class="social-media-icons">
                                    <li class="google"><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                </ul>
                                <label class="alert">El correo debe ser empresarial</label>
                            </section>
                        </form>

                        <div class="newUser">
                            <p>¿Necesitas una cuenta?<a href="/Registro">Registrarse</a></p>
                        </div>

                    </section>
                </section>

                <footer id="main-footer">
                    <p>&copy;2014 <a href="#">Stockwise</a>
                    </p>
                </footer>
            </html>
  )
}
