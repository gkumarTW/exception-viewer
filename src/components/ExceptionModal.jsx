export default function ExceptionModal({ message, logs, onClose }) {
  const occurrences = Object.values(logs).filter(
    (item) => item.exceptionMessage === message
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50 shadow ">
      <div className="h-[80%] bg-white rounded-lg shadow-2xl w-full max-w-lg border">

        {/* Header */}
        <div className="flex justify-end items-start mb- border-">
          
            <h3 className="text-xl font-semibold text-gray-90 whitespace-nowrap overflow-hidden text-ellipsis mt-4 ml-4">
              {message}
            </h3>



          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2 mt-2 mr-2 rounded transition"
          >
            ✕
          </button>
        </div>

        <div className="h-[80%] p-4">
          {/* Occurrences Title */}
          <h4 className="text-lg font-medium text-gray-800 mb-2 ">
            Occurrences:
          </h4>

          {/* List */}
          <ul className="h-[85%] overflow-y-auto space-y-2 pr-1">
            {occurrences.map((occ, idx) => (
              <li
                key={idx}
                className="p-3 bg-gray-100 rounded-md text-gray-800 text-sm"
              >
                {occ.content}
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="mt-6 text-right">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
