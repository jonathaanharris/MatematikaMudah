if (
  !sessionStorage.getItem("valueLevel") ||
  !sessionStorage.getItem("username")
) {
  window.location.href = "./login.html";
}
let kesulitan = sessionStorage.getItem("valueLevel");
function generateQuestion(kesulitan) {
  console.log(kesulitan);
  const questions1 = [
    {
      soal: "jika 3 ekor kambing memakan 3 lapangan rumput menghabiskan waktu selama 3 hari, berapa hari yang dibutuhkan 5 kambing memakan 5 lapangan rumput?",
      jawab: 3,
    },
    {
      soal: "Keran A mengisi ember dengan waktu 3 menit, Keran B mengisi ember dengan waktu 2 menit, jika keran A dan keran B dibuka bersamaan dan mengisi di satu ember yang sama, berapa detik yang dibutuhkan hingga ember terisi full",
      jawab: 72,
    },
    {
      soal: "Terdapat 2 celana yang berwarna hitam dan biru, 4 baju berwarna kuning, merah, putih, dan ungu, serta 3 macam sepatu. Ada berapa banyak cara memilih pasangan warna celana, baju, dan sepatu tersebut?",
      jawab: 24,
    },
    {
      soal: "Jika dua buah dadu digulingkan sebanyak 36 kali, maka peluang memperoleh mata dadu berjumlah 7 adalah .... kali",
      jawab: 6,
    },
    { soal: "(15-(-4)-n) = 10. Nilai dari n adalah", jawab: 9 },
    {
      soal: "Seorang pedagang membeli beras 120 karung. Setiap karung berisi 20 kg. Beras tersebut terjual 1987 kg. Untuk menambah persediaan, pedagang membeli lagi 1000 kg. Beras pedagang tersebut sekarang ada ...",
      jawab: 1413,
    },
    { soal: "Hasil dari 15% : 22/5 x 11/30 x10000 adalah ....", jawab: 125 },
    { soal: "FPB dari 27,45 dan 63 adalah", jawab: 9 },
    {
      soal: "Pak John punya 90 ekor ayam. Perbandingan banyak ayam jantan dan betina adalah 1:4. Banyak ayam jantan adalah ..... ekor",
      jawab: 18,
    },
    { soal: "17-(-10)-X=20; berapa kah X?", jawab: 7 },
    {
      soal: "di tahun 2011, umur Ayah adalah 2x umur Okta. Tahun 2021, umur ayah adalah 52, berapa umur Okta di tahun 2021?",
      jawab: 31,
    },
    {
      soal: "Kawat yang panjangnya 1,5m akan digunakan untuk membuat dua buah model kerangka balok dengan ukuran 7cm x 3cm x 5cm. berapa cm sisa kawat",
      jawab: 30,
    },
    {
      soal: " Jika 4 kucing menangkap 4 tikus dalam 6 menit, maka jumlah tikus yang ditangkap 20 kucing dalam waktu 30 menit adalah...",
      jawab: 100,
    },
    {
      soal: " Sebuah mobil berangkat pukul 07.45 dari Pandeglang menuju Balaraja. Sampai di Balaraja  pada pukul 09.15. Balaraja Pandeglang jaraknya 60km, berapa km/jam rata-rata kecepatan mobil?",
      jawab: 40,
    },
    {
      soal: " Sebuah mobil berjalan pada kecepatan 80 kilometer per jam. Seberapa jauhkah perjalanannya dalam waktu 75 menit?",
      jawab: 100,
    },
    {
      soal: "6 , 7 , 8 , 10 , 12 , 15 , 18 , 22 , .... ",
      jawab: 24,
    },
    {
      soal: "4, 12, 28, 60, 124, 252, … ",
      jawab: 508,
    },
    {
      soal: "0,6+0,06+0,006+0,0006+... = X, jika X dikali 3, berapakah X?",
      jawab: 2,
    },
    {
      soal: "2021x2021-2020x2020=",
      jawab: 4041,
    },
    {
      soal: "Jika 5<=X<=10 dan 2<=Y<=6, berapa nilai minimum (X-Y)(X+Y)?",
      jawab: -11,
    },
    {
      soal: "jika panjang diagonal persegi adalah 4, maka luas persegi itu adalah...",
      jawab: 8,
    },
    {
      soal: "1+2+3+4+5+6+7+...+19=",
      jawab: 190,
    },
    {
      soal: "Sebuah bejana berbentuk silinder berisi air 1/3 ya. Jika kemudian ditambah air sebanyak 3 liter lagi, bejana ini akan berisi kira-kira ½ nya. Berapa literkah kapasitas bejana itu? ",
      jawab: 18,
    },
    {
      soal: "Berapa umur nenek 10 tahun ke depan, apabila 3 tahun yang lalu umurnya 60 tahun?",
      jawab: 73,
    },
    {
      soal: "28 adalah berapa persen(%) dari 70",
      jawab: 40,
    },
  ];
  const questions2 = [
    { soal: "14+61:", jawab: 75 },
    { soal: "114+201:", jawab: 315 },
    { soal: "124+26:", jawab: 150 },
    { soal: "41+245:", jawab: 286 },
    { soal: "214+117:", jawab: 331 },
    { soal: "1 + 1 x 0:", jawab: 1 },
    { soal: "17x3:", jawab: 51 },
    { soal: "23x6:", jawab: 138 },
    { soal: "53+16:", jawab: 69 },
    { soal: "31+63:", jawab: 94 },
    { soal: "5x16:", jawab: 80 },
    { soal: "97+13:", jawab: 110 },
    { soal: "15x4:", jawab: 60 },
    { soal: "96+72:", jawab: 168 },
    { soal: "56+16:", jawab: 72 },
    { soal: "41+63:", jawab: 104 },
    { soal: "15x3:", jawab: 45 },
    { soal: "56+13:", jawab: 69 },
    { soal: "56+13:", jawab: 69 },
    { soal: "516+114:", jawab: 630 },
    { soal: "136+13:", jawab: 149 },
    { soal: "7x13:", jawab: 91 },
    { soal: "21x9:", jawab: 189 },
    { soal: "33x4:", jawab: 132 },
    { soal: "12x12:", jawab: 144 },
    { soal: "10+4x2:", jawab: 18 },
    { soal: "2x3+4x2:", jawab: 14 },
    { soal: "3x(5+2):", jawab: 21 },
    { soal: "144/(3*4):", jawab: 12 },
    { soal: "81/3:", jawab: 27 },
    { soal: "126/6:", jawab: 21 },
    { soal: "987 + 113 - 1000:", jawab: 100 },
  ];

  if (kesulitan == 1) {
    let index = Math.floor(Math.random() * questions1.length);
    return questions1[index];
  }
  if (kesulitan == 2) {
    let index = Math.floor(Math.random() * questions2.length);
    return questions2[index];
  }
  if (kesulitan == 3) {
    let obj = {};
    let a = Math.ceil(Math.random() * 10);
    let b = Math.ceil(Math.random() * 20);
    let jawab = a + b;
    obj.soal = `${a}+${b}:`;
    obj.jawab = jawab;
    return obj;
  }
}
//question = { soal: "14+1:", jawab: 15 }
//jawab = angka
let highScore = 0;
let question = generateQuestion(kesulitan);
let life = 3;
let username = sessionStorage.getItem("username");
let divLife = document.getElementById("life");
let anakLife = document.createElement("i");
let highSpan = document.getElementById("highSpan");
let highUser = document.getElementById("highUser");

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

