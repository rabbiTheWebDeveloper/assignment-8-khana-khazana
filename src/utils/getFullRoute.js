export const getFullRoute = () => {
  if (typeof window !== 'undefined') {
    const fullRoute = window.location.href;
    return fullRoute;
  }
  return null;
};