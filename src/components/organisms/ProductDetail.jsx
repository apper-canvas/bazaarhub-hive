import { useState } from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import RatingStars from "@/components/molecules/RatingStars";
import PriceDisplay from "@/components/molecules/PriceDisplay";

const ProductDetail = ({ product, onAddToCart, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <div className="sticky top-0 bg-white z-10 p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Product Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ApperIcon name="X" size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
src={product.images_c[selectedImage]}
                alt={product.title_c}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images_c.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-primary shadow-lg scale-105"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
<p className="text-sm text-gray-500 mb-2">{product.brand_c}</p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.title_c}
              </h1>
              <RatingStars rating={product.rating_c} reviewCount={product.review_count_c} size={20} />
            </div>

<PriceDisplay
              price={product.price_c}
              originalPrice={product.original_price_c}
              className="text-3xl"
            />

            <div>
              <Badge variant={product.in_stock_c ? "success" : "danger"}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </Badge>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
<p className="text-gray-700 leading-relaxed">{product.description_c}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
              <div className="space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-start justify-between py-2 border-b border-gray-100"
                  >
                    <span className="text-sm font-medium text-gray-600">{key}:</span>
                    <span className="text-sm text-gray-900 text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <ApperIcon name="Minus" size={18} />
                  </button>
                  <span className="text-lg font-semibold w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <ApperIcon name="Plus" size={18} />
                  </button>
                </div>
              </div>

              <Button
                onClick={handleAddToCart}
disabled={!product.in_stock_c}
                className="w-full"
                size="lg"
              >
                <ApperIcon name="ShoppingCart" size={20} />
                {product.in_stock_c ? "Add to Cart" : "Out of Stock"}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetail;