export default function ExceptionList({ messages, onSelect }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Unique Exceptions
      </h2>

      {/* List */}
      <ul className="space-y-2">
        {messages.map((msg, index) => (
          <li
            key={index}
            onClick={() => onSelect(msg)}
            className="
              cursor-pointer 
              p-3 
              rounded-md 
              bg-gray-100 
              text-gray-800 
              transition
            "
          >
            {msg}
          </li>
        ))}
      </ul>
    </div>
  );
}
