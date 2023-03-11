import './App.css'
import {PageIndex} from "./pages/index";
import { useEffect } from 'react';
import { messagesFetch } from './api/features/slices/messageSlice';
import { useAppDispatch } from './api/features/store';

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(messagesFetch())
  })
  return (
    <div className="App">
      <PageIndex />
    </div>
  );
}

export default App;
