const items = document.querySelectorAll(".hobby-item");
const modal = document.getElementById("video-modal");
const modalVideo = document.getElementById("modal-video");
const overlay = document.querySelector("#video-modal .overlay");

items.forEach(item => {
    const thumb = item.querySelector(".media-thumb");
    const videoSrc = item.dataset.video;
    const originalBg = thumb.style.backgroundImage;

    item.addEventListener("mouseenter", () => {
      thumb.innerHTML = `<video src="${videoSrc}" autoplay muted loop style="width:100%; height:100%; object-fit:cover;"></video>`;
    });

    item.addEventListener("mouseleave", () => {
      thumb.innerHTML = "";
      thumb.style.backgroundImage = originalBg;
    });

    item.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modalVideo.src = videoSrc;
    });
  });

  overlay.addEventListener("click", () => {
    modal.classList.add("hidden");
    modalVideo.pause();
    modalVideo.src = "";
  })