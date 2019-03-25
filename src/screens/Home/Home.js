import React from "react";
import homeStyles from "./Home.module.scss";
// Global Styles, imported only once, folder not under css modules, so styles can be used in any file
// import globalStyles from "../../styles/globalStyles.scss";
// import RightMenu from "../../routing/RightMenu";
import HomePage from "../HomePage/HomePage";

class Home extends React.Component {
    render() {
        return (
            <div className={homeStyles.container}>
                <div className={homeStyles.mainStyle}>
                    <HomePage />
                </div>
            </div>
        );
    }
}

export default Home;
