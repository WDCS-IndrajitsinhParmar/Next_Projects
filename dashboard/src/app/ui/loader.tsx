export default function Spinner() {
  return (
    <>
      <span className="h-screen w-full flex justify-center items-center">
        <span className="animate-spin relative flex h-12 w-12 rounded-sm bg-blue-300 opacity-75"></span>
      </span>
    </>
  );
}
