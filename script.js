var rasc_salvos = [];


var ContainerSalvos = document.querySelector('.container_salvos');
var texto_salvos = document.querySelectorAll('.rascs_teste');


document.querySelector('input[type=submit]').addEventListener('click', () => {
    let titulo_salvo = document.querySelector('input[type=text]').value;
    let texto_salvo = document.querySelector('textarea').value;

    let posicao = Array.prototype.map.call(rasc_salvos, ({titulo})=> titulo);
    // console.log(teste);

    if(posicao.includes(document.querySelector('input[type=text]').value)){

        let indice_texto = rasc_salvos.findIndex(index => index.titulo ==
        document.querySelector('input[type=text]').value);
        
        rasc_salvos[indice_texto].texto = document.querySelector('textarea').value;
    }
    else{
        rasc_salvos.push({
            titulo: titulo_salvo,
            texto: texto_salvo,
        });
    };

    ContainerSalvos.innerHTML = "";
    rasc_salvos.map((rasc, pos) => {
        ContainerSalvos.innerHTML += `
        <div class="rascs_teste">
            <div class="bloco_salvo">
                <Img class="seta" data-pos="${pos}" src="seta.svg">
                <div class="num_titu">
                    <p class="num">`+(pos + 1)+`</p>
                    <p class="titulo_salvo">`+(rasc.titulo)+`</p>
                </div>
                <div class="botoes">
                    <button class="editar" data-pos="${pos}" type="button">Editar</button>
                    <button class="excluir" data-pos="${pos}" type="button">Excluir</button>
                </div>
            </div>
            <div class="cont_p">
                <h3 class="titu_hide" data-pos="${pos}"></h3>
                <p class="text_hide" data-pos="${pos}"></p>
            </div>
        </div>
        `;
        // console.log(rasc);
    });

});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('editar')) {
        const pos = event.target.dataset.pos;

        document.querySelector('input[type=text]').value = rasc_salvos[pos].titulo;
        document.querySelector('textarea').value = rasc_salvos[pos].texto;

        // rasc_salvos.map((rasc, pos) => {
        //     console.log(rasc);
        // });
    }
});

document.addEventListener('click', (event)=>{
    if(event.target.classList.contains('excluir')){
        var el = document.querySelectorAll('.rascs_teste');
        const pos2 = event.target.dataset.pos;

        el[pos2].remove();
        let x = rasc_salvos.splice(pos2, 1)

        ContainerSalvos.innerHTML = "";
        rasc_salvos.map((rasc, pos) => {
            ContainerSalvos.innerHTML += `
            <div class="rascs_teste">
                <div class="bloco_salvo">
                    <Img class="seta" data-pos="${pos}" src="seta.svg">
                    <div class="num_titu">
                        <p class="num">`+(pos + 1)+`</p>
                        <p class="titulo_salvo">`+(rasc.titulo)+`</p>
                    </div>
                    <div class="botoes">
                        <button class="editar" data-pos="${pos}" type="button">Editar</button>
                        <button class="excluir" data-pos="${pos}" type="button">Excluir</button>
                    </div>
                </div>
                <div class="cont_p">
                    <h3 class="titu_hide" data-pos="${pos}"></h3>
                    <p class="text_hide" data-pos="${pos}"></p>
                </div>
            </div>
            `;
            // console.log(rasc);
        });
        
        // console.log(rasc_salvos);
    }
});

document.addEventListener('click', (event)=>{
    

    if(event.target.classList.contains('seta')){
        let pos3 = event.target.dataset.pos;
        var container_preview = document.querySelectorAll('.cont_p');
        var preve_titulo = document.querySelectorAll('.cont_p h3');
        var preve_texto = document.querySelectorAll('.cont_p p');
        let seta = document.querySelectorAll('.seta');
        
        let preview = container_preview[pos3];
        let titu1 = preve_titulo[pos3];
        let texto1 = preve_texto[pos3];
        let seta1 = seta[pos3];

        preview.classList.toggle('show');
        seta1.classList.toggle('rotate');
        titu1.innerHTML = rasc_salvos[pos3].titulo;
        texto1.innerHTML = rasc_salvos[pos3].texto;
    }
});

document.querySelector('input[value=Apagar').
addEventListener('click', ()=>{
    document.querySelector('textarea').value = " "
})