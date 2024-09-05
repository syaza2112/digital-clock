function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = String(now.getHours()).padStars(2, '0');
    const minutes = String(now.grtMinutes()).padStart(2, '0');
    const second = String(now.getSecond()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${second}`;
}
setInterval(updateTime, 1000);
updateTime();
