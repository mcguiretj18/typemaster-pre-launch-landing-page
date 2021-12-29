/** @jsx jsx */ /** @jsxRuntime classic */
import { Global, jsx } from "@emotion/react";
import "./App.css";
import { Header, Headline, Footer, Card } from "./components";
import keyboardImage from "./assets/mobile/image-keyboard.jpg";
import phoneKeyboardImage from "./assets/mobile/image-phone-and-keyboard.jpg";
import glassKeyboardImage from "./assets/mobile/image-glass-and-keyboard.jpg";
import compatibleIcon from "./assets/shared/icon-compatible.svg";
import bluetoothIcon from "./assets/shared/icon-bluetooth.svg";
import batteryIcon from "./assets/shared/icon-battery.svg";
import lightIcon from "./assets/shared/icon-light.svg";
import * as fonts from "./styles/fonts";
import * as colors from "./styles/colors";

function App() {
  return (
    <div css={{ padding: "0 24px", overflow: "hidden" }}>
      <Global />
      <Header />
      <Headline />
      <img
        css={{
          maxWidth: "372px",
          marginBottom: "24px",
          borderRadius: "24px",
        }}
        src={keyboardImage}
        alt="Keyboard"
      />
      <div
        css={{
          display: "flex",
          transform: "translateX(-46px)",
          gap: "24px",
          marginBottom: "75px",
        }}
      >
        <img
          css={{ maxWidth: "129px", height: "auto", borderRadius: "24px" }}
          src={phoneKeyboardImage}
          alt="Phone & Keyboard"
        />
        <img
          css={{ maxWidth: "220px", height: "auto", borderRadius: "24px" }}
          src={glassKeyboardImage}
          alt="Glass & Keyboard"
        />
      </div>
      <div>
        <h2
          css={{
            fontFamily: fonts.primary,
            fontStyle: "normal",
            fontWeight: 900,
            fontSize: "32px",
            lineHeight: "36px",
            textAlign: "center",
            textTransform: "uppercase",
            color: colors.secondaryHovered,
            maxWidth: "255px",
            margin: "0 auto 24px auto"
          }}
        >
          mechanical wireless Keyboard
        </h2>
        <p css={{
          fontFamily: fonts.primary,
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '1rem',
          lineHeight: '26px',
          textAlign: 'center',
          color: colors.secondary,
          marginBottom: '111px'
        }}>
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
