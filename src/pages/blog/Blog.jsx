import './Blog.css'

const Blog = () => {
    return (
        <body className="blog-body">
            <div>
                <img className="img-fluid" src="/images/Blog/banner.jpg" alt="Bannière bleu" />
                <div className="text-center">
                    <h1>BLOG</h1>
                    <h2>Retrouvez ici quelques articles sur le développement web.</h2>
                    <hr className="my-4 border-primary border-2 w-25 mx-auto opacity-100" />
                </div>
            </div>
                <div className='container'>
                    <div className="row mx-auto p-2">
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card" style={{width: '20rem'}}>
                                <img src="/images/Blog/coder.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Coder son site en HTML et CSS</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Lire la suite</a>
                                </div>
                                <div class="card-footer">
                                    <small>Publié le 22 août 2022</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card" style={{width: '20rem'}}>
                                <img src="/images/Blog/croissance.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Vendre ses produits sur le web</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Lire la suite</a>
                                </div>
                                <div class="card-footer">
                                    <small>Publié le 20 août 2022</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card" style={{width: '20rem'}}>
                                <img src="/images/Blog/google.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Se positionner sur Google</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Lire la suite</a>
                                </div>
                                <div class="card-footer">
                                    <small>Publié le 1 août 2022</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card" style={{width: '20rem'}}>
                                <img src="/images/Blog/screens.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Coder en responsive design</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Lire la suite</a>
                                </div>
                                <div class="card-footer">
                                    <small>Publié le 31 juillet 2022</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card" style={{width: '20rem'}}>
                                <img src="/images/Blog/seo.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Techniques de référencement</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Lire la suite</a>
                                </div>
                                <div class="card-footer">
                                    <small>Publié le 30 juillet 2022</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card" style={{width: '20rem'}}>
                                <img src="/images/Blog/technos.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Apprendre à coder</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Lire la suite</a>
                                </div>
                                <div class="card-footer">
                                    <small>Publié le 12 juillet 2022</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </body>
    )

}

export default Blog;