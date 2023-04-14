import React, { Suspense } from "react";
import "./jobinfo.styles.scss";
import { Await, useAsyncValue, useLoaderData } from "react-router";
import { SyncLoader } from "react-spinners";
import { Link } from "react-router-dom";
import accesstime from "../../assets/images/access-time.svg";
import company from "../../assets/images/kasisto.png";
import globus from "../../assets/images/earth-globe-tool-svgrepo-com.svg";
export const JobInfo = () => {
  const { job } = useLoaderData();

  return (
    <Suspense fallback={<SyncLoader />}>
      <Await resolve={job}>
        <AsyncJob />
      </Await>
    </Suspense>
  );
};

const AsyncJob = () => {
  const job = useAsyncValue();
  return (
    <div className='jobinfo'>
      <div className='jobinfo__left'>
        <Link to={"/"} className='jobinfo__left--link'>
          <span>&larr;</span>
          <span>Back to search</span>
        </Link>
        <div className='jobinfo__left--text'>HOw to Apply</div>
        <div className='jobinfo__left--email'>
          Please email a copy of your resume and online portfolio to
          <span>{" " + job.email}</span>
        </div>
      </div>
      <div className='jobinfo__right'>
        <div className='jobinfo__right--title'>
          <h3>{job.name}</h3>
          <button>Full time</button>
        </div>
        <div className='jobinfo__right--accesstime'>
          <img width={"15px"} src={accesstime} alt='earth' />
          <span>5 days ago</span>
        </div>
        <div className='jobinfo__right--company'>
          <img src={company} alt='company' width={"42px"} />
          <div>
            <h4>Kasisto</h4>
            <div>
              <img width={"15px"} src={globus} alt='earth' />
              <span>New York</span>
            </div>
          </div>
        </div>
        <div className='jobinfo__right--text'>
          <p>Humanizing Digital Experiences® </p>
          <p>
            {" "}
            Kasisto’s Digital Experience Platform, KAI, is designed for
            financial institutions to deliver the industry’s most amazing
            Conversational AI powered intelligent virtual assistants to their
            customers. KAI is open and extensible, and also fluent in the
            language of banking and finance. From simple retail transactions to
            the complex demands of corporate banks and wealth management,
            financial institutions can deliver meaningful digital interactions
            with KAI that help build their digital brand.
          </p>{" "}
          <p>
            {" "}
            Financial institutions around the world use KAI, including DBS Bank,
            J.P. Morgan, Mastercard, Standard Chartered, TD Bank, and Manulife
            Bank among others. They chose KAI for its proven track record to
            drive business results while improving customer experiences. The
            platform is used by millions of consumers around the world, all the
            time, across multiple channels, in different languages, and is
            optimized for performance, scalability, security, and compliance.
          </p>{" "}
          <p>This position </p>
          <p>
            {" "}
            We are looking for a Full-Stack, client side software engineer to
            help build and integrate responsive chat interfaces, analytics
            dashboards and reporting tools. What you’ll be doing Working closely
            with clients and internal engineering, product and design teams to
            gather requirements Building and integrating front-end applications
            with CSS, HTML, Javascript, jQuery, Vue.js, Webpack, Handlebars.js,
            LESS, Backbone, Python, Django and Java Working to improve user
            experience and functionality for tools Writing testable code
            utilizing common front-end unit and BDD testing frameworks What you
            need for this position
          </p>{" "}
          <p>
            3+ years in client-side web development with CSS, HTML, Javascript
            and jQuery Proven, full-stack front-end experience using Python and
            Django Other Modern Web Framework(s) experience is a plus (React,
            Vue, Angular, Ember) Experience working collaboratively to build
            scalable, modular, production software in an Agile environment
            Experience using RESTful json services Node.js and API development
            familiarity is plus D3.js is a plus
          </p>{" "}
          <p> What we offer:</p>{" "}
          <p>
            Competitive compensation package Ground floor opportunity within
            rapidly growing tech startup Great collaborative team environment
            Full Benefits Fun perks Location - NYC, Flatiron District We welcome
            your cover letter with a description of your previous complete
            experience and your resume. Applicants must be authorized to work in
            the US as we are unable to sponsor. Kasisto is an equal opportunity
            employer.
          </p>
        </div>
      </div>
    </div>
  );
};

export const jobLoader = async ({ params }) => {
  const id = params.id;
  return {
    job: await getJobInfo(id),
    id,
  };
};

async function getJobInfo(id) {
  return await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`
  ).then((response) => response.json());
}
