import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 1Uy9-Bu3LHAVtT9eLmuc-oYLuhVvm-LrZ-XdlsofoY-pl-_aw9xytyJt7D9umuhmx11v4PDj7Xd76a2XAtIfw8l31d0-kWoJlYz6-q6dlornA8rnZDgGq5B6TaLAY3Yx",
  },
});
