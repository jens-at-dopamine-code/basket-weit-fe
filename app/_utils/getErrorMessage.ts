export const getErrorMessage = (
  possibleError: unknown,
  defaultMessage: string,
) => (possibleError instanceof Error ? possibleError.message : defaultMessage);
