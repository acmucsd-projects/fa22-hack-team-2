const LocationSchema = new mongoose.Schema(
    {
        bistro: {
            type: Boolean,
            required: true
        },

        pines: {
            type: Boolean,
            required: true
        },

        cafev: {
            type: Boolean,
            required: true
        },

        sixtyfour: {
            type: Boolean,
            required: true
        },

        oceanview: {
            type: Boolean,
            required: true
        },
    }
)