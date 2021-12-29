/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from "@emotion/react";
import "./App.css";
import { Header, Headline, Footer, Card } from "./components";
import keyboardImage from "./assets/mobile/image-keyboard.jpg";
import phoneKeyboardImage from "./assets/mobile/image-phone-and-keyboard.jpg";
import glassKeyboardImage from "./assets/mobile/image-glass-and-keyboard.jpg";
import compatibleIcon from "./assets/shared/icon-compatible.svg";
import bluetoothIcon from "./assets/shared/icon-bluetooth.svg";
import batteryIcon from "./assets/shared/icon-battery.svg";
import lightIcon from "./assets/shared/icon-light.svg";

function App() {
  return (
    <div css={{ overflowX: "hidden" }}>
      <Header />
      <Headline />
      <img
        css={{
          width: "372px",
          transform: "translateX(24px)",
          borderRadius: "24px",
          marginBottom: "24px",
        }}
        src={keyboardImage}
        alt="Keyboard"
      />
      <div
        css={{
          transform: "translateX(-22px)",
          paddingBottom: "75px",
          display: "flex",
        }}
      >
        <img
          css={{ width: "129px", marginRight: "24px", borderRadius: "24px" }}
          src={phoneKeyboardImage}
          alt="Phone & Keyboard"
        />
        <img
          css={{ width: "220px", borderRadius: "24px" }}
          src={glassKeyboardImage}
          alt="Glass & Keyboard"
        />
      </div>
      <div css={{ paddingBottom: "111px" }}>
        <h2
          css={{
            fontFamily: "Barlow, sans-serif",
            fontStyle: "normal",
            fontWeight: 900,
            fontSize: "32px",
            lineHeight: "36px",
            textAlign: "center",
            textTransform: "uppercase",
            color: "#162542",
            width: "255px",
            padding: "0 60px 24px 60px",
          }}
        >
          mechanical wireless Keyboard
        </h2>
        <p
          css={{
            fontFamily: "Barlow, sans-serif",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "26px",
            textAlign: "center",
            color: "#7B8BAD",
            width: "327px",
            padding: "0 24px 0 24px",
          }}
        >
          The Typemaster keyboard boasts top-notch build and practical design.
          It offers a wide variety of switches and keycaps, along with reliable
          wireless connectivity.
        </p>
      </div>
      <Card
        iconSrc={compatibleIcon}
        iconAlt="Compatible"
        title="HIGHLY COMPATIBLE"
        content="Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed."
      />
      <Card
        iconSrc={bluetoothIcon}
        iconAlt="Bluetooth"
        title="WIRELESS WITH BLUETOOTH"
        content="Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer."
      />
      <Card
        iconSrc={batteryIcon}
        iconAlt="Battery"
        title="HIGH CAPACITY BATTERY"
        content="Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges."
      />
      <Card
        iconSrc={lightIcon}
        iconAlt="Light"
        title="RGB BACKLIT MODES"
        content="Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions."
      />
      <Footer />
    </div>
  );
}

export default App;
