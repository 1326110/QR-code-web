let qr;

function generateQR() {
    const text = document.getElementById("text").value;

    if (!text) {
        alert("Please enter something!");
        return;
    }

    const qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = "";

    qr = new QRCode(qrContainer, {
        text: text,
        width: 200,
        height: 200
    });

    qrContainer.style.opacity = "0";
    setTimeout(() => {
        qrContainer.style.opacity = "1";
    }, 100);
}

function downloadQR() {
    const img = document.querySelector("#qrcode img");

    if (!img) {
        alert("Generate QR first!");
        return;
    }

    const link = document.createElement("a");
    link.href = img.src;
    link.download = "qr.png";
    link.click();
}
