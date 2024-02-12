import React from "react";
import { Link } from "react-router-dom";

function WebApps() {
  return (
    <div className="flex">
      <div className="m-10">
        <h1 className="mb-4 text-copy text-4xl font-extrabold leading-none tracking-tight ">
          Slides
        </h1>
        <ul className="list-disc">
          <li>
            <Link className="underline" to="https://jmerhi.mov/6443/week1/">
              Week 1
            </Link>
          </li>
        </ul>
      </div>
      <div className="m-10">
        <h1 className="mb-4 text-copy text-4xl font-extrabold leading-none tracking-tight   ">
          Resources
        </h1>
        <ul className="list-disc">
          <li>
            <Link className="underline" to="/6443/resources/recon">
              Recon Tools
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WebApps;
