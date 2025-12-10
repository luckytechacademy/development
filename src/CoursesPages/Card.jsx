function Card({ title, children, highlight }) {
  return (
    <div
      className={`p-4 rounded-lg shadow-md mb-6 border ${
        highlight ? "bg-purple-50 border-purple-400" : "bg-white border-gray-300"
      }`}
    >
      <h4 className="text-xl font-semibold mb-2 text-purple-700">{title}</h4>
      {children}
    </div>
  );
}

export default Card;
