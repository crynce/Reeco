import React from "react";
import "./Header.css";
export default function () {
  return (
    <div className="headerContainer">
      <div className="headerTop">
        <div className="referralLeft">
          <h2 className="headerHeading">
            Earn{" "}
            <span className=" headerHeading specialtext">
              Upto 20K {" "}
              <div className="headingUnderline"></div>
            </span>
             per referral
          </h2>
          <div className="headerReferralText">
            Gift the leverage Edu Experience and change lives of future global
            citizens
          </div>
          <button className="headerReferralButton">Get Started</button>
        </div>
        <div className="referralRight">
          <img
            className="referralRightImage"
            src="https://images.leverageedu.com/homepage/FirstFold-3dIllustration-031.png"
          />
        </div>
      </div>
      <div className="headerMiddle">
        <h2 className="middleHeading">How does it work?</h2>
        <div className="middleStepContainer">
          <div className="middleStepsLines">
            <div className="middleStepsLine">
              <div className="stepsCheckpoint"></div>
            </div>
          </div>

          <div className="middleStepItems">
            <div className="middleStepHead">Step 1</div>
            <div className="middleStepText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              libero illo non ipsa eum.
            </div>
          </div>
          <div className="middleStepItems">
            <div className="middleStepHead">Step 1</div>
            <div className="middleStepText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              libero illo non ipsa eum.
            </div>
          </div>
          <div className="middleStepItems">
            <div className="middleStepHead">Step 1</div>
            <div className="middleStepText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              libero illo non ipsa eum.
            </div>
          </div>
          <div className="middleStepItems">
            <div className="middleStepHead">Step 1</div>
            <div className="middleStepText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              libero illo non ipsa eum.
            </div>
          </div>
          <div className="middleStepItems">
            <div className="middleStepHead">Step 1</div>
            <div className="middleStepText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              libero illo non ipsa eum.
            </div>
          </div>
        </div>
      </div>
      <div className="headerBottom">
        <div className="bottomTextHeading">Note</div>
        <ul className="noteList">
          <li className="noteItem">
            <span className="listDot"></span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            est in laudantium earum
          </li>
          <li className="noteItem">
          <span className="listDot"></span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            est in laudantium earum
          </li>
        </ul>
      </div>
    </div>
  );
}
