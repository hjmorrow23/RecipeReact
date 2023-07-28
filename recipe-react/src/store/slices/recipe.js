import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'recipe',
    initialState: {
        recipes: [],
        currentRecipe: null,
    },
    reducers: {
        getRecipesSuccess: (state, action) => {
            state.recipes = action.payload;
        },
        getRecipeSuccess: (state, action) => {
            state.currentRecipe = action.payload;
        }, 
        updateRecipeSuccess: (state, action) => {
            state.currentRecipe = action.payload;
        },
        deleteRecipeSuccess: (state, action) => {
            state.currentRecipe = null;
        }
    }
});

export const recipe = slice.reducer;
export const recipeActions = slice.actions;