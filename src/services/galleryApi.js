// Camada de acesso a dados da Galeria.
// Isola o "como buscar" (fetch de um JSON local em /public/data) do
// "como exibir" (que fica no hook useGallery e nos componentes visuais).
// Trocar essa função por uma chamada a uma API real no futuro não exige
// nenhuma mudança no hook nem nos componentes — só aqui.

const GALLERY_URL = "/data/gallery.json";

export async function buscarItensDaGaleria() {
  const resposta = await fetch(GALLERY_URL);

  if (!resposta.ok) {
    throw new Error(`Não foi possível carregar a galeria (HTTP ${resposta.status}).`);
  }

  return resposta.json();
}
