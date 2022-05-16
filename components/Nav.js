import Requests from "../utils/Requests";

function Nav() {
  return (
    <nav>
      <div
        className="
        flex
        px-10 
        sm:px-20
        text-2xl
        whitespace-nowrap
        space-x-10 sm:space-x-20
        overflow-x-scroll
        
        "
      >
        {Object.entries(Requests).map(([key, { title, url }]) => (
          // eslint-disable-next-line react/jsx-key
          <h2
            key={key}
            className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
