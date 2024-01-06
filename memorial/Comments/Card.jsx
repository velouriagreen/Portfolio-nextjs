const Card = ({ memory }) => {
	return (
    <div className="max-w-7xl mx-auto border px-6 py-4 rounded-lg text-black mb-4 shadow-md bg-white">
      <div className="flex items-center mb-6">
        <div>
            <div className="text-lg font-medium text-gray-800">{memory.name}</div>
            <div className="text-gray-500">{memory.date}</div>
        </div>
    	</div>
    	<p className="text-lg leading-relaxed mb-6">{memory.comment}</p>
		</div>
	)
};

export default Card;