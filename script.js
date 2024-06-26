let totalPayment = 0;

function addItem(itemName, price) {
    // Tambahkan item ke keranjang pemesanan
    const cartItems = document.getElementById('cart-items');
    const newItem = document.createElement('div');
    newItem.classList.add('cart-item');
    newItem.innerHTML = `<p>${itemName} - Rp ${price}</p>`;
    cartItems.appendChild(newItem);

    // Tambahkan harga ke total pembayaran
    totalPayment += price;
    const totalPaymentDisplay = document.getElementById('total-payment');
    totalPaymentDisplay.textContent = `Rp ${totalPayment}`;

    // Tampilkan nomor antrian pemesanan
    const queueNumberDisplay = document.getElementById('queue-number');
    queueNumberDisplay.textContent = queueNumber++;
}

function processPayment() {
    // Ambil jumlah pembayaran dari input
    const paymentAmountInput = document.getElementById('payment-amount');
    const paymentAmount = parseFloat(paymentAmountInput.value);

    // Periksa apakah jumlah pembayaran mencukupi
    if (paymentAmount >= totalPayment) {
        // Hitung kembalian
        const change = paymentAmount - totalPayment;
        const changeDisplay = document.getElementById('change-amount');
        changeDisplay.textContent = `Rp ${change}`;

        alert(`Pembayaran berhasil! Kembalian Anda: Rp ${change}`);
        // Tambahkan logika tambahan di sini sesuai dengan kebutuhan Anda

        // Reset total pembayaran dan keranjang pemesanan
        totalPayment = 0;
        document.getElementById('cart-items').innerHTML = '';
        document.getElementById('total-payment').textContent = 'Rp 0';
        paymentAmountInput.value = '';
    } else {
        alert('Jumlah pembayaran tidak mencukupi.');
    }
}

document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Link clicked! Redirecting...');
    window.location.href = 'https://altzystore.wordpress.com/?p=7';
});

document.addEventListener('DOMContentLoaded', function() {
    const verticalContainer = document.querySelector('.vertical-scroll-container');
    const horizontalContainer = document.querySelector('.horizontal-scroll-container');

    // Animasi scroll vertical saat halaman dimuat
    animateVerticalScroll(verticalContainer);

    // Animasi scroll horizontal saat halaman dimuat
    animateHorizontalScroll(horizontalContainer);
});

function animateVerticalScroll(container) {
    const items = container.querySelectorAll('.vertical-scroll-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.transform = 'translateY(0)';
        }, index * 200); // Delay untuk efek animasi bertahap
    });
}

function animateHorizontalScroll(container) {
    const items = container.querySelectorAll('.horizontal-scroll-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.transform = 'translateX(0)';
        }, index * 200); // Delay untuk efek animasi bertahap
    });
}

const cart = Alpine.store("cart");
const items = cart.items.map((item) => ({
  name: item.name,
  quantity: item.quantity,
  total: item.price * item.quantity,
}));
objData.items = JSON.stringify(items);
objData.total = cart.total;

const message = formatMessage(objData);
const whatsappUrl = `https://wa.link/6zwbgi${encodeURIComponent(
  message
)}`;
window.open(whatsappUrl);

// Handle queue number display
handleQueue();
;

// Function to format the WhatsApp message
const formatMessage = (obj) => 
let ;
try {
  items = JSON.parse(obj.items);
  if (!Array.isArray(items)) {
    throw new Error("Items is not an array");
  }
} catch (e) {
  console.error("Failed to parse items:", e);
  return "Invalid items data";
}

const corsOptions = {
    origin: "https://github.com/AlfianStore/Altzystore777.git", // Domain yang diizinkan
    optionsSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));
  
  app.get("/nextQueueNumber", (req, res) => {
    queueNumber++;
    fs.writeFileSync("queueNumber.txt", queueNumber.toString());
    res.json({ queueNumber });
  });
  
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });