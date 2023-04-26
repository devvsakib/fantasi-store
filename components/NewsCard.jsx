import moment from 'moment/moment'
import { FaBookmark, FaEye, FaRegStar, FaShare, FaStar } from 'react-icons/fa'
import Rating from 'react-rating'
import { Link } from 'react-router-dom'
const NewsCard = ({ news }) => {

    return (
        <div className='grid gap-14 border p-4'>
            <div className=''>
                <div className='flex px-2 bg-blue-400/20 rounded-t pt-3 mb-2 items-center justify-between pb-3'>
                    <div className='flex items-center gap-2'>
                        <img className='w-9 rounded-full' src={news.author?.img} alt="" />
                        <div>
                            <p className='font-semibold'>{news.author?.name}</p>
                            <p className='text-sm'>{moment(news.author?.published_date).format("yyyy-mm-d")}</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <button className='bg-blue-400/40 p-2 rounded-md font-semibold'><FaBookmark /></button>
                        <button className='bg-blue-400/40 p-2 rounded-md font-semibold'>
                            <a href={`https://twitter.com/intent/tweet?text=${news.title}`}><FaShare /></a>
                        </button>
                    </div>
                </div>
                <h2 className='font-semibold text-lg'>{news.title}</h2>
                <div className=''>
                    <img className='w-full object-cover my-5' src={news.image_url} alt="" />
                </div>

                <div>
                    <p>{news.details.slice(0, 120) + "..."}</p>
                    <Link to={`/news/${news._id}`} >
                        <button className='font-bold mt-4'>Read More</button>
                    </Link>
                </div>
                <div className='flex justify-between items-center mt-5'>
                    <div className='flex items-center gap-2'>
                        <Rating
                            initialRating={news.rating?.number}
                            emptySymbol={<FaRegStar />}
                            fullSymbol={<FaStar />}
                            className='text-yellow-500'
                            readonly
                        />
                        <p className='font-semibold'>{news.rating?.number}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaEye />
                        <p className='font-semibold'>{news.total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard