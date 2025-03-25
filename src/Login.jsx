import React, { useState } from 'react'

export default function Login() {

    return (
        <html>
            <header id="main-header">

            <a id="logo-header" href="index.jsp">
                <span class="site-name">Stockwise</span>
                <span class="site-desc">Licencia / Ayuda / Preguntas Frecuentes</span>
            </a>

            <nav class="menu-h">
                <ul class="menu-h-style">
                    <li class="menu-h-list"><a href="#" class="menu-h-list-a">Contactos</a></li>
                    <li class="menu-h-list"><a href="#" class="menu-h-list-a">Acerca de</a></li>
                    <li class="menu-h-list"><a href="registration.jsp" class="menu-h-list-a">Registrate</a></li>
                </ul>
            </nav>
        </header>
        <section id="container">
                    <section class="inicio-sesion">
                        <form action="login" method="get" class="loginform">
                            <img src="assets/check.svg" class="list_arrow" width="15" height="15"></img>
                            <h1>INICIAR SESION</h1>
                            <input class="input-form" type="text" name="user" placeholder="Usuario" id="usuario" required />
                            <input class="input-form" name="key" type="password" placeholder="Contrasena" id="contraseña" required />
                            <button type="submit" title="Ingresar" name="Ingresar">Ingresar</button><br />
                            <p class="login-divider">o inicia con</p>
                            <section class="social-media">
                                <ul class="social-media-icons">
                                    <li class="google"><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                </ul>
                                <label class="alert">El correo debe ser empresarial</label>
                            </section>
                        </form>

                        <div class="newUser">
                            <p>¿Necesitas una cuenta?<a href="registration.jsp">Registrarse</a></p>
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
