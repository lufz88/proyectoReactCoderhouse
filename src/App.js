import "./App.css";
import Navbar from "./Navbar";
import { Home } from "./Home";
import Footer from "./Footer";

// la forma de ejecutar la funcion en react es la siguiente: <Navbar />. Le vamos a llamar "componentes que se estan renderizando"

function App() {
  return (
    <div className="App">
      <Navbar />{" "}
      {/*se usan mayusculas porque si se intenta tomar como una etiqueta html */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;

//todo lo que quiera ver en mi aplicacion debe estar dentro de la funcion app.
// cada componente debo exportarlo en su archivo e importarlo en el archivo donde quiero usarlo

/* maneras de exportar:
  export por defecto -  puedo tener uno solo por componente
  export default [nombre de la funcion]

  forma de importar: 
  import [nombre que le doy] from "ruta del archivo"

  export nombrado - puedo tener varios por componente
  export [aqui defino la funcion]

  forma de importar:
  import {nombre de la funcion, arreglo o lo que sea} from "ruta del archivo";
  el import me lo manda como objeto y yo lo desestructuro usando las llaves. Así puedo importar varias cosas a la vez desde un archivo
*/
