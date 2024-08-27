const textResult = document.querySelector("div.text-result");
const textInput = document.querySelector("textarea.text-in");
const textAlert = document.querySelector("span.info");
const notFound = textResult.innerHTML;
const defaultMessage = "Digite seu texto...";
const errorMessage = "Nenhuma menssagem a ser descriptografada, digite seu texto...";

const notValid = `
    <img class="imagem-conteudo" src="./assets/img/dark-blue-336x304.png" alt="Menssagem Inválida"/>
    <h3>Nenhuma menssagem encontrada</h3>
    <p>Digite um texto que você deseja criptografar ou descriptografar.</p>`;

const btnCopiar = `
    <div class="btn-acao-texto">
        <button class="btn-copiar" type="button" onclick="copiar()" >Copiar</button>
    </div>`;

function writeText(texto) {
  return !/[A-ZÀ-ü0-9]/.test(texto);
}

function writeSideWrite(texto) {
  textResult.innerHTML = `<p class="menssagem"><strong>${texto}</strong></p>`;
  textResult.innerHTML += btnCopiar;
  textInput.value = "";
  textInput.placeholder = defaultMessage;
}

function encrypt() {
  const menssagemCrua = textInput.value;
  if (writeText(menssagemCrua) && menssagemCrua !== "") {
    const criptoMessage = menssagemCrua
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");
    textAlert.classList.remove("alert");
    writeSideWrite(criptoMessage);
    return criptoMessage;
  } else {
    textAlert.classList.add("alert");
    textResult.innerHTML = notValid;
  }
}

function unecrypt() {
  const menssagemCripto = textInput.value;
  if (writeText(menssagemCripto) && menssagemCripto !== "") {
    const unecryptMessage = menssagemCripto
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
    textAlert.classList.remove("alert");
    writeSideWrite(unecryptMessage);
    return unecryptMessage;
  } else {
    textInput.placeholder = defaultMessage;
    textResult.innerHTML = notValid;
  }
}

function copiar() {
  const toCopyMessage  = document.querySelector("p.menssagem").textContent;
  navigator.clipboard
    .writeText(toCopyMessage)
    .then(() => {
      alert(`O texto foi copiado com sucesso.`);
    })
    .catch((error) => {
      console.error(
        "Falha ao copiar texto para a área de transferência:",
        error
      );
    });
}