/* eslint-disable react/prop-types */
export default function ErrorAlert({ error, enteredSearch }) {
  return (
    <div className="alert alert-dismissible alert-warning">
      <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
      <strong>Oh snap!</strong> &apos;{enteredSearch}&apos; resulted in &apos;{error}&apos; error.
    </div>
  );
}
