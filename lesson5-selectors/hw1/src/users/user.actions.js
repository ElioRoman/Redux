export const FILTER_TEXT = 'FILTER_TEXT';

export const setFilterText = text => {
  return {
    type: FILTER_TEXT,
    payload: {
      text,
    },
  };
};
