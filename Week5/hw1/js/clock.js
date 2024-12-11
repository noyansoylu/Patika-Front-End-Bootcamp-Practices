    // Karşılama ekranı
function askUserName() {
    const name = prompt("Adınız Nedir?", "Misafir");
  
    // Yazılan ismi HTML'de görüntülemek için
    document.getElementById("myName").textContent = name;
  }

    // Saat ve gün bilgisi için fonksiyon
function showTime() {
    const present = new Date();
    
    const hours = present.getHours().toString().padStart(2, "0");
    const minutes = present.getMinutes().toString().padStart(2, "0");
    const seconds = present.getSeconds().toString().padStart(2, "0");
  
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const day = days[present.getDay()];

    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById("day").textContent = day;

  }
  
  askUserName();
  setInterval(showTime, 1000);
  showTime();
