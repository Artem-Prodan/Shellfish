
import partnerLogos from "./TickersData";
import * as MarqueeModule from "react-fast-marquee";
import "./Partner.css";

const Marquee = MarqueeModule.default.default;

export default function PartnerTicker() {
  return (
    <Marquee className="partner-ticker"
    speed={30}
    autoFill
    gradient={false}
    direction="left">
        {partnerLogos.map((logo, index) => (
          <div key={index} className="partner-ticker__logo">
            {logo}
            {/* <img src={logo} alt="" /> */}
            <span className="partner-ticker__divider">•</span>
          </div>
        ))}
    </Marquee>
    );
  }