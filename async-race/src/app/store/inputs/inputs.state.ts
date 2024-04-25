export interface CreateFormState {
    createCarForm: {
        name: string;
        color: string;
    };
}

export interface UpdateFormState {
    updateCarForm: {
        name: string;
        color: string;
    };
}

export const initialCreateFormState: CreateFormState = {
    createCarForm: {
        name: "",
        color: "#000000",
    },
};

export const initialUpdateFormState: UpdateFormState = {
    updateCarForm: {
        name: "",
        color: "#000000",
    },
};
