import { useEffect, useState } from 'react';
import problems from '../apis/problems';

function App() {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMedicines = async () => {
      try {
        setError(false);
        setLoading(true);

        const response = await problems.get();

        setMedicines(
          response.data.problems[0].Diabetes[0].medications[0]
            .medicationsClasses[0]
        );

        setLoading(false);
      } catch (err) {
        setError(true);
      }
    };
    getMedicines();
  }, []);

  return (
    <div className="App">
      <div></div>
    </div>
  );
}

export default App;
