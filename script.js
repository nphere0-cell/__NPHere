<section className="hero py-20 bg-gray-100 text-center">
  <h1 className="text-4xl font-bold mb-6">Eco-Friendly Candles for Every Mood</h1>
  <p className="text-lg mb-8">Handmade, plant-based, reusable jars, and customizable.</p>
  <a
    href="/products"
    className="px-8 py-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
  >
    Browse Products
  </a>
</section>
// Scroll animation for features
const features = document.querySelectorAll('.feature');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

features.forEach(f => observer.observe(f));
import Head from "next/head";

<Head>
  <title>{product.name} | NPHere</title>
  <meta name="description" content={product.shortDescription || "Eco-friendly handmade candles"} />
  <meta name="keywords" content="candles, eco-friendly, handmade, reusable, NPHere" />
  <meta name="robots" content="index, follow" />
</Head>

{/* Product Images */}
<div className="product-images">
  {product.images.map((img, index) => (
    <img
      key={index}
      src={img.url}
      alt={img.alt || `Image of ${product.name}`} // Alt text added
      className="w-full h-auto object-cover mb-4 rounded-lg"
    />
  ))}
</div>
<img
  src={img.url}
  alt={img.alt || `Image of ${product.name}`}
  loading="lazy"  // Lazy loading added
  className="w-full h-auto object-cover mb-4 rounded-lg"
/>

// Animate founders on scroll
const founders = document.querySelectorAll('.founder-card');
const founderObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, {threshold: 0.2});

founders.forEach(f => founderObserver.observe(f));
// Smooth scroll for product slider
const slider = document.querySelector('.product-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});
// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  item.querySelector('.faq-question').addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
// Contact form submit (demo only)
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for reaching out! We will get back to you soon.');
});

// Newsletter form submit (demo only)
document.querySelector('.newsletter-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('You have successfully subscribed to our newsletter!');
});
// Footer social icons animation
document.querySelectorAll('.social-icons a').forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.transform = 'rotate(10deg) scale(1.2)';
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'rotate(0) scale(1)';
  });
});
// server.js or app.js
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const paytm = require("paytmchecksum"); // Paytm official checksum library

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Replace with your Paytm credentials
const MID = "YOUR_MID_HERE";
const MERCHANT_KEY = "YOUR_MERCHANT_KEY_HERE";
const WEBSITE = "WEBSTAGING"; // or "WEB"
const CHANNEL_ID = "WEB";
const INDUSTRY_TYPE_ID = "Retail";
const CALLBACK_URL = "https://yourdomain.com/callback";  // callback endpoint

// Route to initiate transaction
app.post("/api/paytm/initiate", async (req, res) => {
  const { orderId, amount, customerId } = req.body;

  // Prepare parameters
  let paytmParams = {};
  paytmParams["MID"] = MID;
  paytmParams["WEBSITE"] = WEBSITE;
  paytmParams["CHANNEL_ID"] = CHANNEL_ID;
  paytmParams["INDUSTRY_TYPE_ID"] = INDUSTRY_TYPE_ID;
  paytmParams["ORDER_ID"] = orderId;
  paytmParams["CUST_ID"] = customerId;
  paytmParams["TXN_AMOUNT"] = amount.toString();
  paytmParams["CALLBACK_URL"] = CALLBACK_URL;

  // You can add more parameters like mobile, email etc.

  try {
    // Generate checksum
    const checksum = await paytm.generateSignature(
      paytmParams,
      MERCHANT_KEY
    );

    const paramsWithChecksum = {
      ...paytmParams,
      CHECKSUMHASH: checksum,
    };

    // Send these params to client to submit form to Paytm
    res.json(paramsWithChecksum);
  } catch (err) {
    console.error("Checksum error:", err);
    res.status(500).send("Error in initiating transaction");
  }
});

// Callback route to handle Paytm response
app.post("/callback", async (req, res) => {
  const receivedParams = req.body;
  const paytmChecksum = receivedParams.CHECKSUMHASH;
  delete receivedParams.CHECKSUMHASH;

  const isValid = await paytm.verifySignature(
    receivedParams,
    MERCHANT_KEY,
    paytmChecksum
  );

  if (isValid) {
    // Check transaction status via Paytm Transaction Status API optionally
    // Then respond / show success page
    res.send("Payment Successful and checksum valid");
  } else {
    res.status(400).send("Checksum mismatch or invalid response");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
