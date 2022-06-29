import React from "react";

function DisplayProfile({ data }) {
  return (
    <div className="">
      <div className="container">
        <div className="card p- flex justify-center items-center">
          <div className=" p-4 shadow-lg rounded-lg  bg-yellow-700">
            <div className="image object-center ">
              <img src={data.avatar_url} className="rounded  " width="155" />
            </div>
            <div className="ml-3 w-100">
              <h4 className="mb-0 mt-0  underline  text-center text-4xl ">
                {data.login}
              </h4>
              <span>{data.bio}</span>
              <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                <div className="d-flex flex-column   bg-green-300  border-green-600 border-b p-4 m-4 rounded  text-red-600	 text-center">
                  <span className="articles">Repo:</span>
                  <span className="number1">{data.public_repos}</span>
                </div>
                <div className="d-flex flex-column text-center text-blue-700 bg-green-300 border-green-600 border-b p-4 m-4 rounded">
                  <span className="followers">Followers:</span>
                  <span className="number2">{data.followers}</span>
                </div>
                <div className="d-flex flex-column text-center text-blue-800 bg-green-300 border-green-600 border-b p-4 m-4 rounded">
                  <span className="rating">following:</span>
                  <span className="number3">{data.following}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayProfile;
