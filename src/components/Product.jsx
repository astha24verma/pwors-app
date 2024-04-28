import React from 'react';

const Product = ({ data }) => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
  };

  return Array.isArray(data) && data.length > 0 ? (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {data.map((product) => (
        <div key={product.id} className="group relative">
          <div className="w-full h-64 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-full w-full object-contain"
              onError={handleImageError}
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{product.genre}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Product;