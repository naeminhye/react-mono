// import { REQUESTING, FAILED, SUCCEEDED } from "config/constants";
import { initStore } from './index'

export const configureDataStore = () => {
    
    const actions = {
        COUNT: (state, amount) => ({ counter: state.counter + amount })
    }

    initStore(actions, {
        counter: 0
    });

}