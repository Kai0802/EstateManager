import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="max-w-6xl mx-auto p-4 sm:p-8">
      <section className="mb-12">
        <h1 className="text-3xl sm:text-5xl text-slate-800 font-bold mb-6">
          About MyEstate
        </h1>
        <p className="text-slate-600 text-lg mb-4">
          At MyEstate, we're more than just a real estate company. We're a
          dedicated team of professionals who are passionate about helping you
          navigate the often complex journey of finding and securing your
          perfect home.
        </p>
        <p className="text-slate-600 text-lg mb-4">
          Since our inception, we've believed that the process of buying or
          renting a home should be as seamless and personal as possible. We
          blend advanced technology with a human touch to provide you with
          service that's as reliable as it is friendly.
        </p>
        <p className="text-slate-600 text-lg mb-4">
          Our team brings together years of experience, deep knowledge of the
          real estate market, and a network of fully vetted properties to ensure
          you have access to the best options out there. Whether you're buying,
          selling, or renting, we're here to support you every step of the way.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl sm:text-4xl text-slate-800 font-bold mb-5">
          Our Values
        </h2>
        <ul className="list-disc pl-5 space-y-3">
          <li className="text-slate-600 text-lg">
            <strong>Integrity:</strong> We conduct our business with the highest
            standards of professionalism and ethical behavior.
          </li>
          <li className="text-slate-600 text-lg">
            <strong>Transparency:</strong> We believe in clear communication and
            open information because trust is the foundation of any
            relationship.
          </li>
          <li className="text-slate-600 text-lg">
            <strong>Commitment:</strong> We are committed to providing
            personalized service and ensuring that your housing needs are met in
            the best way possible.
          </li>
          <li className="text-slate-600 text-lg">
            <strong>Innovation:</strong> Continuously improving our services and
            adopting new technologies to enhance your experience is at the heart
            of what we do.
          </li>
        </ul>
      </section>
    </main>
  );
}
