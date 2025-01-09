import { DrawingCanvas } from './components/DrawingCanvas';
import './App.css';

function App() {
  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center items-center'>
      <div className='max-w-4xl w-full mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center text-gray-800 mb-8'>그림 그리기 앱</h1>
        <div className='bg-white rounded-lg shadow-lg p-6'>
          <DrawingCanvas />
        </div>
      </div>
    </div>
  );
}

export default App;
