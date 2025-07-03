const button = document.getElementById("fetchFox");
const foxContainer = document.getElementById("foxContainer");

button.addEventListener("click", async () => {
  try {
    const response = await fetch("https://randomfox.ca/floof/");
    if (!response.ok) {
      throw new Error("APIからのデータ取得に失敗しました");
    }
    const data = await response.json();
    foxContainer.innerHTML = `<img src="${data.image}" alt="キツネ" style="max-width: 100%; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);">`;
  } catch (error) {
    foxContainer.innerHTML = `<p style="color: red;">エラー: ${error.message}</p>`;
  }
});
