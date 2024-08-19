import React from "react";
import TechnologyBox from "../components/TechnologyBox";
import Followus from "../components/Followus";
import Popularposts from "../components/Popularposts";
import Travel from "../components/Travel";
import MailchimpForm from "../components/MailchimpForm";
import Comments from "../components/Comments";
import Categories from "../components/Categories";
import Maintags from "../components/Maintags";
import TechnologyNew from "../components/TechnologyNew";
import Robot from "../components/Robot";
import Future from "../components/Future";

function Technology() {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-9 gap-x-5">
        <div className="grid col-span-9">
          <TechnologyBox />
        </div>
        <div className="grid col-span-9 lg:col-span-6">
          <TechnologyNew />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Robot />
            <Future />
          </div>
        </div>
        <div className="grid col-span-9 lg:hidden ">
          <Followus />
          <Popularposts />
          <Travel />
          <MailchimpForm />
          <Comments />
          <Categories />
          <Maintags />
        </div>
        <div className="hidden lg:block col-start-7 col-span-3">
          <Followus />
          <Popularposts />
          <Travel />
          <MailchimpForm />
          <Comments />
          <Categories />
          <Maintags />
        </div>
      </div>
    </>
  );
}

export default Technology;
