import { useEffect, useState } from "react";
import ExceptionList from "./components/ExceptionList.jsx";
import ExceptionModal from "./components/ExceptionModal.jsx";

function App() {
  const [logs, setLogs] = useState({});
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    fetch("/data/logs.json")
      .then((res) => res.json())
      .then((data) => setLogs(data));
  }, []);

  // Extract unique exception messages
  const uniqueMessages = [...new Set(
    Object.values(logs).map(item => item.exceptionMessage)
  )];

  return (
    <div className="p-5">
      <h1>Exception Viewer</h1>
      <ExceptionList
        messages={uniqueMessages}
        onSelect={setSelectedMessage}
      />

      {selectedMessage && (
        <ExceptionModal
          message={selectedMessage}
          logs={logs}
          onClose={() => setSelectedMessage(null)}
        />
      )}
    </div>
  );
}

export default App;
