import SpinnerComponent from "../Spinner/SpinnerComponent";

export default function ErrorModal() {
  return (
    <div className="inset-0 fixed bg-black/25 m-auto z-96">
      <SpinnerComponent />
    </div>
  );
}
