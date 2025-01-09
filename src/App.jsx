import { DrawingCanvas } from './components/DrawingCanvas';

function App() {
  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center items-center'>
      <div className='max-w-4xl w-full mx-auto px-4'>
        <div className='flex flex-col items-center mb-8'>
          <h1 className='text-4xl font-bold text-center text-gray-800'>그림톡</h1>
          <p className='text-xl font-bold text-center text-gray-800'>grim-talk</p>
        </div>
        <div className='bg-white rounded-lg shadow-lg p-6'>
          <DrawingCanvas />
        </div>
      </div>
    </div>
  );
}

export default App;
