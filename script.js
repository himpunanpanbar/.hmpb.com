document.addEventListener('DOMContentLoaded', function () {
    // Menangani pengiriman formulir kontak
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulasi pengiriman data
        alert(`Terima kasih ${name}!\nPesan Anda telah dikirim ke ${email}.\nPesan: ${message}`);

        // Kosongkan formulir setelah pengiriman
        contactForm.reset();
    });

    // Muat berita terbaru
    const newsList = document.getElementById('newsList');
    const newsItems = [
        'Berita 1: Pemerintah meluncurkan inisiatif baru.',
        'Berita 2: Perubahan jadwal layanan publik.',
        'Berita 3: Kegiatan masyarakat bulan ini.',
    ];

    newsItems.forEach(function (item) {
        const div = document.createElement('div');
        div.className = 'news-item';
        div.textContent = item;
        newsList.appendChild(div);
    });
});

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show'); // Menambahkan atau menghapus kelas 'show'
});