export async function jsonBodyHandler(request, response) {
  //Adiciona cada chunk
  const buffers = [];
  //Coleta os chunks de dados da requisição
  for await (const chunk of request) {
    buffers.push(chunk);
  }

  try {
    //Concatena os chunks e converte para STR. Em seguida, converte a STR para JSON.
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    console.log(error);
    request.body = null;
  }

  //Define o header de resposta como json
  response.setHeader("Content-Type", "application/json");
}
