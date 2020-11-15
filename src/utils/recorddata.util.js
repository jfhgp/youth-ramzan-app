import localStore from './localstore.util';

export const setRecordData = async (info) => {
  const _data = [...info];
  await localStore.store_data('recordData', _data);
  return true;
};
export const getRecordData = () => localStore.get_data('recordData');

export const remove = () => localStore.remove_data('recordData');
