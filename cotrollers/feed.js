exports.getPosts = (req, res, next) => {
    res.json({
        posts: [{
            title: "First post",
            content: "This is the first post!"
        }]
    });
};


exports.createPost = (req, res, next) => {

    const title = req.body.title;
    const content = req.body.content;
    
    //create post in DB

    res.status(201).json({
        message: "Post created successfully!",
        post:{
            id: new Date().toISOString(), title: title, content: content
        }
    })
}