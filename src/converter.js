let scrapperConverter;
scrapperConverter = function(texto, textoComeco){
  // Remover as quebras de linha
  texto = texto.replace(/\n/g, "");

  // Encontra a posição do título
  const posicaoComeco = texto.indexOf(textoComeco);

  // A variável texto terá apenas o conteúdo a partir do título definido acima
  texto = texto.slice(posicaoComeco);

  // Pular o primeiro título e encontrar a posição do próximo
  const posicaoHashSucessor = texto.slice(textoComeco.length).indexOf("##") + textoComeco.length;

  // Deixar apenas o primeiro título e seu conteúdo, removendo o título seguinte para frente
  texto = texto.slice(0, posicaoHashSucessor);


  // Transformar o texto em uma lista
  texto = texto.split("*");
  // e remover o prímeiro item que é o título
  texto.shift();
  
  let links = "";
  texto.forEach(element => {
    // Remover o espaço
    element = element.trim();

    const nome = /\[(.*?)\]/.exec(element)[1];
    const link = /\((.*?)\)/.exec(element)[1];
    links += `<a href="${link}">${nome}</a>`;
  });

  return links;
}
