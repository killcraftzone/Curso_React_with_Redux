import React from "react";

import Piloto from "./components/basicos/Piloto";
import Parametro from "./components/basicos/Parametro";
import Fragmento from "./components/basicos/Fragmento";

export default () => (

    <div id="app">
        <h1>Fundamentos React  (Arrow function _)</h1>
        <Fragmento />
        <Parametro
            titulo="Situacao do Aluno"
            aluno="Pires"
            nota={9.7}
        />
        <Piloto></Piloto>
    </div>

);

