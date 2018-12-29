# Scrapper para o VueJS Norte

Os arquivos de código fonte estão na pasta `src`

## Build
  Primeiramente, instale os módulos necessários com:
  ```
  npm i
  ```
  Logo após, você pode usar o `gulp mainjs` para compilar e `gulp` para ficar monitorando alterações e compilar quando o mesmo ocorrer.

  *_Obs: requer o gulp-cli instalado globalmente. Instale: `(sudo?) npm install gulp-cli -g`_*


## Instalação
  Copie o arquivo `main.js` dentro da pasta `dist` para o seu projeto. Logo após, adicione ao arquivo que deseja usa-lo:
  ```html
  <script src="dist/js/main.js" type="text/javascript"></script>
  ```

## Uso
  Com o texto em uma variável qualquer, use:
  ```javascript
  let links = scrapperConverter(variavel, "## Título da Seção");
  ```

  Exemplo usando uma requisição:
  ```javascript
  axios.get("...")
  .then(res => {
    let links = scrapperConverter(res.data, "## Título da Seção");
  });
  ```