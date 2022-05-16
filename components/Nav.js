import Requests from "../utils/Requests";

function Nav() {
  return (
    <nav>
        <div>
          {Object.entries(Requests).map(([key, { title, url }]) => (
            // eslint-disable-next-line react/jsx-key
            <h2>{title}</h2>
          ))}
        </div>
    </nav>
  );
}

export default Nav;