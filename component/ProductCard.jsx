export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src={product.img} alt={product.name} className="w-full h-56 object-cover" />
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-sky-500 font-bold mt-2">{product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-pink-400 text-white px-4 py-2 rounded-full hover:bg-pink-500 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

