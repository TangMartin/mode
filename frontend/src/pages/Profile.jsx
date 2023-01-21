import "./Profile.css";

export const profilePage = () => {
  return (
    <div className="main__container">
      <div className="profile__menubar"></div>
      <div className="profile__container ">
        <div className="profile__transactions"></div>
        <div className="profile__impact"></div>
        <div className="profile__wardrobe"></div>
      </div>
    </div>
  );
};
