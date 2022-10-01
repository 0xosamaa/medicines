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

  const showMedications = () => {
    return medsObjToObjArray().map((medication) => {
      if (!error && !loading) {
        return (
          <div key={medication.type}>
            <h3>{medication.type}</h3>
            <ul>
              <li>{medication.details[0].associatedDrug[0].name}</li>
            </ul>
          </div>
        );
      } else return <div>{error}</div>;
    });
  };

  return (
    <div className="App">
      <div>{loading ? <p>Loading...</p> : showMedications()}</div>
    </div>
  );
}

export default App;
