const DiningSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        calories: {
            type: Number,
            required: true
        },

        protein: {
            type: Number,
            required: true
        },

        fat: {
            type: Number,
            required: true
        },

        carb: {
            type: Number,
            required: true
        },

        vegetarian: {
            type: Boolean,
            required: true
        },

        vegan: {
            type: Boolean,
            required: true
        },

        location: {
            type: [LocationSchema],
            required: true
        },

        phase: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true
        }
    }
)