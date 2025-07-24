import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetail({ cartItems, setCartItems }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (!product)
    return <div className="text-center p-10">Product not found.</div>;

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center bg-gray-100 rounded-lg p-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-2/3 lg:w-full max-h-[400px] object-contain"
          />
        </div>

        {/* Product Info Section */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl lg:text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600 text-sm capitalize">{product.category}</p>

          {/* Price */}
          <p className="text-2xl text-green-600 font-bold">${product.price}</p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 font-semibold">
              {product.rating.rate}⭐
            </span>
            <span className="text-gray-500 text-sm">
              ({product.rating.count} reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-md">{product.description}</p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <button className="border border-red-500 text-red-500 px-6 py-2 rounded-lg hover:bg-red-50">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
