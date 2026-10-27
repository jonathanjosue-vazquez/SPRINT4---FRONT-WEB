import { useEffect, useState } from "react";
import { buscarItensDaGaleria } from "../services/galleryApi";

// Custom hook responsável apenas pelo ciclo de vida dos dados da galeria:
// carregar, guardar em estado e expor loading/erro.
// Não sabe nada sobre busca, filtro ou renderização — isso fica a cargo
// de quem consome o hook (ver DashboardPage.jsx).
export function useGallery() {
  const [itens, setItens] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    let cancelado = false;

    async function carregar() {
      try {
        setCarregando(true);
        setErro(null);
        const dados = await buscarItensDaGaleria();

        if (!cancelado) {
          setItens(dados);
        }
      } catch (erroCapturado) {
        if (!cancelado) {
          setErro(erroCapturado.message);
        }
      } finally {
        if (!cancelado) {
          setCarregando(false);
        }
      }
    }

    carregar();

    return () => {
      cancelado = true;
    };
  }, []);

  return { itens, carregando, erro };
}
