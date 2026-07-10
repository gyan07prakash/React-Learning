import React from 'react'

function Card({cardName, btnText="visit me"}) {
    console.log(btnText)
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-6">
      <img
        className="w-full h-48 object-cover rounded-lg"
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500"
        alt="Nature"
      />

      <h2 className="text-2xl font-bold mt-4">Card Title</h2>

      <p className="text-gray-600 mt-2">
        This is a simple {cardName} card component. You can customize the
        content, image, and styling as needed.
      </p>

      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
        {btnText}
      </button>
    </div>
  );
}

export default Card