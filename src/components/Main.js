import React, { useState } from "react";

function Main() {
  return <main>
    <table cellpadding="10" border="1">
    <thead>
        <tr>
            <th>Jogos</th>
            <th><img src="https://livrariacultura.vteximg.com.br/arquivos/ids/15854794-475-475/31001158.jpg?v=637123891888670000" alt="God of war" width="50%" height="50%"></th>
            <th><img src="https://http2.mlstatic.com/gta-5-gta-v-ps4-pronta-entrega-em-portugus-midia-fisica-D_NQ_NP_629809-MLB32515401168_102019-F.jpg" alt="GTA V" width="20%" height="30%"></th>
            <th><img src="https://images-na.ssl-images-amazon.com/images/I/71sbvyOG9mL._AC_SL1020_.jpg" alt="Read Demption" width="20%" height="25%"></th>
            <th><img src="https://cdn.awsli.com.br/600x450/241/241991/produto/7314376/0ea2522c8f.jpg" alt="Bloodborne" width="50%" height="50%"></th>
            <th><img src="https://s3.amazonaws.com/comparegame/thumbnails/38026/large.jpg" alt="The Witcher" width="50%" height="50%"></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Nome:</td>
            <td>God of War</td>
            <td>GTA V</td>
            <td>Red Dead Redemption II</td>
            <td>Bloodborne</td>
            <td>The Witcher</td>
        </tr>
        <tr>
            <td>Desenvolvedor:</td>
            <td>Santa Monica Studio</td>
            <td>Rockstar North</td>
            <td>Rockstar Studios</td>
            <td>From Software</td>
            <td>CD Projekt Red</td>
        </tr>

        <tr>
            <td>Genero:</td>
            <td>Unissexx</td>
            <td>Unissexx</td>
            <td>Unissexx</td>
            <td>Unissexx</td>
            <td>Unissexx</td>
        </tr>
        <tr>
            <td>Estilo:</td>
            <td>Ação-aventura</td>
            <td>Ação-aventura</td>
            <td>Ação-aventura</td>
            <td>Ação-aventura, RPG sombrio de progressão </td>
            <td>RPG eletrônico de ação</td>
        </tr>

        <tr>
            <td>Modo de Jogo:</td>
            <td>Um jogador</td>
            <td>Um jogador, Multijogador</td>
            <td>Um jogador, Multijogador</td>
            <td>Um jogador, Multijogador</td>
            <td>Um jogador</td>
        </tr>
    </tbody>
</table>

  </main>;
}

export default Main;
