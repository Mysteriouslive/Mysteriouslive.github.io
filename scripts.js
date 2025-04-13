document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');
  
    if (hamburger && navList) {
      hamburger.addEventListener('click', () => {
        navList.classList.toggle('show');
      });
    }
  
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
  
        alert('✅ 發送成功，謝謝你的聯繫！');
        form.reset();
      });
    }
  
    const imageModal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
  
    if (imageModal && modalImg) {
      document.querySelectorAll(".note-img, .product img").forEach(img => {
        img.addEventListener("click", () => {
          imageModal.style.display = "block";
          modalImg.src = img.src;
        });
      });
  
      imageModal.addEventListener("click", (e) => {
        if (e.target !== modalImg) {
          imageModal.style.display = "none";
        }
      });
    }
  
    const folder = document.getElementById('openFolder');
    const folderModal = document.getElementById('folderModal');
    const closeBtn = folderModal?.querySelector('.close');    /*folderModal?如果 folderModal 有找到 → 正常執行 .querySelector() 如果 folderModal 沒有（是 null）→ 回傳 undefined，但不報錯*/
  
    if (folder && folderModal && closeBtn) {
      folder.addEventListener('click', () => {
        folderModal.style.display = 'block';
      });
  
      closeBtn.addEventListener('click', () => {
        folderModal.style.display = 'none';
      });
  
      folderModal.addEventListener('click', (e) => {
        if (e.target === folderModal) {
          folderModal.style.display = 'none';
        }
      });
    }
  });
