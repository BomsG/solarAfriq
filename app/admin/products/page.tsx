'use client';
import { useState } from 'react';
// import AdminSidebar from '../../components/AdminSideBar';
// import AdminHeader from '../../components/AdminHeader';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  color: string;
  images: string[]; // Images stored as base64 strings for simplicity
}

const ProductManagement: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Solar Panel',
      price: 500,
      description: 'High-efficiency solar panel.',
      color: 'Blue',
      images: ['/images/solar-panel.jpg'],
    },
    {
      id: 2,
      name: 'Solar Battery',
      price: 300,
      description: 'Long-lasting solar battery.',
      color: 'Black',
      images: ['/images/solar-battery.jpg'],
    },
    {
      id: 3,
      name: 'Inverter',
      price: 200,
      description: 'Reliable inverter for solar systems.',
      color: 'Gray',
      images: ['/images/inverter.jpg'],
    },
  ]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newProduct, setNewProduct] = useState<Product>({
    id: products.length + 1,
    name: '',
    price: 0,
    description: '',
    color: '',
    images: [],
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleAddClick = () => {
    setSelectedProduct(null);
    setNewProduct({
      id: products.length + 1,
      name: '',
      price: 0,
      description: '',
      color: '',
      images: [],
    });
    setIsEditing(true);
  };
  const handleDeleteClick = (id: number) => {
    const productToDelete = products.find((product) => product.id === id);
    if (productToDelete) {
      if (window.confirm(`Are you sure you want to delete ${productToDelete.name}?`)) {
        setProducts(products.filter((product) => product.id !== id));
      }
    }
  };
  const handleEditClick = (product: Product) => {
    setSelectedProduct(product);
    setNewProduct(product); // Populate the form with the product's current details
    setIsEditing(true);
  };
  const handleSave = () => {
    if (isEditing && selectedProduct) {
      // Update existing product
      setProducts(products.map((p) => (p.id === selectedProduct.id ? selectedProduct : p)));
    } else {
      // Add new product
      setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    }
    setIsEditing(false);
    setSelectedProduct(null);
    setImagePreview(null);
  };

  const handleInputChange = (field: keyof Product, value: string | number) => {
    setNewProduct((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setNewProduct((prev) => ({
          ...prev,
          images: [base64String],
        }));
        setImagePreview(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsEditing(false);
    setImagePreview(null);
  };

  return (
    <div className='flex'>
      {/* <AdminSidebar /> */}
      <div className='flex-grow ml-64'>
        {/* <AdminHeader /> */}
        <div className='p-8'>
          <h2 className='text-2xl mb-5'>Manage Products</h2>
          <button
            className='bg-green-500 text-white px-4 py-2 rounded mb-5'
            onClick={handleAddClick}
          >
            Add New Product
          </button>
          <table className='w-full table-auto border-collapse border border-gray-300'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='border border-gray-300 px-4 py-2'>ID</th>
                <th className='border border-gray-300 px-4 py-2'>Name</th>
                <th className='border border-gray-300 px-4 py-2'>Price</th>
                <th className='border border-gray-300 px-4 py-2'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className='border border-gray-300 px-4 py-2'>{product.id}</td>
                  <td className='border border-gray-300 px-4 py-2'>{product.name}</td>
                  <td className='border border-gray-300 px-4 py-2'>${product.price}</td>
                  <td className='border border-gray-300 px-4 py-2'>
                    <button
                      className='bg-blue-500 text-white px-2 py-1 rounded mr-2'
                      onClick={() => handleEditClick(product)}
                    >
                      Edit
                    </button>
                    <button
                      className='bg-red-500 text-white px-2 py-1 rounded'
                      onClick={() => handleDeleteClick(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal for displaying and adding/editing product details */}
        {(selectedProduct || isEditing) && (
          <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center'>
            <div className='bg-white p-8 rounded shadow-md w-2/3'>
              <h3 className='text-xl mb-4'>{isEditing ? 'Add/Edit Product' : 'Product Details'}</h3>
              <div className='space-y-3'>
                <input
                  type='text'
                  placeholder='Name'
                  className='w-full p-2 border rounded'
                  value={newProduct.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
                <input
                  type='number'
                  placeholder='Price'
                  className='w-full p-2 border rounded'
                  value={newProduct.price}
                  onChange={(e) => handleInputChange('price', Number(e.target.value))}
                />
                <textarea
                  placeholder='Description'
                  className='w-full p-2 border rounded'
                  value={newProduct.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Color'
                  className='w-full p-2 border rounded'
                  value={newProduct.color}
                  onChange={(e) => handleInputChange('color', e.target.value)}
                />
                <input type='file' className='w-full p-2' onChange={handleImageChange} />
                {imagePreview && (
                  <div className='mt-2'>
                    <img src={imagePreview} alt='Preview' className='h-32 w-auto' />
                  </div>
                )}
              </div>
              <div className='mt-4'>
                <button
                  className='bg-green-500 text-white px-4 py-2 rounded mr-2'
                  onClick={handleSave}
                >
                  Save
                </button>
                <button className='bg-gray-500 text-white px-4 py-2 rounded' onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductManagement;
