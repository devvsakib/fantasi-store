import { FaCalendar, FaCalendarAlt } from 'react-icons/fa'
import first from '/assets/1.png'
import second from '/assets/2.png'
import third from '/assets/3.png'
const EditorInsight = () => {
    const imgs = [first, second, third]
    return (
        <div className="mt-10">
            <h3 className="font-semibold mb-5 text-lg">Editor Insight</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
                {
                    imgs.map((img, index) => (
                        <div key={index} className="items-center gap-4">
                            <img src={img} alt="" />
                            <div>
                                <h4 className="font-bold text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4>
                                <p className='flex items-center gap-2 text-black/50'><FaCalendarAlt /> Jan 4, 2022</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default EditorInsight