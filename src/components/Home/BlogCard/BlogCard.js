import React from 'react';

const BlogCard = ({blog}) => {
    const {title,description,author,authorImg,date}=blog;
    return (
        <div className="card shadow-sm border-0 bg-transparent">
            <div className="card-header bg-transparent border-0 d-flex align-items-center">
             <img className="mx-3" src={authorImg} alt="" width="60"/>
             <div>
                 <h6 className="text-primary">{author}</h6>
                 <p>{date}</p>
             </div>
        </div>
        <div className="card-body">
                <h5>{title}</h5>
             <p className="text-justify card-text">{description}</p>
        </div>
        
     </div>
    );
};

export default BlogCard;