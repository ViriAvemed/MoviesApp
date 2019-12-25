
// Function to add a item
const addMovie = (data) => {
    return {
        type: "ADD_MOVIE",
        data: data
    }
};

// Function to delete a item
const deleteMovie = (name) => {
    return {
        type: "DELETE_MOVIE",
        data: name
    }
};

export default {
    addMovie,
    deleteMovie
};


