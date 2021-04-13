import React from 'react';
import featured from '../../../images/featured.png';
const FeaturedService = () => {
    return (
        <section className="my-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img className="img-fluid" src={featured} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care, on your Term</h1>
                        <p className="text-secondary my-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eaque quaerat itaque impedit similique iste dolores minus natus necessitatibus ullam eveniet eos, iusto ducimus eum quae. Soluta, ducimus ratione? Numquam ad quasi tenetur fuga error voluptate ex possimus, recusandae dolore consequatur deserunt officiis sunt laborum id, provident sapiente qui a ducimus quas voluptatem asperiores corporis. Et odio omnis dignissimos consequuntur a, voluptate ab doloribus perferendis sit ex tempora. Exercitationem tenetur esse qui autem, ratione ducimus, quaerat officiis, nisi explicabo quasi cupiditate atque. Asperiores ipsam quod vero, nostrum vel dolorem temporibus ea repellendus ipsa nihil fuga adipisci, doloribus blanditiis numquam? Molestiae.
                        </p>
                        <button className="btn btn-primary ">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;