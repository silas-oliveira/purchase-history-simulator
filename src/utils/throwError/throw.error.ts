const throwError =
  (name: string, defaultMessage = '') =>
  (message = defaultMessage) => {
    const error = new Error(message);
    error.name = name;
    throw error;
  };

export const throwInvalidOrUndefinedId = throwError(
  'throwInvalidOrUndefinedId',
  'Invalid Id/400'
);
