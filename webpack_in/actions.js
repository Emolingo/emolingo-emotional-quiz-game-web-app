import action_types from './action_types.js';

export default {
    init: () => ({
        type: action_types.ACTION_INIT
    }),
    next_question: indexAnswer => ({
        type: action_types.ACTION_NEXT_QUESTION,
        indexAnswer
    })
};