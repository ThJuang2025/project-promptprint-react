<<<<<<< HEAD
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Save,
  Upload,
  Tag,
  DollarSign,
  FileText,
  Type,
} from "lucide-react";

export default function AdminProduct() {
  const navigate = useNavigate();
=======
import React, { useState, useEffect } from "react";

const AdminProduct = () => {
  const [products, setProducts] = useState([]);
>>>>>>> 8cebf9cbacd9c20cadc7c2d09073714c65950344
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
<<<<<<< HEAD
    imageUrl: "",
    tag: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
=======
    quantity: "",
    tag: "",
    imageUrl: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [errors, setErrors] = useState({});

  const fetchProducts = React.useCallback(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/products`
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.description)
      tempErrors.description = "Description is required";
    if (!formData.price || formData.price <= 0)
      tempErrors.price = "Price must be positive";
    if (!formData.quantity || formData.quantity < 0)
      tempErrors.quantity = "Quantity cannot be negative";
    if (!formData.tag) tempErrors.tag = "Tag is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
>>>>>>> 8cebf9cbacd9c20cadc7c2d09073714c65950344

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    setIsSubmitting(true);
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Unauthorized! Please login as admin.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/admin/products`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Product Created Successfully!");
        navigate("/admin/manage-products"); // Redirect to list after success
      } else {
        alert("Failed to create product");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error connecting to server");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/admin/manage-products"
            className="p-2 rounded-full bg-white hover:bg-gray-100 border border-gray-200 transition-colors text-gray-500 hover:text-gray-900"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Add New Product
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Create a new item for your inventory
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Type className="w-4 h-4" /> Product Name
              </label>
              <input
                name="name"
                placeholder="Ex. Premium Cotton T-Shirt"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-400"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4" /> Description
              </label>
              <textarea
                name="description"
                placeholder="Detailed description of the product..."
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-400 resize-none"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <DollarSign className="w-4 h-4" /> Price (THB)
                </label>
                <input
                  name="price"
                  type="number"
                  placeholder="0.00"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-400"
                  required
                />
              </div>

              {/* Tag */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Tag className="w-4 h-4" /> Tag (Optional)
                </label>
                <input
                  name="tag"
                  placeholder="Ex. Best Seller, New Arrival"
                  value={formData.tag}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-400"
                />
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Upload className="w-4 h-4" /> Product Image
              </label>

              {/* File Upload Input */}
              <div className="mb-4">
                <div className="flex items-center gap-4">
                  <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg border border-gray-300 transition-colors flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    <span>Choose File</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={async (e) => {
                        const file = e.target.files[0];
                        if (!file) return;

                        const formData = new FormData();
                        formData.append("image", file);

                        const token = localStorage.getItem("token"); // Get token here
                        try {
                          const response = await fetch(
                            `${import.meta.env.VITE_API_URL}/api/upload`,
                            {
                              method: "POST",
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                              body: formData,
                            }
                          );
                          const data = await response.json();
                          if (data.imageUrl) {
                            setFormData((prev) => ({
                              ...prev,
                              imageUrl: data.imageUrl,
                            }));
                          }
                        } catch (error) {
                          console.error("Upload failed", error);
                          alert("Upload failed");
                        }
                      }}
                    />
                  </label>
                  <span className="text-gray-400 text-sm">
                    or paste URL below
                  </span>
                </div>
              </div>

              <input
                name="imageUrl"
                placeholder="https://example.com/image.jpg"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-400"
                required
              />
              {formData.imageUrl && (
                <div className="mt-4 p-2 bg-gray-50 rounded-xl border border-gray-200 w-fit">
                  <img
                    src={formData.imageUrl}
                    alt="Preview"
                    className="h-32 rounded-lg object-cover"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Creating..."
                ) : (
                  <>
                    <Save className="w-5 h-5" /> Create Product
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
=======
    if (!validate()) return;

    try {
      const method = editingId ? "PUT" : "POST";
      const url = editingId
        ? `${import.meta.env.VITE_API_URL}/api/products/${editingId}`
        : `${import.meta.env.VITE_API_URL}/api/products`;

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchProducts();
        resetForm();
      } else {
        console.error("Failed to save product");
      }
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleEdit = (product) => {
    setEditingId(product._id);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
      tag: product.tag,
      imageUrl: product.imageUrl || "",
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`, {
          method: "DELETE",
        });
        fetchProducts();
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
      quantity: "",
      tag: "",
      imageUrl: "",
    });
    setEditingId(null);
    setErrors({});
  };

  return (
    <div className="container mx-auto p-6 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        Admin Product Management
      </h1>

      {/* Form Section */}
      <div className="bg-gray-900 p-8 rounded-xl shadow-2xl mb-12 border border-gray-800">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          {editingId ? "Edit Product" : "Add New Product"}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="space-y-1">
            <label className="text-gray-400 text-sm">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full bg-gray-800 border ${
                errors.name ? "border-red-500" : "border-gray-700"
              } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
              placeholder="e.g. Neon T-Shirt"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-gray-400 text-sm">Price ($)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className={`w-full bg-gray-800 border ${
                errors.price ? "border-red-500" : "border-gray-700"
              } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
              placeholder="0.00"
            />
            {errors.price && (
              <p className="text-red-500 text-xs">{errors.price}</p>
            )}
          </div>

          <div className="space-y-1 md:col-span-2">
            <label className="text-gray-400 text-sm">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={`w-full bg-gray-800 border ${
                errors.description ? "border-red-500" : "border-gray-700"
              } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all h-24`}
              placeholder="Product details..."
            />
            {errors.description && (
              <p className="text-red-500 text-xs">{errors.description}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-gray-400 text-sm">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className={`w-full bg-gray-800 border ${
                errors.quantity ? "border-red-500" : "border-gray-700"
              } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
              placeholder="0"
            />
            {errors.quantity && (
              <p className="text-red-500 text-xs">{errors.quantity}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-gray-400 text-sm">Tag</label>
            <input
              type="text"
              name="tag"
              value={formData.tag}
              onChange={handleChange}
              className={`w-full bg-gray-800 border ${
                errors.tag ? "border-red-500" : "border-gray-700"
              } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
              placeholder="e.g. Summer, Sale"
            />
            {errors.tag && <p className="text-red-500 text-xs">{errors.tag}</p>}
          </div>

          <div className="space-y-1 md:col-span-2">
            <label className="text-gray-400 text-sm">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              placeholder="http://example.com/image.jpg"
            />
          </div>

          <div className="md:col-span-2 flex gap-4 mt-4">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/30"
            >
              {editingId ? "Update Product" : "Add Product"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-3 bg-gray-700 rounded-lg font-semibold hover:bg-gray-600 transition-all"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* List Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all group"
          >
            {product.imageUrl && (
              <div className="h-48 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-pink-500 font-bold text-lg">
                  ${product.price}
                </span>
                <span className="text-gray-500 text-xs px-2 py-1 bg-gray-800 rounded-full border border-gray-700">
                  Qty: {product.quantity}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(product)}
                  className="flex-1 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="flex-1 px-4 py-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        {products.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-500">
            No products found. Add some above!
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProduct;
>>>>>>> 8cebf9cbacd9c20cadc7c2d09073714c65950344
