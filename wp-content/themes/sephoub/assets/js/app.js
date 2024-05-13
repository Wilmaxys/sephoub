const createSlideElementFromObject = (nbElementPerPage) => {
  const elementSize = Math.ceil(100 / nbElementPerPage);
  console.log(nbElementPerPage, elementSize);
  return (element) => {
    const slide = document.createElement("div");
    slide.className = "element-wrap w-full sm:w-1/2 md:w-1/3 lg:w-1/4";
    // slide.href = element.link
    const slide_element = document.createElement("div");
    slide_element.className = "element relative";
    const image = document.createElement("img");
    image.src = element.img;
    image.className = "object-cover rounded-lg h-full w-full absolute";
    const fade = document.createElement("div");
    fade.className = "rounded-lg background-fade";
    const title = document.createElement("div");
    title.className =
      "title absolute flex items-end justify-center w-full h-full pb-2 text-white text-xl";
    const title_text = document.createTextNode(element.title);
    title.appendChild(title_text);
    const ip = document.createElement("div");
    ip.className = "ip";
    const ip_text = document.createTextNode(element.ip);
    ip.appendChild(ip_text);
    slide.appendChild(slide_element);
    slide_element.appendChild(image);
    slide_element.appendChild(fade);
    slide_element.appendChild(title);
    slide_element.appendChild(ip);

    return slide;
  };
};

const openModal = (src) => {
  document.querySelector(".modal").classList.remove("hidden");
  document.querySelector(".modal-content").src = src;
};

window.onload = () => {
  const slider = document.querySelector(".slider");
  const imageFlex = document.querySelector(".image-flex");
  const cards = document.querySelectorAll(".card");
  if (slider) {
    let vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    let nbElementPerPage = vw >= 1024 ? 4 : vw >= 768 ? 3 : vw >= 640 ? 2 : 1;

    // const slideElement = slideObject.map(
    //   createSlideElementFromObject(nbElementPerPage)
    // );
    // slideElement.forEach((element) => slider.appendChild(element));
    // slider.style.transition = `left ${0.15 * nbElementPerPage}s`;

    const elementCount = document.querySelectorAll(".slider .element").length;

    let currentPage = 0;
    let currentPurcent = 0;
    let maxPage = Math.ceil(elementCount / nbElementPerPage) - 1;
    let purcentageLastPage =
      nbElementPerPage > 1
        ? (elementCount % nbElementPerPage) * (100 / nbElementPerPage)
        : 100;

    const arrowLeft = document.querySelector(".a-left");
    const arrowRight = document.querySelector(".a-right");

    if (elementCount <= nbElementPerPage) {
      arrowLeft.classList.add("hidden");
      arrowRight.classList.add("hidden");
    }

    window.addEventListener(
      "resize",
      () => {
        slider.style.left = 0;
        vw = Math.max(
          document.documentElement.clientWidth || 0,
          window.innerWidth || 0
        );
        nbElementPerPage = vw >= 1024 ? 4 : vw >= 768 ? 3 : vw >= 640 ? 2 : 1;
        currentPage = 0;
        currentPurcent = 0;
        maxPage = Math.ceil(elementCount / nbElementPerPage) - 1;
        purcentageLastPage =
          nbElementPerPage > 1
            ? (elementCount % nbElementPerPage) * (100 / nbElementPerPage)
            : 100;
      },
      true
    );

    arrowLeft.addEventListener("click", () => {
      if (currentPage == maxPage) {
        currentPage--;
        currentPurcent -= purcentageLastPage;
        slider.style.left = `-${currentPurcent}%`;
      } else if (currentPage - 1 >= 0) {
        currentPage--;
        currentPurcent -= 100;
        slider.style.left = `-${currentPurcent}%`;
      }
    });

    arrowRight.addEventListener("click", () => {
      if (currentPage == maxPage - 1) {
        currentPage++;
        currentPurcent += purcentageLastPage;
        slider.style.left = `-${currentPurcent}%`;
      } else if (currentPage != maxPage) {
        currentPage++;
        currentPurcent += 100;
        slider.style.left = `-${currentPurcent}%`;
      }
    });
  }
  if (imageFlex) {
    const images = document.querySelectorAll(".image-flex img");
    images.forEach(function (img) {
      img.addEventListener("click", function () {
        openModal(this.src);
      });
    });

    const modal = document.querySelector(".modal");
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.classList.add("hidden");
      }
    });

    // Close modal functionality
    const span = document.querySelector(".close");
    span.addEventListener("click", function () {
      modal.classList.add("hidden");
    });
  }

  if (cards) {
    cards.forEach((focusCard) => {
      focusCard.addEventListener("mouseover", (event) => {
        console.log(window.innerWidth)
        if (window.innerWidth > 640) {
          cards.forEach((card) => {
            card.classList.remove("sm:w-2/5");
            card.classList.add("sm:w-1/5");
            const desc = card.querySelector(".desc");
  
            !desc.classList.contains("sm:hidden") && desc.classList.add("sm:hidden");
          });
          focusCard.classList.remove("sm:w-1/5");
          focusCard.classList.add("sm:w-2/5");
          const desc = focusCard.querySelector(".desc");
          desc.classList.contains("sm:hidden") && desc.classList.remove("sm:hidden");
        }
        else {

        }
      });
    });
  }
};
