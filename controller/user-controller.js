const path = require('path');
const rootDir = require('../utils/path');
const blogpost = require('../model/user-model')
const blogcomment = require('../model/comment-model')

exports.getmainpage = (req,res,next)=>{
    res.sendFile(path.join(rootDir,"view","index.html"))
}

exports.postaddblog = (req,res,next)=>{
    console.log("blog added ")
    const title = req.body.inputtitle
    const author = req.body.inputauthor
    const content = req.body.inputcontent
    console.log(title)
    blogpost.create({
        title :title,
        author : author,
        content :content
    })
    .then((result)=>{
        console.log('blog Added');
        res.redirect('/');
    })
    .catch((err)=>{
        console.log(err);
    })
}
exports.fetchblogs = (req,res,next)=>{
    blogpost.findAll()
    .then((posts)=>{
        res.json(posts);
        console.log(posts)
    })
    .catch((err)=>console.log("fetch-router error : "+ err));
}
exports.fetchoneblogs = async (req,res,next)=>{
    const clickid = req.params.valueid;
    console.log("fetchoneblogs : ", clickid)
    try {
        // Find a single blog post by id
        const content = await blogpost.findOne({ where: { id: clickid } });
        
        // Check if a blog post was found
        res.json({ data: content });
    } catch (error) {
        console.error('Error:', error);
    }
}

// comment 
exports.postblogscomment = async (req, res, next) => {
    const blogid = req.params.blogid;
    const comment = req.body.comment;
    console.log(blogid)
    console.log(comment)
    blogcomment.create({
        blogId : blogid,  
        comment : comment
    })
    .then((result) => {
      console.log("Added to User");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
  });

  
};

exports.fetchblogscomments = async (req,res,next)=>{
    console.log("hello");
    const blogid = req.params.blogid;
    console.log("fetchblogs : "+ blogid);

    blogcomment.findAll({
        where: { blogId: blogid }
    })
    .then(comments => {
        res.json(comments);
    })
    .catch((err) => {
        console.log(err);
    });
}