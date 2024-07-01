import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface CartItem {
    id: string;
    title: string;
    detail: string;
    price: number;
    image: string;
    quantity: number;
}
interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            state.items.find(item => item.id === action.payload.id)
            state.items.push({ ...action.payload, quantity: 1 });

        }
    }
})

export const { addToCart } = cartSlice.actions


export default cartSlice.reducer