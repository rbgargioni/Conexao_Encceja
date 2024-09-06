
//var menuArtes = document.getElementById("ARTES");
//menuArtes.style.display = "none";
//artesano1.style.display = "none";
//artesano2.style.display = "none";
//artesano3.style.display = "none";
//biologiano1.style.display = "none";
//valumes.style.display = "none";

        window.onload = function(){
            (function(d, script) {
                script = d.createElement('script');
                script.type = 'text/javascript';
                script.async = true;
                script.src = 'https://w.app/widget-v1/FyiWr0.js';
                d.getElementsByTagName('head')[0].appendChild(script);
            }(document));
        };   
  
        function searchMenu() {
            // Declarações
            const input = document.getElementById('searchInput').value.toUpperCase();
            const buttons = document.querySelectorAll('.botao-aulas');
      
            // Loop por cada botão e esconde aqueles que não correspondem à pesquisa
            buttons.forEach(button => {
              if (button.textContent.toUpperCase().indexOf(input) > -1) {
                button.style.display = '';
              } else {
                button.style.display = 'none';
              }
            });
          }
// Função que verifica o fragmento da URL para executar a função correspondente
function verificarFragmento() {
    // Obtém o fragmento da URL
    const fragmento = window.location.hash.substring(1); // Remove o '#'
    
    // Verifica se o fragmento está presente
    if (fragmento) {
        // Verifica se a função existe antes de chamá-la
        if (typeof window[fragmento] === 'function') {
            window[fragmento]();
        } else {
            console.error('Função não encontrada:', fragmento);
        }
    }
}
// função de cliques para compartilhamento 
// Artes//
function arte_antiga() { clickMenu1(); var secaoID = "arteantigav1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function arte_classica() { clickMenu1(); var secaoID = "arte_classica_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function arte_moderna() { clickMenu1(); var secaoID = "arte_moderna_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function arte_contemporanea() { clickMenu1(); var secaoID = "arte_contemporanea_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function cultura_artistica() { clickMenu1(); var secaoID = "cultura_artistica_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function cultura_artistica2() { clickMenu1(); var secaoID = "cultura_artistica2_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }



///BIOLOGIA 1

function origem_da_vida() { clickMenu2();  var secaoID = "origem_da_vida"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function citologia1() { clickMenu2();  var secaoID = "citologia_1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function citologia2() { clickMenu2();  var secaoID = "CITOLOGIA_II"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function bioquimica() { clickMenu2();  var secaoID = "bioquimicav1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

///Biologia 2
function imunologia() { clickMenu2();  var secaoID = "imunologia_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function reproducao_embriologia() { clickMenu2();  var secaoID = "reproducao_embriologia_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function biodiversidade() { clickMenu2();  var secaoID = "biodiversidade_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
///BIOLOGIA 3  
function seres_vivos() { clickMenu2();  var secaoID = "seres_vivos_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function classificacao_morfologia() { clickMenu2(); var secaoID = "classificacao_morfologia_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function fisiologia_reproducao() { clickMenu2();  var secaoID = "fisiologia_reproducao_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function zoologia() { clickMenu2();  var secaoID = "zoologia_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// BIOLOGIA 4
function microbiologia() { clickMenu2();  var secaoID = "microbiologia_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function anatomia_funcao() { clickMenu2();  var secaoID = "anatomia_funcao_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function corpo_humano() { clickMenu2();  var secaoID = "corpo_humano_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function meio_ambiente() { clickMenu2();  var secaoID = "meio_ambiente_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// BIOLOGIA 5
function evolucao() { clickMenu2();  var secaoID = "evolucao_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function genetica() { clickMenu2();  var secaoID = "genetica_biotec_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function genetica2() { clickMenu2();  var secaoID = "genetica2_Hereditariedade_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function ecologia() { clickMenu2();  var secaoID = "conceitos_biomas_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// BIOLOGIA 6
function ciclos_biogeoquimicos() { clickMenu2();  var secaoID = "ciclos_biogeoquimicos_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function relacoes_ecologicas() { clickMenu2();  var secaoID = "relacoes_ecologicas_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function biodiversidade_meioambiente() { clickMenu2();  var secaoID = "biodiversidade_meioambiente_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

///Educação fisica
function biomecanica_e_saude() { clickMenu3();  var secaoID = "BIOMECANICA_E_SAUDE_V1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function biomecanica_e_saude2() { clickMenu3();  var secaoID = "biomecanica_e_saude2_V2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function manifestacao() { clickMenu3();  var secaoID = "manifestacao2_v5"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function jogos_ludicidade() { clickMenu3();  var secaoID = "jogos_ludicidade_v4"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function manifestacao2() { clickMenu3();  var secaoID = "manifestacao2_v6"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function jogos_ludicidade_2() { clickMenu3();  var secaoID = "jogos_ludicidade_2_v6"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

///Educação Espanhol 
//Volume 1 
function interpretacao_textual() { clickMenu4();  var secaoID = "texto_para_interpretar_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretacao_argumentacao() { clickMenu4();  var secaoID = "interpretacao_argumentacao_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function anuncio_publicitario() { clickMenu4();  var secaoID = "anuncio_publicitario_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretacao_informativo() { clickMenu4();  var secaoID = "interpretacao_informativo_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
//Volume 2 
function interpretacao_poema() { clickMenu4();  var secaoID = "interpretacao_poema_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretacao_descricao() { clickMenu4();  var secaoID = "interpretacao_descricao_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretacao_lem() { clickMenu4();  var secaoID = "interpretacao_lem_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
//Volume 3 
function interpretacao_publicitario() { clickMenu4();  var secaoID = "interpretacao_publicitario_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretacao_texto_informativo() { clickMenu4();  var secaoID = "interpretacao_texto_informativo_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretacao_descritivo() { clickMenu4();  var secaoID = "interpretacao_descritivo_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretacao_variacao_linguistica() { clickMenu4();  var secaoID = "interpretacao_variacao_linguistica_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
//Volume 4 
function interpretacao_argumentativo() { clickMenu4();  var secaoID = "interpretacao_argumentativo_v4"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretacao_expressoes_idiomaticas() { clickMenu4();  var secaoID = "interpretacao_expressoes_idiomaticas_v4"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretacao_expressoes_idiomaticas2() { clickMenu4();  var secaoID = "interpretacao_expressoes_idiomaticas2_v4"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
//Volume 5 
function generos_jornalistico() { clickMenu4();  var secaoID = "generos_jornalistico_v5"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function generos_informativo() { clickMenu4();  var secaoID = "generos_informativo_v5"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function generos_linguagens() { clickMenu4();  var secaoID = "generos_linguagens_v5"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function generos_argumentativo() { clickMenu4();  var secaoID = "generos_argumentativo_v5"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
//Volume 6 
function interpretacao_textos() { clickMenu4();  var secaoID = "interpretacao_textos_v6"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretacao_literarios() { clickMenu4();  var secaoID = "interpretacao_literarios_v6"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretacao_charge() { clickMenu4();  var secaoID = "interpretacao_charge_v6"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

///Educação FILOSOFIA
function conceitos_filosoficos() { clickMenu5();  var secaoID = "Conceitos_FilosóficosV1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function pre_socraticos() { clickMenu5();  var secaoID = "Pre_socraticosv1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function socrasticos() { clickMenu5();  var secaoID = "socrasticos_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// Filosofia volume 2 
function filosofia_classica() { clickMenu5();  var secaoID = "filosofia_classica_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function filosofia_medieval() { clickMenu5();  var secaoID = "filosofia_medieval_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function filosofia_moderna() { clickMenu5();  var secaoID = "filosofia_moderna_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// Volume 3 
function filosofia_conteporanea() { clickMenu5();  var secaoID = "filosofia_conteporanea_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function filosofia_politica() { clickMenu5();  var secaoID = "filo_politica_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function filosofia_etica() { clickMenu5();  var secaoID = "filo_etica_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function escola_frankfurt() { clickMenu5();  var secaoID = "filo_escola_frankfurt_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

///FISICA 
function mru_e_mruv() { clickMenu6();  var secaoID = "MRU_E_MRUV_V1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function gravitacao() { clickMenu6();  var secaoID = "gravitacao_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function mc_e_obriquo() { clickMenu6();  var secaoID = "MC_E_OBLIQUO_V1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function optica() { clickMenu6();  var secaoID = "optica_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function ondulatoria() { clickMenu6();  var secaoID = "ondulatoria_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
///volume 2
function optica_geometrica() { clickMenu6();  var secaoID = "optica_geometrica_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function termologia() { clickMenu6();  var secaoID = "termologia_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function calorimetria() { clickMenu6();  var secaoID = "calorimetria_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function termodinamica() { clickMenu6();  var secaoID = "termodin_mica_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function dinamica() { clickMenu6();  var secaoID = "din_mica_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function dinamica2() { clickMenu6();  var secaoID = "din_mica2_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function hidrodinamica() { clickMenu6();  var secaoID = "hidrodin_mica_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
///volume 3 
function fisica_estatica() { clickMenu6();  var secaoID = "estatica_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function fisica_hidrostatica() { clickMenu6();  var secaoID = "fisica_hidrostatica_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function eletrodinamica() { clickMenu6();  var secaoID = "eletrodin_mica_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function fisica_eletrostatica() { clickMenu6();  var secaoID = "fisica_eletrostatica_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function eletrommagnetismo() { clickMenu6();  var secaoID = "fisica_eletromagnetismo_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function analise_dimensional() { clickMenu6();  var secaoID = "analise_dimencional_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function fisica_moderna() { clickMenu6();  var secaoID = "fisica_moderna_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

///Educação GEOGRAFIA 
function cartografia() { clickMenu7();  var secaoID = "CARTOGRAFIA_V1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function clima() { clickMenu7();  var secaoID = "clima_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geologia() { clickMenu7();  var secaoID = "GEOLOGIA_V1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geomorfologia() { clickMenu7();  var secaoID = "geomorfologia_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function recursos_hidricos() { clickMenu7();  var secaoID = "recursos_hidricos_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function dominios_morfoclimaticos() { clickMenu7();  var secaoID = "dominios_morfoclimaticos_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// volume 2
function geo_urbanizacao() { clickMenu7();  var secaoID = "geo_urbanizacao_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geo_industrializacao() { clickMenu7();  var secaoID = "geo_industrializacao_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function espaco_agrario() { clickMenu7();  var secaoID = "espaco_agrario_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function demografia() { clickMenu7();  var secaoID = "geo_demografia_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geografia_cultural() { clickMenu7();  var secaoID = "geo_cultural_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

/// Volume 3
function migracoes() { clickMenu7();  var secaoID = "geo_migracao_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geo_globalizacao() { clickMenu7();  var secaoID = "geo_globalizacao_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

function geopolitica_externa() { clickMenu7();  var secaoID = "geopolitica_externa_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geopolitica_interna() { clickMenu7();  var secaoID = "geopolitica_interna_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function questoes_ambientais() { clickMenu7();  var secaoID = "questoes_ambientais_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function fontes_energia() { clickMenu7();  var secaoID = "fontes_energia_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function tecnologia_trasporte() { clickMenu7();  var secaoID = "tecnologia_trasporte_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geo_relacoes_trabalho() { clickMenu7();  var secaoID = "geo_relacoa_trabalho_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

///Educação HISTORIA  
function antiguidade() { clickMenu8();  var secaoID = "Antiguidade_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function grecia_roma_antiga() { clickMenu8();  var secaoID = "grecia_roma_antiga_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function periodo_medieval_europeu() { clickMenu8();  var secaoID = "periodo_medieval_europeu_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function modernidade_europeia() { clickMenu8();  var secaoID = "modernidade_europeia_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function era_das_navegacoes() { clickMenu8();  var secaoID = "era_das_navegacoes_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function continente_africano() { clickMenu8();  var secaoID = "continente_africano_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// volume 2
function reformas_revolucao() { clickMenu8();  var secaoID = "reformas_revolucao_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function povos_originarios() { clickMenu8();  var secaoID = "povos_originarios_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function colonizacoes_pelo_atlantico() { clickMenu8();  var secaoID = "colonizacoes_pelo_atlantico_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function periodo_colonial_brasileiro() { clickMenu8();  var secaoID = "periodo_colonial_brasileiro_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function monarquias_nacionais() { clickMenu8();  var secaoID = "monarquias_nacionais_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function imperial_brasileiro() { clickMenu8();  var secaoID = "imperial_brasileiro_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function imperialismo_neocolonialismo() { clickMenu8();  var secaoID = "imperialismo_neocolonialismo_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// volume 3
function hist_brasil_republicano() { clickMenu8();  var secaoID = "hist_brasil_republicano_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function hist_era_vargas() { clickMenu8();  var secaoID = "hist_era_vargas_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function hist_guerras_mundiais() { clickMenu8();  var secaoID = "hist_guerras_mundiais_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function hist_ditadura_militar_brasileira() { clickMenu8();  var secaoID = "hist_ditadura_militar_brasileira_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function hist_breve_seculo_xx() { clickMenu8();  var secaoID = "hist_breve_seculo_xx_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function hist_brasil_redemocratizacao() { clickMenu8();  var secaoID = "hist_brasil_redemocratizacao_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function hist_desafios_contemporaneos() { clickMenu8();  var secaoID = "hist_desafio_contemporaneos_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

/// Educação INGLÊS 
function cartuns_charges() { clickMenu9();  var secaoID = "cartuns_charges_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function infograficos() { clickMenu9();  var secaoID = "infograficos_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function informacoes_conhecimento() { clickMenu9();  var secaoID = "informacoes_conhecimento_V1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// Volume 2 
function letras_musicas_ing() { clickMenu9();  var secaoID = "letras_musicas_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function textos_curtos_ing() { clickMenu9();  var secaoID = "textos_curtos_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function literatura_destaque() { clickMenu9();  var secaoID = "literatura_destaque_ing_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// Volume 3
function poema_e_proverbio_ing() { clickMenu9();  var secaoID = "poema_e_proverbio_ing_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function texto_variados() { clickMenu9();  var secaoID = "texto_variados_ing_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function texto_variados2() { clickMenu9();  var secaoID = "explorando_textos_variados_ing_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function texto_variados3() { clickMenu9();  var secaoID = "texto_variados_ing_v4"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

///Educação LITERATURA
function generos_literarios() { clickMenu10();  var secaoID = "generos_literarios_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function quinhentismo() { clickMenu10();  var secaoID = "quinhentismo_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function barroco() { clickMenu10();  var secaoID = "barroco_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function arcadismo_lit() { clickMenu10();  var secaoID = "arcadismo_lit_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function obras_literarias_lit() { clickMenu10();  var secaoID = "obras_literarias_lit_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
///  Volume 2
function romantismo_literatura() { clickMenu10();  var secaoID = "romantismo_literatura_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function realismo_naturalismo_lit() { clickMenu10();  var secaoID = "realismo_naturalismo_lit_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function parnasianismo_simbolismo() { clickMenu10();  var secaoID = "parnasianismo_simbolismo_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function pre_modernismo() { clickMenu10();  var secaoID = "pre_modernismo_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function obras_literarias2() { clickMenu10();  var secaoID = "literarias_representativas_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
// Volume 3  
function texto_literario_lit() { clickMenu10();  var secaoID = "texto_literario_lit_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function semana_arte_moderna() { clickMenu10();  var secaoID = "semana_arte_moderna_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geracao_30_45() { clickMenu10();  var secaoID = "geracao_30_45_lit"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function literatura_contemporanea() { clickMenu10();  var secaoID = "literatura_conteporanea_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function obras_literarias3() { clickMenu10();  var secaoID = "literarias_representativas_lit_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

///Educação MATEMÁTICA  
function dados_estatisticos() { clickMenu11();  var secaoID = "dados_estatisticos_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function areas_volumes() { clickMenu11();  var secaoID = "areas_volumes_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function taxas_inflacao() { clickMenu11();  var secaoID = "taxas_inflacao_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geometricas_funcoes_mat() { clickMenu11();  var secaoID = "geometricas_funcoes_mat_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function funcao_polinominais_mat() { clickMenu11();  var secaoID = "funcao_polinominais_mat_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geometria_espacial() { clickMenu11();  var secaoID = "geometria_espacial_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
///Volume 2
function porcentagem_proporcionalidade() { clickMenu11(); var secaoID = "porcentagem_proporcionalidade_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function progressoes_aritmeticas() { clickMenu11(); var secaoID = "progressoes_aritmeticas_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geometria_plana() { clickMenu11(); var secaoID = "geometria_plana_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function probabilidades_cotidiano() { clickMenu11(); var secaoID = "probabilidades_cotidiano_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function solidos_geometricos() { clickMenu11(); var secaoID = "solidos_geometricos_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function resolucao_problemas() { clickMenu11(); var secaoID = "resolucao_problemas_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
///Volume 3
function variacoes_grandezas() { clickMenu11();  var secaoID = "variacoes_grandezas_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function figuras_geometricas() { clickMenu11();  var secaoID = "figuras_geometricas_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function simples_compostos_cotidiano() { clickMenu11();  var secaoID = "simples_compostos_cotidiano_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function problemas_envolvendo_operacoes() { clickMenu11();  var secaoID = "problemas_envolvendo_operacoes_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function fenomenos_periodicos_reais() { clickMenu11();  var secaoID = "fenomenos_periodicos_reais_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function estatisticos_analisados_interpretados() { clickMenu11();  var secaoID = "estatisticos_analisados_interpretados_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function ladrilhamento_plano() { clickMenu11();  var secaoID = "ladrilhamento_plano_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function centrais_analise_tabelas() { clickMenu11();  var secaoID = "centrais_analise_tabelas_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

///Educação Português  
function adjetivo_pronome() { clickMenu12();  var secaoID = "adjetivo_pronome_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function verbos_adverbios() { clickMenu12();  var secaoID = "verbos_adverbios_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function figuras_linguagem() { clickMenu12();  var secaoID = "figuras_linguagem_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function pontuacao_port() { clickMenu12();  var secaoID = "pontuacao_port_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function variacao_linguistica_port() { clickMenu12();  var secaoID = "variacao_linguistica_port_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretaaoo_textual() { clickMenu12();  var secaoID = "interpretaaoo_textual_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// Volume 2
function sujeito_predicado_port() { clickMenu12();  var secaoID = "sujeito_predicado_port_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function coesao_coerencia_port() { clickMenu12();  var secaoID = "coesao_coerencia_port_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function coordenadas_subordinadas_port() { clickMenu12();  var secaoID = "coordenadas_subordinadas_port_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function tipos_texto_port() { clickMenu12();  var secaoID = "tipos_texto_port_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function variacao_linguistica_port() { clickMenu12();  var secaoID = "variacao_linguistica_port_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretacao_textual_port() { clickMenu12();  var secaoID = "interpretacao_textual_port_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

///Educação QUÍMICA
function propriedaes_da_materia() { clickMenu13();  var secaoID = "propriedaes_da_materia_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function estrutura_atomica() { clickMenu13();  var secaoID = "estrutura_atomica_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function tabela_periodica() { clickMenu13();  var secaoID = "tabela_periodica_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function ligacoes_quimicas_quim() { clickMenu13();  var secaoID = "ligacoes_quimicas_quim_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function funcoes_inorg_nicas() { clickMenu13();  var secaoID = "funcoes_inorg_nicas_V1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function reacoes_inorg_nicas() { clickMenu13();  var secaoID = "reacoes_inorg_nicas_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// Volume 2
function estequiometria_quim() { clickMenu13();  var secaoID = "estequiometria_quim_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function solucoes_quim() { clickMenu13();  var secaoID = "solucoes_quim_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function termoquimica_quim() { clickMenu13();  var secaoID = "termoquimica_quim_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function oxido_reducao_quim() { clickMenu13();  var secaoID = "oxido_reducao_quim_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function eletroquimica_quim() { clickMenu13();  var secaoID = "eletroquimica_quim_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function cinetica_quimica() { clickMenu13();  var secaoID = "cinetica_quimica_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function enquilibrios_quimicos() { clickMenu13();  var secaoID = "enquilibrios_quimicos_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// Volume 3
function enquilibrios_quimicos_v3() { clickMenu13();  var secaoID = "enquilibrios_quimicos_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function radioatividade_quimica() { clickMenu13();  var secaoID = "radioatividade_quimica_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function nomeclatura_funcao_org_nicas() { clickMenu13();  var secaoID = "nomeclatura_funcao_org_nicas_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function reacoes_org_nicas_quim() { clickMenu13();  var secaoID = "reacoes_org_nicas_quim_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function isomeria_quim() { clickMenu13();  var secaoID = "isomeria_quim_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function polimeros_quim() { clickMenu13();  var secaoID = "polimeros_quim_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function meio_ambiente_quim() { clickMenu13();  var secaoID = "meio_ambiente_quim_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

///Educação REDAÇÃO 
function variacao_linguistica() { clickMenu14();  var secaoID = "variacao_linguistica_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function redacao_generos_textuais() { clickMenu14();  var secaoID = "redacao_generos_textuais_V1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretacao_analise_textual() { clickMenu14();  var secaoID = "interpretacao_analise_textual_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function estrategias_argumentativas() { clickMenu14();  var secaoID = "estrategias_argumentativas_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

// volume 2
function variacao_linguistica() { clickMenu14();  var secaoID = "variacao_linguistica_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function tipos_generos_textuais() { clickMenu14();  var secaoID = "tipos_generos_textuais_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretacao_analise_textual_v2() { clickMenu14();  var secaoID = "interpretacao_analise_textual_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function estrategias_argumentativas_v2() { clickMenu14();  var secaoID = "estrategias_argumentativas_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
///Volume 3
function variacao_linguistica_v3() { clickMenu14();  var secaoID = "variacao_linguistica_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function tipos_generos_textuais_v3() { clickMenu14();  var secaoID = "tipos_generos_textuais_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretacao_analise_textual_v3() { clickMenu14();  var secaoID = "interpretacao_analise_textual_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function estrategias_argumentativas_v3() { clickMenu14();  var secaoID = "estrategias_argumentativas_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

///Educação SOCIOLOGIA  
function movimentos_sociais() { clickMenu15(); var secaoID = "movimentos_sociais_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function sociedade_contemporanea_v1() { clickMenu15();  var secaoID = "sociedade_contemporanea_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// Volume 2
function trabalho_sociedade_v2() { clickMenu15();  var secaoID = "trabalho_sociedade_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function teoria_politica_sociedade_v2() { clickMenu15();  var secaoID = "teoria_politica_sociedade_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// Volume 3 
function sociedade_cultura_popular_v3() { clickMenu15();  var secaoID = "sociedade_cultura_popular_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function povo_brasileiro_v3() { clickMenu15();  var secaoID = "povo_brasileiro_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }



/////////////////////Sons///////////////////////////////////////
const actx = new AudioContext();

function playSuccess() {
    const successNoise = actx.createOscillator();
    successNoise.frequency.value = 600;  // Definindo a frequência corretamente
    successNoise.type = "sine";
    successNoise.frequency.exponentialRampToValueAtTime(800, actx.currentTime + 0.05);
    successNoise.frequency.exponentialRampToValueAtTime(1000, actx.currentTime + 0.15);

    const successGain = actx.createGain();  // Declarando successGain corretamente
    successGain.gain.exponentialRampToValueAtTime(0.01, actx.currentTime + 0.3);

    const successFilter = actx.createBiquadFilter();  // Declarando successFilter corretamente
    successFilter.type = "bandpass";
    successFilter.Q.value = 0.01;

    successNoise.connect(successFilter).connect(successGain).connect(actx.destination);
    successNoise.start();
    successNoise.stop(actx.currentTime + 0.2);
}

function playError() {
    const errorNoise = actx.createOscillator();
    errorNoise.frequency.value = 400;  // Definindo a frequência corretamente
    errorNoise.type = "sine";
    errorNoise.frequency.exponentialRampToValueAtTime(200, actx.currentTime + 0.05);
    errorNoise.frequency.exponentialRampToValueAtTime(100, actx.currentTime + 0.2);

    const errorGain = actx.createGain();  // Declarando errorGain corretamente
    errorGain.gain.exponentialRampToValueAtTime(0.01, actx.currentTime + 0.3);

    errorNoise.connect(errorGain).connect(actx.destination);
    errorNoise.start();
    errorNoise.stop(actx.currentTime + 0.3);
}

//////////////////Teste Menu novo ///////////////////////////////
function toggleMenu(menuId, anoId, aulasId) {
    var menu = document.getElementById(menuId);
    var menuPrincipal = document.getElementById("menuprincipal");
    var ano = document.getElementById(anoId);
    var aulas = document.getElementById(aulasId);
    // Verifica se o menu está visível
    var isVisible = window.getComputedStyle(menu).display !== "none";

    // Alterna a visibilidade do menu
    menu.style.display = isVisible ? "none" : "block";
    menuPrincipal.style.display = "none";
    ano.style.display = "block";
    aulas.style.display = "none";
}

/////////////////// Voltar ///////////////////////////////////////
function voltar() {
    window.location.reload();
    
  //  window.location.href = "https://conexao.aulalivre.net/";
}

///////////////////// Menu de ARTES//////////////////////////////
function clickMenu1() {
    toggleMenu("ARTES", "artesano1", "aulasartes");
}

function clickMenu2() {
    toggleMenu("BIOLOGIA", "biologiano1", "aulasbiologia");
}

function clickMenu3() {
    toggleMenu("EDFISICA", "edFisicano1", "aulasedfisica");
}

function clickMenu4() {
    toggleMenu("ESPANHOL", "espanhol_ano1", "aulasespanhol");
}

function clickMenu5() {
    toggleMenu("FILOSOFIA", "filoAno1", "aulasfilosofia");
}

function clickMenu6() {
    toggleMenu("FISICA", "fisicaAno1", "aulasfisica");
}

function clickMenu7() {
    toggleMenu("GEOGRAFIA", "geografiaAno1", "aulasgeografia");
}

function clickMenu8() {
    toggleMenu("HISTORIA", "historiaAno1", "aulashistoria");
}

function clickMenu9() {
    toggleMenu("INGLES", "inglesAno1", "aulasingles");
}

function clickMenu10() {
    toggleMenu("LITERATURA", "literaturaAno1", "aulasliteratura");
}

function clickMenu11() {
    toggleMenu("MATEMATICA", "matematicaAno1", "aulasmatematica");
}

function clickMenu12() {
    toggleMenu("PORTUGUES", "portuguesAno1", "aulasPORTUGUES");
}

function clickMenu13() {
    toggleMenu("QUIMICA", "quimicaAno1", "aulasquimica");
}

function clickMenu14() {
    toggleMenu("REDACAO", "redacaoAno1", "aulasredacao");
}

function clickMenu15() {
    toggleMenu("SOCIOLOGIA", "sociologiaAno1", "aulassociologia");
}
verificarFragmento();