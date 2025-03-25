/*Debemos importar las imagenes SVG que necesitamos utilizar en nuestro componente "panel"*/
import menu from '../assets/menu.svg';
import doc from '../assets/documents.svg';
import est from '../assets/stadistics.svg';
import stock from '../assets/inventory.svg';
import notif from '../assets/notification.svg';
import arrow from '../assets/arrow.svg'

/*Una vez terminamos de importar, procedemos a realizar nuestra funcion o componente que retornará 
la vista de panel*/

function panel() {
    
   /*Procedemos con la codificacion tipo HTML para la creacion de nuestro componente.
     
     Hacemos uso de los estilos desarrollados en el archivo index.css

     */


  return (
   <html>
        <header id="main-header">
        
            <a id="logo-header" href="panel.jsp">
                <span class="site-name">Stockwise</span>
                <span class="site-desc">Licencia / Ayuda / Preguntas Frecuentes</span>
            </a>
        
            <nav class="menu-h">
                <ul class="menu-h-style">
                    <li class="menu-h-list"><a href="#" class="menu-h-list-a">Contactos</a></li>
                    <li class="menu-h-list"><a href="#" class="menu-h-list-a">Acerca de</a></li>
                    <li class="menu-h-list"><a href="/" class="menu-h-list-a">Salir</a></li>
                </ul>
            </nav>
        </header>
<section id="container">
       <nav class="menu-v">
            <ul class="list">

                <li class="list_item">
                    <div class="list_button">
                        <img src={menu} class="list_img" title="not found"/>
                        <a href="/Panel" class="nav_link">Inicio</a>
                    </div>
                </li>
                <li class="list_item list_item--click">
                    <div class="list_button list_button--click">
                        <img src={doc} class="list_img"/>
                        <a href="#" class="nav_link">Documentos</a>
                        <img src={arrow} class="list_arrow"/>
                    </div>
                    <ul class="list_show">
                        <li class="list_inside">
                             <a href="facturas.jsp" class="nav_link nav_link--inside">Todas las facturas</a>
                         </li>

                         <li class="list_inside">
                              <a href="FacturaVentas.jsp" class="nav_link nav_link--inside">Ventas</a>
                         </li>

                        <li class="list_inside">
                           <a href="FacturaCompra.jsp" class="nav_link nav_link--inside">Compras</a>
                        </li>
                   </ul>
                </li>
                <li class="list_item">
                    <div class="list_button">
                        <img src={est} class="list_img"/>
                        <a href="#" class="nav_link">Estadisticas</a>
                    </div>
            </li>
            <li class="list_item">
                <div class="list_button">
                    <img src={stock} class="list_img"/>
                    <a href="#" class="nav_link">Inventario</a>
                </div>
            </li>
                <li class="list_item list_item--click">
                    <div class="list_button list_button--click">
                        <img src={notif} class="list_img"/>
                        <a href="#" class="nav_link">Notificaciones</a>
                        <img src={arrow} class="list_arrow"/>
                    </div>
                      <ul class="list_show">
                             <li class="list_inside">
                                  <a href="#" class="nav_link nav_link--inside">Mensaje Nuevo</a>
                              </li>

                              <li class="list_inside">
                                   <a href="#" class="nav_link nav_link--inside">Mensaje Nuevo</a>
                              </li>

                             <li class="list_inside">
                                <a href="#" class="nav_link nav_link--inside">Mensaje Nuevo</a>
                             </li>
                        </ul>
                    </li>
            </ul>
            
       </nav>
    <section id="main-content"></section>

</section>
        <footer id="main-footer">
            <p>&copy;2014 <a href="#">Stockwise</a>
            </p>
        </footer>

        <script src="main.js"></script>

   </html>
  )
}

export default panel
