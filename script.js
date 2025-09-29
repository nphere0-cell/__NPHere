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
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Eco-Friendly Candle",
              },
              unit_amount: 2000, // $20.00
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      res.status(200).json({ id: session.id });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function BuyButton() {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <button
      onClick={handleCheckout}
      style={{
        padding: "10px 20px",
        background: "green",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Buy Now
    </button>
  );
}
export default function Success() {
  return <h1>✅ Payment Successful! Thank you for your purchase.</h1>;
}
export default function Cancel() {
  return <h1>❌ Payment Cancelled. Try again later.</h1>;
}
