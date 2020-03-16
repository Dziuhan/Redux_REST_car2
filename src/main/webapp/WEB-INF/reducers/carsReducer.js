const initialState={
    cars:[{
        producer:'audi',
        rank:'A',
        year:'1666'
    },{
        producer:'audi',
        rank:'A',
        year:'1945'
    }

    ]
}

export const carsReducer=(state=initialState, action)=>{
    switch (action.type) {
        case "": return [...state];
        case "add": return [...state];

        default: return  state
    }
}