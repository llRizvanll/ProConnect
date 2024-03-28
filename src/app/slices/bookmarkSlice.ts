import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface BookmarkState {
    bookmarks: string[];
    userId: string;
    deviceId: string;
    bookmarkType: string;
}


const initialState: BookmarkState = {
    bookmarks: [],
    userId: '',
    deviceId: '',
    bookmarkType: '',
};

const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState,
    reducers: {
        setBookmark: (state, action: PayloadAction<BookmarkState>) => {
            state.bookmarks = action.payload.bookmarks;
            state.userId = action.payload.userId;
            state.deviceId = action.payload.deviceId;
            state.bookmarkType = action.payload.bookmarkType;
        },
    },
});

export const { setBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;