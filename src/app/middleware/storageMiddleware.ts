// storageMiddleware.ts
import { Middleware } from 'redux';
import { persistedStorage } from '../mmkv';
 // replace with the actual path to your storage.ts file

const storageMiddleware: Middleware = ({ getState }) => next => (action: any) => {
    const result = next(action);
    console.log('storageMiddleware', action.type);
    if (action.type.startsWith('bookmark/')) {
        const newState = getState();
        persistedStorage.setItem('bookmarks', JSON.stringify(newState.bookmarks));
        console.log('bookmarks saved to storage');
    }

    return result;
};

export default storageMiddleware;