const imagens = [
    "/KITAsite/img/ft27.jpg",
    "/KITAsite/img/ft28.jpg",
    "/KITAsite/img/ft4.jpg",
    "/KITAsite/img/ft5.jpg",
    "/KITAsite/img/ft6.jpg",
    "/KITAsite/img/ft7.jpg",
    "/KITAsite/img/ft8.jpg",
    "/KITAsite/img/ft9.jpg",
    "/KITAsite/img/ft10.jpg",
    "/KITAsite/img/ft11.jpg",
    "/KITAsite/img/ft13.jpg",
    "/KITAsite/img/ft14.jpg",
    "/KITAsite/img/ft15.jpg",
    "/KITAsite/img/ft16.jpg",
    "/KITAsite/img/ft17.jpg",
    "/KITAsite/img/ft18.jpg",
    "/KITAsite/img/ft19.jpg",
    "/KITAsite/img/ft20.jpg",
    "/KITAsite/img/ft21.jpg",
    "/KITAsite/img/ft22.jpg",
    "/KITAsite/img/ft23.jpg",
    "/KITAsite/img/ft24.jpg",
    "/KITAsite/img/ft25.jpg",
    "/KITAsite/img/ft26.jpg",
    "/KITAsite/img/ft1.jpg",
    "/KITAsite/img/FelixeVini.jpg",
    "/KITAsite/img/ImagemRolagem1.jpg",
    "/KITAsite/img/ImagemRolagem2.jpeg",
    "/KITAsite/img/FotoJunto.jpeg",
    "/KITAsite/img/KitaFinal.jpg",
    
  ];
  let indice = 0;
  const imagem = document.getElementById("imagem");
  const avancar = document.getElementById("avancar");
  const voltar = document.getElementById("voltar");

  function atualizarImagem() {
    imagem.style.opacity = 0;
    setTimeout(() => {
      imagem.style.backgroundImage = `url('${imagens[indice]}')`;
      imagem.style.opacity = 1;
    }, 300);
  }

  avancar.addEventListener("click", () => {
    indice = (indice + 1) % imagens.length;
    atualizarImagem();
  });

  voltar.addEventListener("click", () => {
    indice = (indice - 1 + imagens.length) % imagens.length;
    atualizarImagem();
  });

  atualizarImagem();

  