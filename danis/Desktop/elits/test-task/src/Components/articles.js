import ReplacementImage from '../noimg.jpg'

const Articles = ({ articles, loading }) => {

    if (loading) {
        return <h2>loading...</h2>
    }



    return (
        <div className='news__block'>
            {
                articles.map((item, i) => (
                    <div className='news__block-item'>
                        <div className='news__block-item-img'>

                            {<img className="images"
                                src={`${item.urlToImage ? item.urlToImage : ReplacementImage}`} />}

                          



                        </div>
                        <div className='news__block-item-title'>
                            <strong>{item.title}</strong>
                        </div>
                        <div className='news__block-item-description'>
                            {item.description}
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Articles;