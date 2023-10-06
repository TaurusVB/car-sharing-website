export const ErrorMessage = ({ children }) => {
  return (
    <div>
      <h3>Oops something went wrong!</h3>
      <p>Error message: {children}</p>
    </div>
  );
};
