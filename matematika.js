if (
  !sessionStorage.getItem("valueLevel") ||
  !sessionStorage.getItem("username")
) {
  window.location.href = "./login.html";
}

function generateQuestion() {
  const questions = [
    { soal: "jika 3 ekor kambing memakan 3 lapangan rumput menghabiskan waktu selama 3 hari, berapa hari yang dibutuhkan 5 kambing memakan 5 lapangan rumput?", jawab: 3 },
    { soal: "Keran A mengisi ember dengan waktu 3 menit, Keran B mengisi ember dengan waktu 2 menit, jika keran A dan keran B dibuka bersamaan dan mengisi di satu ember yang sama, berapa detik yang dibutuhkan hingga ember terisi full", jawab: 72 },
    { soal: "Terdapat 2 celana yang berwarna hitam dan biru, 4 baju berwarna kuning, merah, putih, dan ungu, serta 3 macam sepatu. Ada berapa banyak cara memilih pasangan warna celana, baju, dan sepatu tersebut?", jawab: 24},
    { soal: "Jika dua buah dadu digulingkan sebanyak 36 kali, maka peluang memperoleh mata dadu berjumlah 7 adalah .... kali", jawab: 6},
    { soal: "(15-(-4)-n) = 10. Nilai dari n adalah", jawab: 9},
    { soal: "1 + 1 x 0 = ...", jawab: 1},
    { soal: "Seorang pedagang membeli beras 120 karung. Setiap karung berisi 20 kg. Beras tersebut terjual 1987 kg. Untuk menambah persediaan, pedagang membeli lagi 1000 kg. Beras pedagang tersebut sekarang ada ...", jawab: 1413},
    { soal: "Hasil dari 15% : 22/5 x 11/30 x10000 adalah ....", jawab: 125},
    { soal: "FPB dari 27,45 dan 63 adalah", jawab: 9},
    { soal: "Pak John punya 90 ekor ayam. Perbandingan banyak ayam jantan dan betina adalah 1:4. Banyak ayam jantan adalah ..... ekor", jawab: 18},
    { soal: "17-(-10)-X=20; berapa kah X?", jawab: 7 },
    { soal: "di tahun 2011, umur Ayah adalah 2x umur Okta. Tahun 2021, umur ayah adalah 52, berapa umur Okta di tahun 2021?", jawab: 31 },
    { soal: "Kawat yang panjangnya 1,5 m akan digunakan untuk membuat dua buah model kerangka balok dengan ukuran 7 cm x 3 cm x 5 cm. berapa cm sisa kawat", jawab: 30 },
    { soal: " Jika 4 kucing menangkap 4 tikus dalam 6 menit, maka jumlah tikus yang ditangkap 20 kucing dalam waktu 30 menit adalah...", jawab: 100 },
    { soal: " Sebuah mobil berangkat pukul 07.45 dari Pandeglang menuju Balaraja. Sampai di Balaraja  pada pukul 09.15. Balaraja Pandeglang jaraknya 60 km, berapa km/jam rata-rata kecepatan mobil?", jawab: 40 },
  ];
  let index = Math.floor(Math.random() * questions.length);
  return questions[index];
}
//question = { soal: "14+1:", jawab: 15 }
//jawab = angka
let question = generateQuestion();
let life = sessionStorage.getItem("valueLevel")
let username = sessionStorage.getItem("username");
let divLife = document.getElementById("life");
let anakLife = document.createElement("i");
function lifeCount(life) {
  if (life === 0) {
    return life;
  }
  let word = "";
  for (let i = 0; i < life; i++) {
    word += "🍌";
  }
  return word;
}

anakLife.innerText = lifeCount(life);
anakLife.className = "material-icons";
let temp = anakLife.cloneNode(true);
divLife.appendChild(anakLife);
document.getElementById("username").innerText =  username.toUpperCase();
let score = Number(document.getElementById("score").innerText);

let modal = document.getElementById("modalConfirmDelete")
let dialogue = document.getElementById("modal-dialogue")

let anak = document.createElement("div");
let soal = document.getElementById("soal");
anak.innerText = question.soal;
anak.setAttribute("id", "soal1");
soal.appendChild(anak);
let isGameOver = false;
function menjawab(e) {
  e.preventDefault();
  let userAnswer = document.getElementById("user-answer").value;
  let benar = false;
  if (life > 0) {
    question.jawab == userAnswer ? (benar = true) : (benar = false);
    if (benar) {
      score += 10;
      let question2 = generateQuestion();
      if (question.soal == question2.soal) {
        let same = true;
        while (same) {
          question2 = generateQuestion();
          if (question.soal !== question2.soal) {
            console.log(question, question2);
            break;
          }
        }
        question = question2;
      } else {
        question = question2;
      }
      document.getElementById("soal1").innerHTML = question.soal;
      document.getElementById("user-answer").value = "";
      soal.appendChild(anak);
    } else {
      if (life > 1) {
        life--;
        document.getElementById("user-answer").value = "";
      } else {
        life--;
        document.querySelector("#user-answer").disabled = true;
        document.querySelector("#btnSub").disabled = true;
        dialogue.innerText = `ANDA KALAH, SCORE ANDA ${score}`
        modal.style.display = "block";
      }
    }
    document.getElementById("life").innerText = lifeCount(life);
    document.getElementById("score").innerText = score;
  }
}

function reset(){
  document.querySelector("#user-answer").disabled = false;
  document.querySelector("#btnSub").disabled = false;
  score = 0;
  life = Number(sessionStorage.getItem("valueLevel"));
  document.getElementById("life").innerText = lifeCount(life);
  document.getElementById("score").innerText = score;
}

sessionStorage.setItem("lastname", "Smith");
console.log(sessionStorage.getItem("lastname"));