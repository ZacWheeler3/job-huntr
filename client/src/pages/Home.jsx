import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";

import ThoughtList from "../components/ThoughtList";
import ThoughtForm from "../components/ThoughtForm";

import ThoughtList from '../components/ThoughtList';
import JobForm from '../components/JobForm';

import { QUERY_THOUGHTS } from '../utils/queries';


const Home = () => {
  return (
    <main>
      <p className="links">
        <a href="">User Settings</a>
        <a href="">My Terms</a>
        <a href=""><LINK:atom></LINK:atom></a>

        <a href="">My Applications</a>
        <a href="">Follow-Ups</a>
        <a href="">Common Questions</a>
      </p>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        ><div><JobForm/></div>
        </div>
        <div className="col-12 col-md-8 mb-3">
        </div>
        
      </div>
    </main>
  );
};

export default Home;
