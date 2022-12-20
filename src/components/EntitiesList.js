import { useLoading } from './hooks/useLoading';

function EntitiesList({ onEntityDetailsClick, propsToDisplay, fetchMethod }) {
  const entities = useLoading(fetchMethod);
  return entities ? (
    <ul>
      {entities.map((entity) => (
        <li key={entity.id}>
          <button onClick={() => onEntityDetailsClick(entity.id)}>👀</button>
          {Object.entries(propsToDisplay).map((entry) => (
            <span key={entity[entry[0]]}>
              {' '}
              {entry[1]}: <strong>{entity[entry[0]]}</strong>
            </span>
          ))}
        </li>
      ))}
    </ul>
  ) : (
    <p className='center'>Loading...</p>
  );
}

export default EntitiesList;
