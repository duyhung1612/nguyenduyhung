document.addEventListener("DOMContentLoaded", () => {
  // --- Lấy các phần tử ---
  const startScreen = document.getElementById("start-screen");
  const loadingScreen = document.getElementById("loading-screen");
  const resultScreen = document.getElementById("result-screen");

  const nameInput = document.getElementById("nameInput");
  const startBtn = document.getElementById("startBtn");
  const againBtn = document.getElementById("againBtn");

  const receiverName = document.getElementById("receiverName");
  const message = document.getElementById("message");
  const resultCard = document.querySelector(".result-card");

  // --- Danh sách lời chúc ---
  const messages = [
    {
      text: "Chúc {name} luôn rạng rỡ, tự tin và tươi như hoa hồng buổi sớm.",
      emoji: "🌹",
    },
    {
      text: "20/10 thật vui vẻ và hạnh phúc nhé {name}! Mong mọi điều tốt đẹp sẽ đến với cậu.",
      emoji: "💗",
    },
    {
      text: "Gửi {name}: Cảm ơn vì đã luôn đáng yêu, vui vẻ và khiến thế giới này ấm áp hơn.",
      emoji: "🌸",
    },
    {
      text: "Chúc {name} có một ngày 20/10 ngập tràn quà và hoa, nhưng quan trọng nhất là luôn được yêu thương nhé!",
      emoji: "🎁",
    },
    {
      text: "Happy Women's Day, {name}! Hãy luôn là cô gái mạnh mẽ, độc lập và xinh đẹp theo cách riêng của mình.",
      emoji: "✨",
    },
    {
      text: "{name} ơi, hôm nay là ngày của cậu đó! Hãy cứ tỏa sáng và làm những điều mình thích nhé.",
      emoji: "💖",
    },
  ];

  // --- Hàm chuyển màn hình ---
  function showScreen(screenToShow) {
    document.querySelectorAll(".screen").forEach((screen) => {
      screen.classList.remove("active");
    });
    screenToShow.classList.add("active");
  }

  // --- Hàm tạo hiệu ứng mưa tim ---
  function startFallingHearts() {
    const heartInterval = setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart-fall");
      heart.innerText = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 2 + 3 + "s";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }, 300);

    // Dừng hiệu ứng sau 7 giây
    setTimeout(() => clearInterval(heartInterval), 7000);
  }

  // --- Sự kiện chính ---

  // 1. Nhấn nút "Bốc thư"
  startBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (!name) {
      alert("Bạn ơi, nhập tên vào đã nhé! 💞");
      return;
    }

    showScreen(loadingScreen);

    setTimeout(() => {
      // Chọn lời chúc ngẫu nhiên
      const randomChoice =
        messages[Math.floor(Math.random() * messages.length)];
      const formattedMessage =
        randomChoice.text.replace("{name}", name) + " " + randomChoice.emoji;

      // Cập nhật nội dung
      receiverName.textContent = name;
      message.textContent = formattedMessage;

      // Hiện kết quả và hiệu ứng
      showScreen(resultScreen);
      resultCard.classList.add("active");
      startFallingHearts();
    }, 2500); // Giả lập thời gian chờ 2.5 giây
  });

  // 2. Nhấn nút "Bốc thêm thư khác"
  againBtn.addEventListener("click", () => {
    nameInput.value = ""; // Xóa tên đã nhập
    resultCard.classList.remove("active"); // Reset hiệu ứng
    showScreen(startScreen);
  });
});
