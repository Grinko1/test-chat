import { configureStore } from '@reduxjs/toolkit'
import messagesReducer  from './slices/messageSlice';
import chatReducer  from './slices/chatSlice';
import headerReducer from './slices/headerSlice';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    messages:messagesReducer,
    chat: chatReducer,
    header: headerReducer
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store