let qr;

function generateQR() {
    const text = document.getElementById("text").value;

    if (!text) {
        alert("Enter something!");
        return;
    }

    document.getElementById("qrcode").innerHTML = "";

    qr = new QRCode(document.getElementById("qrcode"), {
        text: text,
        width: 200,
        height: 200
    });
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
