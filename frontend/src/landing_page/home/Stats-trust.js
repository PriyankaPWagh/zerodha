import React from "react";

function StatsTrust() {
  return (
    <div className="container">
      <div className="row ">
        <div
          className="col-6 p-5 "
          style={{ position: "relative", left: "50px" }}
        >
          <h1 className="mb-5 " style={{ fontSize: "32px" }}>
            Trust with confidence
          </h1>
          <h2 className="fs-5 text-muted">Customer-first always</h2>
          <p className="text-muted mb-3">
            That's why 1.5+ crore customers trust Zerodha with
            <br /> ₹4.5+ lakh crores of equity investments and contribute to{" "}
            <br /> 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-5 text-muted">No spam or gimmicks</h2>
          <p className="text-muted mb-3">
            No gimmicks, spam, "gamification", or annoying push <br />{" "}
            notifications. High quality apps that you use at your <br /> pace,
            the way you like.
          </p>

          <h2 className="fs-5 text-muted">The Zerodha universe</h2>
          <p className="text-muted mb-3">
            Not just an app, but a whole ecosystem. Our investments <br /> in
            30+ fintech startups offer you tailored services <br /> specific to
            your needs.
          </p>

          <h2 className="fs-5 text-muted"> Do better with money</h2>
          <p className="text-muted mb-3">
            With initiatives like Nudge and Kill Switch, we don't just <br />{" "}
            facilitate transactions, but actively help you do better <br /> with
            your money.
          </p>
        </div>
        <div className="col-6">
          <img src="media\assets\ecosystem.png" style={{ width: "90%" }} />

          <div className="text-center">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our product <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="/#" style={{ textDecoration: "none" }}>
              Try kite demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <img
          src="media\assets\pressLogos.png"
          className="rounded mx-auto d-block "
          style={{ width: "48%" }}
        />
      </div>
    </div>
  );
}

export default StatsTrust;
