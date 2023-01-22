import "./Profile.css";

export const ProfilePage = () => {
  return (
    <div className="main__container">
      <div className="profile__container ">
        <div className="profile__title"> Profile </div>
        <div class="widgetlist ">
          <div class="col profile-transactions "></div>
          <div class="col-long profile-impact "></div>
          <div class="col-tall "></div>
        </div>
      </div>
    </div>
  );
};
