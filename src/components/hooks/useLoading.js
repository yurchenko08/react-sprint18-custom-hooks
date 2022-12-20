import { useState, useEffect } from 'react';
export const useLoading = (fetchMethod, params) => {
  const [entity, setEntity] = useState(null);

  useEffect(() => {
    fetchMethod(params).then((res) => {
      setEntity(res);
      console.log('Users: ', res);
    });
  }, [fetchMethod, params]);

  return entity;
};
