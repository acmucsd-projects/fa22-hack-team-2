const LocationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: True
        }, 

        coords: {
            type: Array,
            required: True
        },

        hours: {
            type: Array,
            required: True
        },
    }
)

const Location = mongoose.model("Locations", LocationSchema); 
module.exports = MoveSchema;