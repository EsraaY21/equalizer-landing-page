import illustration from "/illustration-app.png";
import iconApple from "/icon-apple.svg";
import iconAndroid from "/icon-android.svg";

export default function Main() {
  return (
    <main>
      <div className="bg-slate main_slate">
        <img
          src={illustration}
          alt="illustration"
          className="illustration-app"
        />

        <div className="card bg-orange">
          <div className="container">
            <h2 className="text-3">Premium EQ</h2>
            <p className="text-4">
              Get expert-level control with a robust equalizer, volume mixer,
              and spatial audio. Take your listening experience to a whole new
              level and access all our incredible features!
            </p>
            <div className="price">
              <span className="text-2">$4</span>
              <span className="text-4"> / month</span>
            </div>
            <a className="btn bg-slate mb-4 ">
              <img src={iconApple} alt="iOS" />
              <span className="text-white text-6">iOS Download</span>
            </a>

            <a className="btn bg-white">
              <img src={iconAndroid} alt="Android" />
              <span className="text-slate text-6">Android Download</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
