import { useState, useEffect } from "react";

function EntityDetails({ fetchMethod, params, propsToDisplay }) {
  const [entity, setEntity] = useState(null);

  useEffect(() => {
    setEntity(null);
    fetchMethod(params).then((res) => {
      setEntity(res);
      console.log("User: ", res);
    });
  }, [fetchMethod, params]);

  return entity ? (
    <div className="center">
      <h3>{entity.name} Details:</h3>
      {Object.entries(propsToDisplay).map((entry) => (
        <div key={entry[1]}>
          {" "}
          {entry[1]}: <strong>{entity[entry[0]]}</strong>
        </div>
      ))}
    </div>
  ) : (
    <p className="center">Loading...</p>
  );
}

export default EntityDetails;
