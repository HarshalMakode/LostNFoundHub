import { useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { useParams } from "react-router-dom";
import { api } from "../config";
import HashLoader from "react-spinners/HashLoader";
import noimg from "../assets/no-image.png";

function Details() {
  const [item, setItem] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const { id } = useParams();

  const override = {
    display: "block",
    borderColor: "#fdf004",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };

  useEffect(() => {
    fetch(`${api}/item/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching item:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <main id="detailspage">
      <Navbar />
      <section>
        {loading ? (
          <HashLoader
            color="#fdf004"
            loading={loading}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          item && (
            <div className="details-card">
              <div className="img-container">
                <img
                  src={item.image ? `${api}/files/${item.image}` : noimg}
                  alt="Item"
                  onError={(e) => (e.target.src = noimg)}
                />
              </div>

              <div className="action-container">
                <a href={`tel:${item.phoneno}`}>
                  <CallIcon /> Call
                </a>
                <a href={`mailto:${item.email}`}>
                  <EmailIcon /> Email
                </a>
              </div>

              <h1>{item.title}</h1>
              <div className="details-container">
                <p>Founder</p>
                <p>{item.name}</p>
              </div>

              <div className="details-container desc">
                <p>{item.description}</p>
              </div>
              <p>
                T/C* If the item owner is not found within 2 months, the finder
                can gain ownership.
              </p>
            </div>
          )
        )}
      </section>
    </main>
  );
}

export default Details;
