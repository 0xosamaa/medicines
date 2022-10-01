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
        console.log(err);
      }
    };
    getMedicines();
  }, []);

  const medsObjToObjArray = () => {
    const medicineTypesObjArray = [];
    Object.keys(medicines).forEach((key) =>
      medicineTypesObjArray.push({
        type: key,
        details: medicines[key],
      })
    );
    return medicineTypesObjArray;
  };

  return (
    <div className="App">
      <div></div>
    </div>
  );
}

export default App;
