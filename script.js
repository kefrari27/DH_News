// Array de contenido de Noticias

const noticias = [
  {
  titulo: "Turismo de vacunas: 2.000 personas por día reciben su dosis en el aeropuerto de Miami",
  imgUrl: "https://www.infobae.com/new-resizer/H9B9uvmwpunxOo6DwuGGMoaVGiE=/265x149/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/YXOQB3X5SZ2HPD2SWP2HOCBDZA.jpg",
  descripcion: "Fácil y rápido son los dos adjetivos que más repiten las personas que describen cómo es el proceso de vacunación en el aeropuerto internacional de Miami. En su mayoría son turistas internacionales quienes se inoculan al día en la clínica instalada en la terminal aérea",
  fecha: "07/06/21", 
  tipoNacional: true
  },
  {
  titulo: "El gran gesto por amor de Jennifer Lopez hacia Ben Affleck",
  imgUrl: "https://www.infobae.com/new-resizer/9qc1rervLRhJWJ5iTr0ODd_ctMM=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/MSQDSQCH7NDAFLLCXFS7IO2PFU.jpg",
  descripcion: "La cantante fue vista averiguando sobre escuelas en Los Ángeles, lo que hace suponer que podría mudarse con sus hijos allí para estar cerca del actor",
  fecha: "02/06/21",
  tipoNacional: false
  },
  {
  titulo: "Cómo evitar que se empañen los anteojos al usar barbijo",
  imgUrl: "https://www.infobae.com/new-resizer/ORz7JmzOGrdIjerazIGIpwiqOHk=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/QVRO3YNJMNGNFP773UOWZYM3FU.jpg",
  descripcion: "Para quienes utilizan anteojos, la combinación del uso obligatorio de tapabocas desde el año pasado se volvió una complicación. Paso a paso para evitar que se empañen",
  fecha: "01/06/21",
  tipoNacional: true
  },
  {
  titulo: "La UE aprobó el fondo de USD 21.000 millones para apoyar a las regiones más afectadas por la transición verde",
  imgUrl: "https://www.infobae.com/new-resizer/n515a-2ZZvJJgZ3EI6sfxWYm5Lg=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/UEEVG5ND43BTLP5RTK3V62NISM.jpg",
  descripcion: "El objetivo es ayudar a los países a emprender la transición ecológica en su camino hacia una economía libre de emisiones de gases de efecto invernadero a mitad de siglo",
  fecha: "04/06/21",
  tipoNacional: false
  },
  {
  titulo:"Maradona: cómo es la muestra fotográfica argentina que deslumbra a todos en Serbia",
  imgUrl: "https://www.infobae.com/new-resizer/mmsbZbq2RWQDDHGiP4MxaBbK6RQ=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/TM2UEM7JNZE4JH2SXGPPGPTTOQ.jpg",
  descripcion: "La exposición, que cuenta con postales icónicas de “El Diez” que capturaron los fotógrafos de la agencia de noticias Télam, es uno de los hitos del festival Mes de la Fotografía de Belgrado",
  fecha: "07/06/21",
  tipoNacional: true
  },
];

//Creamos función renderizar Noticias

function renderizarNoticias(noticias){
  let contenedor = document.querySelector(".contenedor");
  
  for(let articulo of noticias){
    //Creacion de articulo de noticia nacional
    if(articulo.tipoNacional == true){
      contenedor.innerHTML += `
      <div class="articulo nacional">
        <img src="${articulo.imgUrl}" alt="Imagen alusiva a la noticia">
        <h2>${articulo.titulo}</h2>
        <h4>${articulo.fecha}</h4>
        <p>${articulo.descripcion}</p>
      </div>
      `;
    } else {
      contenedor.innerHTML += `
      <div class="articulo internacional">
        <img src="${articulo.imgUrl}" alt="Imagen alusiva a la noticia">
        <h2>${articulo.titulo}</h2>
        <h4>${articulo.fecha}</h4>
        <p>${articulo.descripcion}</p>
      </div>
      `;
    }
  }
}

//Ejecutamos la función renderizar noticias
renderizarNoticias(noticias);

//Agregamos evento al enlace de Inicio del menú

let inicio = document.getElementById("inicio");
inicio.addEventListener("click", () => {
  location.reload();
})

//variables para filtro noticias
let btnNacional = document.getElementById("btn-Nac");
let btnInternacional = document.getElementById("btn-Int");
let divArticulo = document.querySelectorAll(".articulo");

//Creamos evento para boton noticias nacionales
btnNacional.addEventListener("click", () => {
  divArticulo.forEach((a) => {
    if(a.classList.contains("internacional")){a.classList.add("ocultar")}
    if(a.classList.contains("nacional")){if(a.classList.contains("ocultar")){a.classList.remove("ocultar")}}
  });
});

//Creamos evento para boton noticias Internacionales
btnInternacional.addEventListener("click", () => {
  divArticulo.forEach((a) => {
    if(a.classList.contains("nacional")){a.classList.add("ocultar")}
    if(a.classList.contains("internacional")){if(a.classList.contains("ocultar")){a.classList.remove("ocultar")}}
  });
});