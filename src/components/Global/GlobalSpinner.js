import React from "react";
// import colors from "../../colors/colors.styl";
import { ClipLoader } from "react-spinners";

class GlobalSpinner extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="sweetLoading">
                    <ClipLoader
                        // color={colors.spinner}
                        size={32}
                        loading={this.props.showSpinner ? this.props.showSpinner : false}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default GlobalSpinner;
