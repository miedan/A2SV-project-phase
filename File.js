const axios = require('axios');

const pro = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"  
})

const newPost = {
    userId: 1, 
    title: "new title",
    body: "lorem ipsum "
};

// post
const addpost = async () => {

    try
    {const response =  await pro.post('', newPost)
    console.log("posted succesfully", response.data)
}
 catch(error) {

    console.log("failed during post", error)
 }
}

// addpost()

// const getPost = async () => {
//     try {
//         const id = 12; // Replace with the actual ID of the post you want to retrieve
//         const response = await pro.get(`/${id}`);
//         console.log("Successful retrieval:", response.data);
//     } catch (error) {
//         console.error("Error occurred:");
//     }
// }

const deletePost = async () => {
    try {
        const id = 12; // Replace with the actual ID of the post you want to delete
        const response = await pro.delete(`/${id}`);
        console.log("Successful deletion:", response.data);
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

deletePost();

// getPost();







