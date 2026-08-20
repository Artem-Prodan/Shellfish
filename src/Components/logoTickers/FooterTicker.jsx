
import * as MarqueeModule from "react-fast-marquee";
import "./FooterTicker.css";

const Marquee = MarqueeModule.default.default;

export default function FooterTicker() {
  return (
    <Marquee className="footer-ticker"
    speed={30}
    autoFill
    gradient={false}
    direction="left">
        <div className="footer-ticker__text">
            a little Shellfish never hurt anyone
          </div>
    </Marquee>
    );
  }