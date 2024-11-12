import React from "react";

function Footer() {
  return (
    <footer
      className="mt-5 "
      style={{ backgroundColor: " #fbfbfb", borderTop: "1px solid #eee" }}
    >
      <div className="container mt-5" style={{ marginRight: "20px" }}>
        <div className="row  ">
          <div className="col-3 ">
            <img
              src="media\assets\logo.svg"
              style={{ width: "50%" }}
              className="mb-3"
            />
            <p className="fs-5"> <i class="fa-solid fa-phone"></i> 080 &nbsp;47181888</p>
            <p style={{ fontSize: "12px" }}>
              
              © 2010 - 2024, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            <i class="fa-brands fa-facebook social-icons"></i>

            <i class="fa-brands fa-instagram social-icons"></i>
            <i class="fa-brands fa-linkedin social-icons"></i>
            <i class="fa-brands fa-youtube social-icons"></i>
            <hr style={{ color: "#666" }} />
            <i class="fa-brands fa-whatsapp social-icons"></i>
            <i class="fa-brands fa-telegram social-icons"></i>
          </div>
          <div className="col footerA ">
            <p>Company</p>
            <a href="">About</a>
            <br />
            <a href="">Products</a>
            <br />
            <a href="">Pricing</a>
            <br />
            <a href="">Referral programme</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">Zerodha.tech</a>
            <br />
            <a href="">Press & media</a>
            <br />
            <a href="">Zerodha Cares (CSR)</a>
          </div>
          <div className="col footerA ">
            <p>Support</p>
            <a href=""> Contact us</a>
            <br />
            <a href=""> Support portal</a>
            <br />
            <a href=""> Z-Connect blog</a>
            <br />
            <a href=""> List of charges</a>
            <br />
            <a href=""> Downloads & resources</a>
            <br />
            <a href=""> Videos</a>
            <br />
            <a href=""> Market overview</a>
            <br />
            <a href=""> How to file a complaint?</a> <br />
            <a href=""> Status of your complaints</a>
            <br />
          </div>
          <div className="col footerA ">
            <p>Account</p>
            <a href="">Open account</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
          </div>
          <div className="col"></div>
        </div>
        <div
          className="mt-5 text-muted  footerparagraph"
          style={{ fontSize: "11px" }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. SEBI Registration no.: IN-DP-431-2019 Commodity Trading
            through
            <br /> Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 SEBI
            Registration no.:INZ000038238 Registered Address: Zerodha Broking
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th <br /> Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to <a href="">complaints@zerodha.com </a>, for DP related to{" "}
            <a href="">dp@zerodha.com</a>. Please ensure you carefully read the
            Risk <br /> Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy
            <br /> redressal of the grievances
          </p>

          <a href="">
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </a>
          <br />
          <br />
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1 Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2 Update your e-mail and phone number with
            your stock broker /<br /> depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3 Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL <br /> every
            month.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the
            <br /> day. Issued in the interest of investors. KYC is one time
            exercise while dealing in securities markets - once KYC is done
            through a SEBI registered intermediary (broker, DP, Mutual Fund
            etc.), you need not undergo the same
            <br /> process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to <br /> authorize your bank to make payment
            in case of allotment. In case of non allotment the funds will remain
            in your bank account. As a business we don't give stock tips, and
            have not authorized anyone to trade on behalf of <br /> others. If
            you find anyone claiming to be part of Zerodha and offering such
            services, please <a href="">create a ticket here.</a>
          </p>

          <div className="footerEnd mb-3 ">
            <ul>
              <li>
                <a href="">NSE</a>
              </li>
              <li>
                <a href="">BSE</a>
              </li>
              <li>
                <a href="">MCX</a>
              </li>
              <li>
                <a href="">Terms &amp; conditions</a>
              </li>
              <li>
                <a href="">Policies &amp; procedures</a>
              </li>
              <li>
                <a href="">Privacy policy</a>
              </li>
              <li>
                <a href="">Disclosure</a>
              </li>
              <li>
                <a href="">For investor's attention</a>
              </li>
              <li>
                <a href="">Investor charter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
