import { Component } from "react";

import "./index.css";

class Home extends Component {
  state = {
    imageLargeUrl: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    gender: "",
  };
  componentDidMount = () => {
    this.getApiCall();
  };

  getApiCall = async () => {
    const url = "https://randomuser.me/api/?page=1&results=1&seed=abc";
    const options = {
      method: "GET",
    };

    const response = await fetch(url, options);
    const data = await response.json();
    const { results } = data;
    const { gender, name, picture, phone } = results[0];
    console.log(results);
    console.log(gender, name, picture, phone);
    this.setState({
      gender: gender,
      phoneNumber: phone,
      imageLargeUrl: picture.large,
      firstName: name.first,
      lastName: name.last,
    });
  };

  render() {
    const {
      gender,
      phoneNumber,
      firstName,
      lastName,
      imageLargeUrl,
    } = this.state;
    return (
      <div className="head-con">
        <div className="fir-con">
          <div className="sec-con">
            <div className="third-con">
              <img className="large-image" src={imageLargeUrl} alt="large" />
            </div>

            <div className="fourth-con">
              <div className="fifth-con">
                <p className="para">{firstName}</p>
                <p className="para">{lastName}</p>
              </div>
              <p className="para">{gender}</p>
              <p className="para">{phoneNumber}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