if (
  sessionStorage.getItem("highScore1") &&
  sessionStorage.getItem("highUser1") &&
  kesulitan == 1
) {
  highSpan.innerText = sessionStorage.getItem("highScore1");
  highUser.innerText = sessionStorage.getItem("highUser1").toUpperCase();
} else if (
  sessionStorage.getItem("highScore2") &&
  sessionStorage.getItem("highUser2") &&
  kesulitan == 2
) {
  highSpan.innerText = sessionStorage.getItem("highScore2");
  highUser.innerText = sessionStorage.getItem("highUser2").toUpperCase();
} else if (
  sessionStorage.getItem("highScore3") &&
  sessionStorage.getItem("highUser3") &&
  kesulitan == 3
) {
  highSpan.innerText = sessionStorage.getItem("highScore3");
  highUser.innerText = sessionStorage.getItem("highUser3").toUpperCase();
} else {
  highSpan.innerText = 0;
  highUser.innerText = "Unknown";
}

anakLife.className = "material-icons";
let temp = anakLife.cloneNode(true);
divLife.appendChild(anakLife);
document.getElementById("username").innerText = username.toUpperCase();
let score = Number(document.getElementById("score").innerText);

let modal = document.getElementById("modalConfirmDelete");
let dialogue = document.getElementById("modal-dialogue");

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
      let question2 = generateQuestion(kesulitan);
      if (question.soal == question2.soal) {
        let same = true;
        while (same) {
          question2 = generateQuestion(kesulitan);
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
        if(score >= 100 && kesulitan == 1) {
          dialogue.innerText = `SELAMAT Anda sangat cerdas! skor Anda ${score}`;
        } else if(score >= 100) {
          dialogue.innerText = `SELAMAT skor Anda ${score} !! Tingkatkan tantanganmu!!`;
        } else if (score > 70) {
          dialogue.innerText = `NICE, Skor Anda ${score}`;
        } else {
          dialogue.innerText = `Yahh.. skor Anda hanya ${score}`;
        }
        
        modal.style.display = "block";
        if (score > highScore) {
          if (kesulitan == 1) {
            sessionStorage.setItem("highScore1", score);
            sessionStorage.setItem("highUser1", username);
            highScore = score;
          }
          if (kesulitan == 2) {
            sessionStorage.setItem("highScore2", score);
            sessionStorage.setItem("highUser2", username);
            highScore = score;
          }
          if (kesulitan == 3) {
            sessionStorage.setItem("highScore3", score);
            sessionStorage.setItem("highUser3", username);
            highScore = score;
          }
        }
      }
    }
    document.getElementById("life").innerText = lifeCount(life);
    document.getElementById("score").innerText = score;
  }
}

function reset() {
  document.querySelector("#user-answer").disabled = false;
  document.querySelector("#btnSub").disabled = false;
  score = 0;
  life = 3;
  document.getElementById("life").innerText = lifeCount(life);
  document.getElementById("score").innerText = score;
}

sessionStorage.setItem("lastname", "Smith");
console.log(sessionStorage.getItem("lastname"));
