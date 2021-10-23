import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import { faShareAlt, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <style>{`
				.project-details-container{
					width: 40%;
					margin: 10px auto;
        }
        .go-back-btn-icon {
					font-size: 30px;
					height: 30px;
					width: 30px;
          color: #fff;
        }
        .goback-text {
          font-size: 20px;
          color: #fff;
        }
        .go-back {
          padding: 5px 10px;
          border-radius: 20px;
        }
        @media screen and (max-width: 992px) {
					.project-details-container{
						width: 96%;
						margin: 10px auto;
          }
          .go-back-btn-icon {
            font-size: 10px;
            height: 10px;
            width: 10px;
          }
          .goback-text {
            font-size: 10px;
            color: #fff;
          }
				}
			`}</style>
      <div
        style={{ minHeight: "100vh", overflowX: "hidden" }}
        className="bg-custom-primary"
      >
        <div class="banner">
          <img width="100%" height="400px" src="/images/ecomm-backend.PNG" />
          <div class="banner-layout">
            <div class="text-center primary-text-color">
              <h1>Project</h1>
              <p>See our project details</p>
              <Link href="/">
                <div className="go-back bg-custom-secondary d-inline-block mb-3">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="go-back-btn-icon"
                  />
                  <span className="goback-text">Go Back</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="project-details-container">
          <img width="100%" height="300px" src="/images/ecomm-backend.PNG" />
          <h3 className="my-3 primary-text-color">
            this is our project details this is our project details
          </h3>
          <div className="text-white my-3" style={{ fontSize: "18px" }}>
            <p>
              this is description section this is description section this is
              description section this is description section this is
              description section
            </p>
            <ul>
              <li>Fully Responsive</li>
              <li>Neat and Clean Code</li>
              <li>No performance issue</li>
              <li>SEO Friendly</li>
              <li>A lot of features</li>
            </ul>
          </div>
          <div className="my-3 text-white d-flex">
            <div
              className="d-flex justify-content-center align-items-center p-1 border"
              style={{ borderRadius: "50%", height: "30px", width: "30px" }}
            >
              <FontAwesomeIcon icon={faShareAlt} style={{ height: "25px" }} />
            </div>
            <FontAwesomeIcon
              icon={faFacebookSquare}
              style={{
                fontSize: "30px",
                height: "30px",
                width: "30px",
                cursor: "pointer"
              }}
              className="mx-2"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              style={{
                fontSize: "30px",
                height: "30px",
                width: "30px",
                cursor: "pointer"
              }}
              className="mx-2"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{
                fontSize: "30px",
                height: "30px",
                width: "30px",
                cursor: "pointer"
              }}
              className="mx-2"
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{
                fontSize: "30px",
                height: "30px",
                width: "30px",
                cursor: "pointer"
              }}
              className="mx-2"
            />
          </div>
          <button className="my-3 text-dark px-3 py-1 bg-lightPrimary rounded shadow-lg border-0">
            Contact to Buy
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
