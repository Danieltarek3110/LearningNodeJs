// Blog_Index Blog_Details Blog_Create_Get Blog_Create_Post Blog_Delete
const Blog = require('../Models/Blog');

const blog_index = (req ,res)=>{
    Blog.find().sort({createdAt: -1 })
    .then( (result) =>{
        res.render('index' , {})
    })
    .catch ( (err)=>{
        console.log(err)
    })
}

const get_all_blogs = (req , res) => {
    Blog.find()
        .then( (result) =>{
            res.send(result);
        } )
        .catch( (err)=>{
            console.log(err)
        } )
}

const get_blog_byID = (req , res) =>{
    const id = req.params.id;
    Blog.findById(id)
        .then( (result)=>{
            res.render( 'blog-details' , {result} );
        } )
        .catch(err =>{
            console.log(err);
        })
}

const get_create_page = (req , res) =>{
    res.render('create');
}

const post_create_blog = (req , res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then( (result)=>{
            res.redirect('/');

        })
        .catch( (err)=>{
            console.log(err);

        }  )
}





module.exports = {
    blog_index,
    get_all_blogs,
    get_blog_byID,
    get_create_page,
    post_create_blog
}