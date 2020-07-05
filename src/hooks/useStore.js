import { useContext } from 'react';
import { store as global } from '../store';

export default function useStore() {
  const context = useContext(global);
  const { store, dispatch } = context;

  return [store, dispatch];
}
