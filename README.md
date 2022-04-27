# Mi_gestion_de_cursos_-_LTG

<h1>CLONANDO / FORK - EL PROYECTO</h1>
  <ol>
    <p> Una vez descargado el proyecto debes instalar las dependencia que estan en el package.json
      (antes debes tener instalado npm)</p>
    <li> $npm install</li><br>
    <p> Para levantar el servidor solo deber ingresar el comando a continuacion. Ademas el servidor es levantado
      mediante nodemon (como desarrollo, dev) para ver de inmediato cualquier cambio)</p>.
    <li> $npm start</li><br>
    <p><b>NOTA: </b></p>
    <li>Se modifico y agrego en archivo index.html lo sgte<br>
       en la funcion "function prepararCurso(i, id)" se agrego slice<br>
       quedando ->  <b>fechaInicio.value = cursos[i].fecha.slice(0, -14) </b><br>
       se acorta fecha para coincidir formato en form / tambien se puede hacer con una query/sql<br><br>     
    </li> 
    <li>Se agrego en la funcion "function editarCurso(id)" los sgte  </li>
    se agrega una <b>id</b> al objeto, debido a que no tenia y causaba error
   
  </ol>
