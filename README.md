# Markdown Scrapper
Identifica a seção e retorna somente os seus links

A seção selecionada sendo "## Titulo", e seu texto seja
```
## Título
[Foo](http://bar)
[Bar](http://foo)

## Outro
[Outro](http://foo)
```

A saída é:
```html
<a href="http://bar">Foo</a>
<a href="http://foo">Bar</a>
```

## Build
  Os arquivos de código-fonte estão na pasta [src](src)
  
  Primeiramente, instale os módulos necessários com:
  ```
  npm i
  ```
  Logo após, você pode usar o `gulp mainjs` para compilar e `gulp` para ficar monitorando alterações e compilar quando o mesmo ocorrer.

  **_Obs: requer o gulp-cli instalado globalmente._**
  ```console
  npm install gulp-cli -g
  ```


## Instalação
  Copie o arquivo [main.js](dist/main.js) dentro da pasta [dist](dist) para o seu projeto. Logo após, adicione ao arquivo que deseja usa-lo:
  ```html
  <script src="path/to/main.js" type="text/javascript"></script>
  ```

## Uso
  Com o texto em uma variável qualquer, use:
  ```javascript
  let links = scrapperConverter(seuTextoMd, "## Título da Seção");
  ```

  Exemplo usando uma requisição:
  ```javascript
  axios.get("...")
  .then(res => {
    let links = scrapperConverter(res.data, "## Título da Seção");
  });
  ```
