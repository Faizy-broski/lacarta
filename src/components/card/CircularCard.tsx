const CircleCard = ({ image, category, title, author, time }) => (
  <div className="relative rounded-full overflow-hidden mb-5 shadow-lg group aspect-square">
    <img
      src={image}
      className="absolute inset-0 w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
      alt=""
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

    <div className="absolute bottom-6 left-6 right-6 text-white">
      <span className="bg-white text-black text-[10px] font-bold px-2 py-1 mb-2 inline-block">
        {category}
      </span>

      <div className="bg-[#e5c15a] text-black font-bold text-lg leading-tight p-3">
        {title}
      </div>

      <div className="bg-red-600 text-xs flex justify-between px-3 py-2">
        <span>{author}</span>
        <span>{time}</span>
      </div>
    </div>
  </div>
);
export default CircleCard;