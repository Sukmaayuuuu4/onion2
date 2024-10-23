function diagnose() {
    // Ambil nilai dari setiap select option
    const G01 = document.getElementById("G01").value;
    const G09 = document.getElementById("G09").value;
    const G11 = document.getElementById("G11").value;
    const G12 = document.getElementById("G12").value;
    const G13 = document.getElementById("G13").value;
    const G14 = document.getElementById("G14").value;
    const G15 = document.getElementById("G15").value;
    const G16 = document.getElementById("G16").value;
    const G17 = document.getElementById("G17").value;
    const G18 = document.getElementById("G18").value;
    const G19 = document.getElementById("G19").value;
    const G20 = document.getElementById("G20").value;
    const G21 = document.getElementById("G21").value;
    const G22 = document.getElementById("G22").value;
    const G23 = document.getElementById("G23").value;
    const G24 = document.getElementById("G24").value;
    const G25 = document.getElementById("G25").value;
    const G26 = document.getElementById("G26").value;

    let diagnosis = "Diagnosis: ";
    let solution = "Cara Penanganan: ";

    // Logika diagnosis berdasarkan gejala dan penanganannya
    if (G09 === "ya" && G11 === "ya" && G12 === "ya") {
        diagnosis += "Penyakit Busuk Akar.";
        solution += "Lakukan rotasi tanaman, hindari penanaman di tanah yang terlalu lembab, dan gunakan fungisida yang sesuai.";
    } else if (G01 === "ya" && G13 === "ya" && G14 === "ya") {
        diagnosis += "Penyakit Layu Fusarium.";
        solution += "Cabut dan musnahkan tanaman yang terinfeksi. Gunakan fungisida berbahan aktif benomil, dan lakukan sanitasi lahan sebelum penanaman.";
    } else if (G15 === "ya" && G16 === "ya") {
        diagnosis += "Penyakit Bercak Ungu.";
        solution += "Semprot tanaman dengan fungisida yang mengandung bahan aktif seperti mankozeb atau klorotalonil.";
    } else if (G17 === "ya" && G18 === "ya") {
        diagnosis += "Serangan Larva.";
        solution += "Gunakan insektisida berbahan aktif imidakloprid untuk mengendalikan larva. Pastikan sanitasi lingkungan tumbuh.";
    } else if (G19 === "ya" && G20 === "ya") {
        diagnosis += "Penyakit Bercak Daun Coklat.";
        solution += "Gunakan fungisida tembaga atau mankozeb untuk mencegah penyebaran bercak daun. Periksa drainase lahan agar tidak terlalu lembab.";
    } else if (G21 === "ya" && G22 === "ya") {
        diagnosis += "Infeksi Virus Mozaik.";
        solution += "Tidak ada obat untuk virus, namun cegah penyebaran dengan memusnahkan tanaman yang terinfeksi. Kendalikan vektor serangga dengan insektisida.";
    } else if (G23 === "ya" && G24 === "ya") {
        diagnosis += "Serangan Jamur Akar.";
        solution += "Perbaiki drainase tanah dan aplikasikan fungisida berbahan aktif metalaksil untuk mengatasi jamur.";
    } else if (G25 === "ya" && G26 === "ya") {
        diagnosis += "Penyakit Daun Berbintik.";
        solution += "Semprot tanaman dengan fungisida yang sesuai dan pastikan tanaman mendapatkan cukup sinar matahari untuk mencegah kelembaban berlebih.";
    } else {
        diagnosis += "Tidak ada penyakit yang dapat didiagnosis dari gejala yang diberikan.";
        solution += "Silakan konsultasikan dengan ahli pertanian untuk analisis lebih lanjut.";
    }

    // Tampilkan hasil diagnosis dan cara penanganan
    document.getElementById("result").innerHTML = `<strong>${diagnosis}</strong><br><strong>${solution}</strong>`;
}
