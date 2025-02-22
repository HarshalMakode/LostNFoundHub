import { useState ,useEffect} from "react";
import { api } from "../config";
import noImage from "../assets/no-image.png"


export default function Itemcard(props) {
  const [image, setImage] = useState(noImage);

  useEffect(() => {
    console.log("Image prop received:", props.image);
    if (props.image) {
      setImage(`${api}/files/${encodeURIComponent(props.image)}`);
    }
  }, [props.image]);

  return (
    <a href={`/find/details/${props.id}`} data-aos="fade-up">
      <div className="card">
        <div className="card-img">
          <img src={image} alt="Uploaded File" onError={() => setImage(noImage)} />
        </div>
        <div className="card-desc">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
    </a>
  );
  
}
