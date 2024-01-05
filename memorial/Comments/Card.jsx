const Card = ({ memory }) => {
	return (
    <div class="max-w-7xl mx-auto border px-6 py-4 rounded-lg text-black mb-4 shadow-md bg-white">
      <div class="flex items-center mb-6">
        <div>
            <div class="text-lg font-medium text-gray-800">{memory.name}</div>
            <div class="text-gray-500">{memory.date}</div>
        </div>
    	</div>
    	<p class="text-lg leading-relaxed mb-6">{memory.comment}</p>
		</div>
  )

}

export default Card;