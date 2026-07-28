import "./VisitedPlaces.css";

import FlowingMenu from "../FlowingMenu/FlowingMenu"

import TN from "../../assets/images/TN.png";
import kerala from "../../assets/images/kerala.png";
import goa from "../../assets/images/goa.png";
import pondi from "../../assets/images/pondi.png";
import kashmir from "../../assets/images/kashmir.png";

function VisitedPlaces() {
    const places = [
        {
            link:"/tamilnadu",
            text:"Tamil Nadu",
            image:TN
        },
        {
            link:"/kerala",
            text:"Kerala",
            image:kerala
        },
        {
            link:"/goa",
            text:"Goa",
            image:goa
        },
        {
            link:"/pondi",
            text:"Puducherry",
            image:pondi
        },
        {
            link:"/kashmir",
            text:"Kashmir",
            image:kashmir
        }
    ];

    return (
        <section className="visited" id="places">
            <div className="visited-title">
                <h2>MOST VISITED PLACES</h2>
                <p>Discover India's most loved destinations.</p>
            </div>

            <div className="flow-menu">
                <FlowingMenu
                    items={places}
                    speed={18}
                    textColor="#2F2F2F"
                    bgColor="#F8F4EC"
                    marqueeBgColor="#1B5667"
                    marqueeTextColor="#FFFFFF"
                    borderColor="#1B5667"
                />
            </div>
        </section>
    );
}

export default VisitedPlaces;