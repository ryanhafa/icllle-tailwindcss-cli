document.addEventListener('DOMContentLoaded', function () {
    
    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        // Ganti ikon burger menjadi X saat menu terbuka
        const icon = mobileMenuButton.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });

    // Tutup menu saat link di klik (untuk navigasi di halaman yang sama)
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuButton.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // --- Scroll to Top Button ---
    const scrollUpBtn = document.getElementById('scrollUpBtn');

    // Tampilkan tombol ketika scroll ke bawah
    window.onscroll = function () {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollUpBtn.classList.remove('hidden');
        } else {
            scrollUpBtn.classList.add('hidden');
        }
    };

    // Scroll ke atas saat tombol diklik
    scrollUpBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });




    // --- PDF Iframe Reload on Page Show ---
    // Ini untuk memastikan PDF tampil dengan benar saat kembali ke halaman (misalnya, menggunakan tombol back browser)
    window.addEventListener('pageshow', function (event) {
        const iframes = document.querySelectorAll("iframe");
        iframes.forEach(iframe => {
            // Muat ulang sumber iframe untuk menghindari masalah cache
            iframe.src = iframe.src; 
        });
    });

});
    // Referensi tombol dan modal
    const openModalBtn1 = document.getElementById('openModalBtn1');
    const openModalBtn2 = document.getElementById('openModalBtn2');
    const openModalBtn3 = document.getElementById('openModalBtn3');
    const openModalBtn4 = document.getElementById('openModalBtn4');
    const openModalBtn5 = document.getElementById('openModalBtn5');
    const openModalBtn6 = document.getElementById('openModalBtn6');
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // Fungsi untuk membuka modal dengan gambar tertentu
    const openModal = (imageUrl) => {
      modalImage.src = imageUrl;
      imageModal.classList.remove('hidden');
    };

    // Menangani klik tombol untuk membuka gambar
    openModalBtn1.addEventListener('click', () => openModal('/img/1.jpg'));
    openModalBtn2.addEventListener('click', () => openModal('/img/2.jpg'));
    openModalBtn3.addEventListener('click', () => openModal('/img/3.jpg'));
    // openModalBtn4.addEventListener('click', () => openModal('https://via.placeholder.com/800x600?text=Gambar+4'));
    // openModalBtn5.addEventListener('click', () => openModal('https://via.placeholder.com/800x600?text=Gambar+5'));
    // openModalBtn6.addEventListener('click', () => openModal('https://via.placeholder.com/800x600?text=Gambar+6'));

    // Menangani klik untuk menutup modal
    closeModalBtn.addEventListener('click', () => {
      imageModal.classList.add('hidden');
    });

    // Menutup modal jika mengklik area luar modal
    window.addEventListener('click', (event) => {
      if (event.target === imageModal) {
        imageModal.classList.add('hidden');
      }
    });