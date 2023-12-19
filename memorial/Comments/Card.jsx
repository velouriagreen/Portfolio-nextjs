const Card = ({ memory }) => {

    return (
        <div class="max-w-7xl mx-auto border px-6 py-4 rounded-lg bg-[#FCEDA5] text-white">
    <div class="flex items-center mb-6">
        <img src="https://randomuser.me/api/portraits/men/97.jpg" alt="Avatar" class="w-12 h-12 rounded-full mr-4"/>
        <div>
            <div class="text-lg font-medium text-gray-800">{memory.name}</div>
            <div class="text-gray-500">{memory.date}</div>
        </div>
    </div>
    <p class="text-lg leading-relaxed mb-6">{memory.comment}</p>
    {/* <div class="flex justify-between items-center">
        <div>
            <a href="#" class="text-gray-500 hover:text-gray-700 mr-4"><i class="far fa-thumbs-up"></i> Like</a>
            <a href="#" class="text-gray-500 hover:text-gray-700"><i class="far fa-comment-alt"></i> Reply</a>
        </div>
        <div class="flex items-center">
            <a href="#" class="text-gray-500 hover:text-gray-700 mr-4"><i class="far fa-flag"></i> Report</a>
            <a href="#" class="text-gray-500 hover:text-gray-700"><i class="far fa-share-square"></i> Share</a>
        </div>
    </div> */}
</div>
    )

}

export default Card;