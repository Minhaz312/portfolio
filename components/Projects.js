import React from "react";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
export default function Projects() {
  return (
    <div>
      <h4
        className="py-3 mb-5 text-center primary-text-color"
        style={{ borderBottom: "1px solid rgb(255,255,255,0.2)" }}
      >
        My Projects
      </h4>
      <Row>
        <Col lg={4} md={6}>
          <div className="project-card my-3">
            <img
              alt="project image1"
              src="/images/ecomm-backend.PNG"
              style={{ width: "100%", height: "300px" }}
            />
            <div
              className="project-details"
              style={{ color: "#e4f0fc !important" }}
            >
              <p style={{ color: "#00d6d8 !important" }}>
                <b>Lorem Ipsum</b>
              </p>
              <p>
                Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                condimentum, porta lectus vitae, ultricies congue gravida diam
                non fringilla.
              </p>
              <Link
                href="/project"
                className="btn bg-custom-lightPrimary text-dark font-weight-bold my-3 btn-sm"
              >
                Details
              </Link>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className="project-card my-3">
            <img
              alt="project image2"
              src="/images/ecomm-backend.PNG"
              style={{ width: "100%", height: "300px" }}
            />
            <div
              className="project-details"
              style={{ color: "#e4f0fc !important" }}
            >
              <p style={{ color: "#00d6d8 !important" }}>
                <b>Lorem Ipsum</b>
              </p>
              <p>
                Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                condimentum, porta lectus vitae, ultricies congue gravida diam
                non fringilla.
              </p>
              <Link
                href="/project"
                className="btn bg-custom-lightPrimary text-dark font-weight-bold my-3 btn-sm"
              >
                Details
              </Link>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className="project-card my-3">
            <img
              alt="project image3"
              src="/images/ecomm-backend.PNG"
              style={{ width: "100%", height: "300px" }}
            />
            <div
              className="project-details"
              style={{ color: "#e4f0fc !important" }}
            >
              <p style={{ color: "#00d6d8 !important" }}>
                <b>Lorem Ipsum</b>
              </p>
              <p>
                Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                condimentum, porta lectus vitae, ultricies congue gravida diam
                non fringilla.
              </p>
              <Link
                href="/project"
                className="btn bg-custom-lightPrimary text-dark font-weight-bold my-3 btn-sm"
              >
                Details
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
