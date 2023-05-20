import React from "react";

const Blogs = () => {
  return (
    <div>
      {/* The button to open modal */}
      <div className="flex flex-col gap-8 justify-center items-center min-h-[calc(100vh-288px)] px-3">
        <label htmlFor="q-1" className="blog-btn">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </label>
        <label htmlFor="q-2" className="blog-btn">
          Difference between SQL and NoSQL databases?
        </label>
        <label htmlFor="q-3" className="blog-btn">
          What is MongoDB aggregate and how does it work?
        </label>
        <label htmlFor="q-4" className="blog-btn">
          What is express JS? What is Nest JS?
        </label>
      </div>
      {/*  question one  */}
      <input type="checkbox" id="q-1" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h3>
          <p className="py-4">
            An access token and refresh token use for user authentication and
            authorization. Access Token: An access token is a credential that is
            used for access protected data or information or perform under of a
            user. It has limited time for expiration. Refresh Token: Refresh
            token is a credential that is used for achieve a new access token
            once the access token expired. It is basically use for maintain
            authentication without requiring user to re authentication. They
            work together for authorize a user. Once Authentication has been
            completed then the authentication server generates a access token
            and a refresh token. After generates token it will go to client side
            and we have to store this token to local storage or in browser http
            only cookie. Next time when a user request for their information
            this token will go to server side for authorization. After
            successfully authorization server will give the requested
            information. And when access token expires after a limited time then
            Refresh token generates a new access token. It will work like
            circle. Where should we store those token? In Local storage or
            browser http only cookie. Local storage less secure than http only
            cookie.
          </p>
          <div className="modal-action">
            <label htmlFor="q-1" className="my-btn">
              Close!
            </label>
          </div>
        </div>
      </div>
      {/*  question two  */}
      <input type="checkbox" id="q-2" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Difference between SQL and NoSQL databases?
          </h3>
          <p className="py-4">
            SQl(Structured Query Language) and NoSQL(Not only SQL) are the two
            types of database management system. They server different purposes.
            SQL database is a tabular form database where data store in
            columnes(attribute) and row(records) form. Where NoSQL database
            didn't stick to this format. It's more flexible than SQL database.
            SQL database more consistant than NoSQL database. SQL databases are
            commonly used in traditional enterprise applications where NoSQL
            databases excel in scenarios with large-scale data, flexible data
            structure. SQL serving more than 40 year. So it's community large
            compared to NoSQL community. But NoSQL is a faster growing database
            than SQL.
          </p>
          <div className="modal-action">
            <label htmlFor="q-2" className="my-btn">
              Close!
            </label>
          </div>
        </div>
      </div>

      {/*  question three  */}
      <input type="checkbox" id="q-3" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            What is MongoDB aggregate and how does it work?
          </h3>
          <p className="py-4">
            In MongoDB aggregate method is used to perform advanced data
            aggregation operation on collection. Aggregation is a method of
            efficiently handling and manipulating a large collection of
            documents by sequentially passing them through various stages to
            achieve desired processing and transformation. The stages creates
            pipeline. The aggregation pipeline consist one or more stages. The
            pipeline takes document as input and operation them like filter,
            sort, group and modify documents that pass through the pipeline.
          </p>
          <div className="modal-action">
            <label htmlFor="q-3" className="my-btn">
              Close!
            </label>
          </div>
        </div>
      </div>

      {/*  question four  */}
      <input type="checkbox" id="q-4" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            What is express JS? What is Nest JS?
          </h3>
          <p className="py-4">
            Express js is a minimal and flexible Node.js web application
            framework that provides a set of features for building web
            applications, including middleware for routing, handling request and
            responses. It's highly extensible and easier to build web
            applications. Nest js is a open source framework for building server
            side application using node.js. It is one of the fastest growing
            node.js framework. It use for build efficient, scalable and
            enterprise level backend applications. It provides a wide range of
            additional features.
          </p>
          <div className="modal-action">
            <label htmlFor="q-4" className="my-btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
