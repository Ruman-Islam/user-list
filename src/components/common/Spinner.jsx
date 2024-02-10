export default function Spinner() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-current" />
    </div>
  );
}
