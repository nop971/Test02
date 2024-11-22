document.getElementById("revealButton").addEventListener("click", function() {
    const message = document.getElementById("message");
    message.style.display = (message.style.display === "none" || message.style.display === "") ? "block" : "none"; // toggle แสดง/ซ่อน

    // เปลี่ยนข้อความของปุ่ม
    this.innerText = (message.style.display === "block") ? "เก็บ" : "กดดูสิ";
});
