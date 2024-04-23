const path = require('path');
const rootDir = require('../utils/path');
const blogpost = require('../model/user-model')

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
    // .then((result)=>{
    //     console.log('blog Added');
    //     res.redirect('/postblogdata');
    // })
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