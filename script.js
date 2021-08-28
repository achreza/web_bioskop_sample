angular.module ('cinemaApp', []).controller('SeatController', function () {
	
	this.konten = 'film';
	this.harga = 30000;
	this.total = 0;
	this.filmTerpilih = [];
	
	this.daftarFilm = [
	{
		nama: 'Glock 1 - 7',
		gambar: 'images/reza1.png',
		tempatDuduk: [
			{
				label: 'A',
				kursi: [
					{ nomor: 1, dipilih: false, dipesan: false },
					{ nomor: 2, dipilih: false, dipesan: false },
					{ nomor: 3, dipilih: false, dipesan: false },
					{ nomor: 4, dipilih: false, dipesan: false },
					{ nomor: 5, dipilih: false, dipesan: false },
					{ nomor: 6, dipilih: false, dipesan: false },
					{ nomor: 7, dipilih: false, dipesan: false },
					{ nomor: 8, dipilih: false, dipesan: false },
					{ nomor: 9, dipilih: false, dipesan: false },
					{ nomor: 10, dipilih: false, dipesan: false },
				]
			},
			{
				label: 'B',
				kursi: [
					{ nomor: 1, dipilih: false, dipesan: false},
					{ nomor: 2, dipilih: false, dipesan: false},
					{ nomor: 3, dipilih: false, dipesan: false},
					{ nomor: 4, dipilih: false, dipesan: false},
					{ nomor: 5, dipilih: false, dipesan: false},
					{ nomor: 6, dipilih: false, dipesan: false},
					{ nomor: 7, dipilih: false, dipesan: false},
					{ nomor: 8, dipilih: false, dipesan: false},
					{ nomor: 9, dipilih: false, dipesan: false},
					{ nomor: 10, dipilih: false, dipesan: false},
				]
			},
			{
				label: 'C',
				kursi: [
					{ nomor: 1, dipilih: false, dipesan: false},
					{ nomor: 2, dipilih: false, dipesan: false},
					{ nomor: 3, dipilih: false, dipesan: false},
					{ nomor: 4, dipilih: false, dipesan: false},
					{ nomor: 5, dipilih: false, dipesan: false},
					{ nomor: 6, dipilih: false, dipesan: false},
					{ nomor: 7, dipilih: false, dipesan: false},
					{ nomor: 8, dipilih: false, dipesan: false},
					{ nomor: 9, dipilih: false, dipesan: false},
					{ nomor: 10, dipilih: false, dipesan: false},
				]
			},
			{
				label: 'D',
				kursi: [
					{ nomor: 1, dipilih: false, dipesan: false},
					{ nomor: 2, dipilih: false, dipesan: false},
					{ nomor: 3, dipilih: false, dipesan: false},
					{ nomor: 4, dipilih: false, dipesan: false},
					{ nomor: 5, dipilih: false, dipesan: false},
					{ nomor: 6, dipilih: false, dipesan: false},
					{ nomor: 7, dipilih: false, dipesan: false},
					{ nomor: 8, dipilih: false, dipesan: false},
					{ nomor: 9, dipilih: false, dipesan: false},
					{ nomor: 10, dipilih: false, dipesan: false},
				]
			},
		]
	},
	{
		nama: 'Glock 9 - 20',
		gambar: 'images/reza.png',
		tempatDuduk: [
			{
				label: 'A',
				kursi: [
					{ nomor: 1, dipilih: false, dipesan: false},
					{ nomor: 2, dipilih: false, dipesan: false},
					{ nomor: 3, dipilih: false, dipesan: false},
					{ nomor: 4, dipilih: false, dipesan: false},
					{ nomor: 5, dipilih: false, dipesan: false},
					{ nomor: 6, dipilih: false, dipesan: false},
					{ nomor: 7, dipilih: false, dipesan: false},
					{ nomor: 8, dipilih: false, dipesan: false},
					{ nomor: 9, dipilih: false, dipesan: false},
					{ nomor: 10, dipilih: false, dipesan: false},
				]
			},
			{
				label: 'B',
				kursi: [
					{ nomor: 1, dipilih: false, dipesan: false},
					{ nomor: 2, dipilih: false, dipesan: false},
					{ nomor: 3, dipilih: false, dipesan: false},
					{ nomor: 4, dipilih: false, dipesan: false},
					{ nomor: 5, dipilih: false, dipesan: false},
					{ nomor: 6, dipilih: false, dipesan: false},
					{ nomor: 7, dipilih: false, dipesan: false},
					{ nomor: 8, dipilih: false, dipesan: false},
					{ nomor: 9, dipilih: false, dipesan: false},
					{ nomor: 10, dipilih: false, dipesan: false},
				]
			},
			{
				label: 'C',
				kursi: [
					{ nomor: 1, dipilih: false, dipesan: false},
					{ nomor: 2, dipilih: false, dipesan: false},
					{ nomor: 3, dipilih: false, dipesan: false},
					{ nomor: 4, dipilih: false, dipesan: false},
					{ nomor: 5, dipilih: false, dipesan: false},
					{ nomor: 6, dipilih: false, dipesan: false},
					{ nomor: 7, dipilih: false, dipesan: false},
					{ nomor: 8, dipilih: false, dipesan: false},
					{ nomor: 9, dipilih: false, dipesan: false},
					{ nomor: 10, dipilih: false, dipesan: false},
				]
			},
			{
				label: 'D',
				kursi: [
					{ nomor: 1, dipilih: false, dipesan: false},
					{ nomor: 2, dipilih: false, dipesan: false},
					{ nomor: 3, dipilih: false, dipesan: false},
					{ nomor: 4, dipilih: false, dipesan: false},
					{ nomor: 5, dipilih: false, dipesan: false},
					{ nomor: 6, dipilih: false, dipesan: false},
					{ nomor: 7, dipilih: false, dipesan: false},
					{ nomor: 8, dipilih: false, dipesan: false},
					{ nomor: 9, dipilih: false, dipesan: false},
					{ nomor: 10, dipilih: false, dipesan: false},
				]
			},
		]
	},
	{
		nama: 'Glock 21 - 30',
		gambar: 'images/reza2.jpg',
		tempatDuduk: [
			{
				label: 'A',
				kursi: [
					{ nomor: 1, dipilih: false, dipesan: false},
					{ nomor: 2, dipilih: false, dipesan: false},
					{ nomor: 3, dipilih: false, dipesan: false},
					{ nomor: 4, dipilih: false, dipesan: false},
					{ nomor: 5, dipilih: false, dipesan: false},
					{ nomor: 6, dipilih: false, dipesan: false},
					{ nomor: 7, dipilih: false, dipesan: false},
					{ nomor: 8, dipilih: false, dipesan: false},
					{ nomor: 9, dipilih: false, dipesan: false},
					{ nomor: 10, dipilih: false, dipesan: false},
				]
			},
			{
				label: 'B',
				kursi: [
					{ nomor: 1, dipilih: false, dipesan: false},
					{ nomor: 2, dipilih: false, dipesan: false},
					{ nomor: 3, dipilih: false, dipesan: false},
					{ nomor: 4, dipilih: false, dipesan: false},
					{ nomor: 5, dipilih: false, dipesan: false},
					{ nomor: 6, dipilih: false, dipesan: false},
					{ nomor: 7, dipilih: false, dipesan: false},
					{ nomor: 8, dipilih: false, dipesan: false},
					{ nomor: 9, dipilih: false, dipesan: false},
					{ nomor: 10, dipilih: false, dipesan: false},
				]
			},
			{
				label: 'C',
				kursi: [
					{ nomor: 1, dipilih: false, dipesan: false},
					{ nomor: 2, dipilih: false, dipesan: false},
					{ nomor: 3, dipilih: false, dipesan: false},
					{ nomor: 4, dipilih: false, dipesan: false},
					{ nomor: 5, dipilih: false, dipesan: false},
					{ nomor: 6, dipilih: false, dipesan: false},
					{ nomor: 7, dipilih: false, dipesan: false},
					{ nomor: 8, dipilih: false, dipesan: false},
					{ nomor: 9, dipilih: false, dipesan: false},
					{ nomor: 10, dipilih: false, dipesan: false},
				]
			},
			{
				label: 'D',
				kursi: [
					{ nomor: 1, dipilih: false, dipesan: false},
					{ nomor: 2, dipilih: false, dipesan: false},
					{ nomor: 3, dipilih: false, dipesan: false},
					{ nomor: 4, dipilih: false, dipesan: false},
					{ nomor: 5, dipilih: false, dipesan: false},
					{ nomor: 6, dipilih: false, dipesan: false},
					{ nomor: 7, dipilih: false, dipesan: false},
					{ nomor: 8, dipilih: false, dipesan: false},
					{ nomor: 9, dipilih: false, dipesan: false},
					{ nomor: 10, dipilih: false, dipesan: false},
				]
			},
		]
	},
	{
		nama: 'Glock 31 - 37',
		gambar: 'images/reza3.jpg',
		tempatDuduk: [
			{
				label: 'A',
				kursi: [
					{ nomor: 1, dipilih: false, dipesan: false},
					{ nomor: 2, dipilih: false, dipesan: false},
					{ nomor: 3, dipilih: false, dipesan: false},
					{ nomor: 4, dipilih: false, dipesan: false},
					{ nomor: 5, dipilih: false, dipesan: false},
					{ nomor: 6, dipilih: false, dipesan: false},
					{ nomor: 7, dipilih: false, dipesan: false},
					{ nomor: 8, dipilih: false, dipesan: false},
					{ nomor: 9, dipilih: false, dipesan: false},
					{ nomor: 10, dipilih: false, dipesan: false},
				]
			},
			{
				label: 'B',
				kursi: [
					{ nomor: 1, dipilih: false, dipesan: false},
					{ nomor: 2, dipilih: false, dipesan: false},
					{ nomor: 3, dipilih: false, dipesan: false},
					{ nomor: 4, dipilih: false, dipesan: false},
					{ nomor: 5, dipilih: false, dipesan: false},
					{ nomor: 6, dipilih: false, dipesan: false},
					{ nomor: 7, dipilih: false, dipesan: false},
					{ nomor: 8, dipilih: false, dipesan: false},
					{ nomor: 9, dipilih: false, dipesan: false},
					{ nomor: 10, dipilih: false, dipesan: false},
				]
			},
			{
				label: 'C',
				kursi: [
					{ nomor: 1, dipilih: false, dipesan: false},
					{ nomor: 2, dipilih: false, dipesan: false},
					{ nomor: 3, dipilih: false, dipesan: false},
					{ nomor: 4, dipilih: false, dipesan: false},
					{ nomor: 5, dipilih: false, dipesan: false},
					{ nomor: 6, dipilih: false, dipesan: false},
					{ nomor: 7, dipilih: false, dipesan: false},
					{ nomor: 8, dipilih: false, dipesan: false},
					{ nomor: 9, dipilih: false, dipesan: false},
					{ nomor: 10, dipilih: false, dipesan: false},
				]
			},
			{
				label: 'D',
				kursi: [
					{ nomor: 1, dipilih: false, dipesan: false},
					{ nomor: 2, dipilih: false, dipesan: false},
					{ nomor: 3, dipilih: false, dipesan: false},
					{ nomor: 4, dipilih: false, dipesan: false},
					{ nomor: 5, dipilih: false, dipesan: false},
					{ nomor: 6, dipilih: false, dipesan: false},
					{ nomor: 7, dipilih: false, dipesan: false},
					{ nomor: 8, dipilih: false, dipesan: false},
					{ nomor: 9, dipilih: false, dipesan: false},
					{ nomor: 10, dipilih: false, dipesan: false},
				]
			},
		]
	},
];

this.daftarPesan = [];

//untuk menampilkan daftar film atau daftar tempat duduk
this.pilihKonten = function ( namaKonten, filmTerpilih = [] ) {
	this.konten = namaKonten;
	this.filmTerpilih = filmTerpilih;
	
	this.centang();
}

//fungsi untuk submit booking
this.pesan = function () {
	
	angular.forEach ( this.filmTerpilih.tempatDuduk, function (barisKursi) {
		
		angular.forEach ( barisKursi.kursi, function (deretKursi) {
			
			if ( deretKursi.dipilih ) {
				deretKursi.dipesan = true;
			}
			
		});
		
	});
	
	this.daftarPesan = [];
	this.total = 0;
	
}

// fungsi untuk memilih dan menampilkan pilihan kursi pada tabel
this.centang = function () {
	
	var daftarPesanSementara = [];
	
	angular.forEach ( this.filmTerpilih.tempatDuduk, function (barisKursi) {
		
		angular.forEach(barisKursi.kursi, function (deretKursi) {
			
			if (deretKursi.dipilih && !deretKursi.dipesan) {
				daftarPesanSementara.push({
					baris: barisKursi.label,
					nomor: deretKursi.nomor
				});
			}
			
		});
		
	});
	
	this.daftarPesan = daftarPesanSementara;
	
	this.total = this.harga * this.daftarPesan.length;
}
});