import logo from "/logo.svg";

export default function Hero() {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />

        <h1 className="text-1">We make your music sound extraordinary</h1>
        <p className="text-4">
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
      </div>
    </header>
  );
}
