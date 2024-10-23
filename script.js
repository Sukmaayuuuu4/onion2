function diagnose() {
    // Ambil nilai dari form
    const umbiKecil = document.getElementById("umbiKecil").value;
    const leherTerpotong = document.getElementById("leherTerpotong").value;
    const daunMenguning = document.getElementById("daunMenguning").value;
    const daunTercabut = document.getElementById("daunTercabut").value;
    const umbiBusuk = document.getElementById("umbiBusuk").value;
    const tanamanMati = document.getElementById("tanamanMati").value;
    const bercakMelekuk = document.getElementById("bercakMelekuk").value;
    const bercakCincin = document.getElementById("bercakCincin").value;
    const ujungDaunPatah = document.getElementById("ujungDaunPatah").value;
    const umbiGelap = document.getElementById("umbiGelap").value;
    const pangkalDaunMengecil = document.getElementById("pangkalDaunMengecil").value;

    // Bobot Gejala untuk setiap penyakit (belief)
    const beliefFunctions = {
        "Layu Fusarium": {
            m: 0, // belief
            evidence: [
                { gejala: daunMenguning, bobot: 0.5 },
                { gejala: daunTercabut, bobot: 0.5 },
                { gejala: umbiBusuk, bobot: 0.8 },
                { gejala: tanamanMati, bobot: 0.9 }
            ]
        },
        "Bercak Ungu": {
            m: 0,
            evidence: [
                { gejala: bercakMelekuk, bobot: 0.7 },
                { gejala: bercakCincin, bobot: 0.9 },
                { gejala: ujungDaunPatah, bobot: 0.6 },
                { gejala: umbiGelap, bobot: 0.5 }
            ]
        },
        "Antraknosa": {
            m: 0,
            evidence: [
                { gejala: umbiKecil, bobot: 0.6 },
                { gejala: leherTerpotong, bobot: 0.7 },
                { gejala: daunMenguning, bobot: 0.5 }
            ]
        },
        "Virus Mozaik Bawang": {
            m: 0,
            evidence: [
                { gejala: pangkalDaunMengecil, bobot: 0.8 },
                { gejala: daunMenguning, bobot: 0.6 },
                { gejala: umbiGelap, bobot: 0.5 }
            ]
        },
        "Bercak Daun": {
            m: 0,
            evidence: [
                { gejala: bercakMelekuk, bobot: 0.7 },
                { gejala: ujungDaunPatah, bobot: 0.8 }
            ]
        }
    };

    // Tambahkan cara penanganan untuk setiap penyakit
    const treatment = {
        "Layu Fusarium": "Penanganan: Gunakan fungisida berbasis benomil atau metil tiofanat. Lakukan rotasi tanaman untuk mencegah penyebaran.",
        "Bercak Ungu": "Penanganan: Aplikasikan fungisida mancozeb secara berkala dan hindari kelembapan berlebih di sekitar tanaman.",
        "Antraknosa": "Penanganan: Lakukan pemotongan bagian tanaman yang terinfeksi, serta gunakan fungisida berbasis tembaga.",
        "Virus Mozaik Bawang": "Penanganan: Hancurkan tanaman yang terinfeksi. Kendalikan vektor virus dengan insektisida dan gunakan varietas tahan virus.",
        "Bercak Daun": "Penanganan: Kurangi kelembapan dan aplikasikan fungisida berbasis tembaga atau klorotalonil."
    };

    // Hitung nilai belief
    for (let disease in beliefFunctions) {
        beliefFunctions[disease].evidence.forEach(e => {
            if (e.gejala === "ya") {
                beliefFunctions[disease].m += e.bobot;
            }
        });
    }

    // Hitung diagnosis
    let result = "Tidak ada penyakit yang terdeteksi.";
    let maxBelief = 0;
    let diagnosedDisease = "";

    for (let disease in beliefFunctions) {
        if (beliefFunctions[disease].m > maxBelief) {
            maxBelief = beliefFunctions[disease].m;
            diagnosedDisease = disease;
        }
    }

    // Tampilkan hasil diagnosis dan cara penanganan
    if (maxBelief > 0) {
        result = `Penyakit terdeteksi: ${diagnosedDisease}<br>${treatment[diagnosedDisease]}`;
    }

    document.getElementById("result").innerHTML = `<h3>${result}</h3>`;
}
