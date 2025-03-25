export default function Registro() {

  const Styles = {
    color: "#42a5f5",
    fontSize: "1rem"
  };

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
                    <li class="menu-h-list"><a href="/" class="menu-h-list-a">Inicio de Sesion</a></li>
                </ul>
            </nav>
        </header>
        <section id="container">
               <section class="inicio-sesion">
               <form action="register"  method="get" class="loginform">
              <h1>Registro</h1>
              <input class="input-form" type="text" name="name" pattern="\b[a-zA-Z]{3,15}\b" placeholder="Nombre" required/>
              
            <input class="input-form" type="text" name="lastName" pattern="\b[a-zA-Z]{3,15}\b" placeholder="Apellido" required/>
            <input class="input-form" name="email" type="email" placeholder="Correo Electrónico" required/>
            <label style={Styles}>Tipo de usuario</label><br/>
                <input  type="radio" name="typeuser" value="Super"/>
                    <label for="Super">Super</label>
                <input  type="radio" name="typeuser" value="Básico"/>
                     <label for="Básico">Básico</label>
            <input class="input-form"  name="key" type="password" placeholder="Contraseña" required maxlenght="15"/>
            
            <button type="submit" title="Registrar" name="Ingresar">Registrar</button>
            </form>
            <div class="newUser">
            <p>¿Ya tienes cuenta? <a href="/">Iniciar Sesion</a></p>
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
