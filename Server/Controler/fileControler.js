const Articles = require('../Model/article')



//REQUEST Get all Post
module.exports.allPost = (req, res)=>{
    Articles.find().then(article => res.json(article))
    .catch(err => res.status(400).json(`Error found => ${err} `))
    console.log(req.body)
}


// REQUEST ADD NEW ARTICLE
module.exports.addPost = (req,res)=>{
    const newArticle = new Articles({
        title:req.body.title,
        description:req.body.description,
        img:req.body.img,
        author:req.body.author
    })
    newArticle.save()
    .then(()=>res.json("The new Article Added SUCCESS"))
    .catch(err=>res.status(400).json(`ERROR:=> ${err}`))
}

// REQUEST FIND ARTICLE BY ID
module.exports.findArticleId = (res,req)=>{
    Articles.findById(req.params.id)
    .then(article=>res.json(article))
    .catch(err=>res.status(400).json(`ERROR:=> ${err}`))
}

// FIND ARTICLE BY ID AND UPDATE
module.exports.findArticleIdAndUpdate=(req,res)=>{
    Articles.findById(req.params.id)
    .then(article=>{
        article.title = req.body.title
        article.description = req.body.description
        article.img = req.body.img
        article.author=req.body.author
        article.save()
        .then(()=>res.json('The Article is Updated Successfully'))
        .catch(err=>res.status(400).json(`ERROR:=> ${err}`))
    })
    .catch(err=>res.status(400).json(`ERROR:=> ${err}`))
}

// REQUEST FIND ARTICLE BY ID AND DELETE
module.exports.findArticleIdAndDelete=(req,res)=>{
    Articles.findByIdAndDelete(req.params.id)
    .then(()=>res.json("The article is Deleted"))
    .catch(err=>res.status(400).json(`ERROR:=> ${err}`))

}