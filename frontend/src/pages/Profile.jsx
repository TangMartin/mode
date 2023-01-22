import { Chart } from "../components/Chart/Chart";
import { data } from "../components/Slider/data";
import { Slider } from "../components/Slider/slider";
import "./Profile.css";

export const ProfilePage = () => {
  return (
    <div className="main__container">
      <div className="profile__container ">
        <div className="profile__header">.</div>
        <div class="widgetlist ">
          <div class="col profile-transactions ">
            <div className="transactions-container">
              <div className="mode-header"> Mode</div>
              <div className="welcome-title">Welcome, Jane</div>
              <div className="subtitle-text">
                Here are some of your recent transactions you have completed :
              </div>
              <div className="transations-container">
                <div className="rule-line">
                  <hr />
                </div>
                <div className="transaction">
                  <div className="transaction-status">Requested</div>
                  <div className="transaction-item-name">Beige Shirt</div>
                  <div className="transaction-link">View</div>
                </div>
                <div className="rule-line">
                  <hr />
                </div>
                <div className="transaction">
                  <div className="transaction-status">Pending</div>
                  <div className="transaction-item-name">Green Zara Shirt</div>
                  <div className="transaction-link">Respond</div>
                </div>
                <div className="rule-line">
                  <hr />
                </div>
                <div className="transaction">
                  <div className="transaction-status">Jan 21</div>
                  <div className="transaction-item-name">Red Shirt</div>
                  <a href="https://testnets.opensea.io/assets/goerli/0xc338b5b660e8a656fa92e362acac49f785cf39f5/7426"><div className="transaction-link">View</div></a>
                </div>
                <div className="rule-line">
                  <hr />
                </div>
                <div className="transaction-view-all">
                  <div className="transaction-link-view-all">
                    {"View More > "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-long profile-impact ">
            <Chart />
          </div>
          <div class="col-tall profile-wardrobe ">
            <div className="slider-container">
              <div className="wardrobe-title">Wardrobe</div>
              <Slider data={data} activeSlide={2} />
            </div>
          </div>
          <div className="footer">.</div>
        </div>
      </div>
    </div>
  );
};
