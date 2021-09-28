import React, { Component } from "react";
import axios from "axios";
import "./Profile.css";

const API_URL = "https://611f263e9771bf001785c72a.mockapi.io/crud";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userId: this.props.match.params.id,
    };
  }
  // function to get userdata
  fetchUsers = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/${this.state.userId}`);
      this.setState({ users: data });
      console.log(data);
    } catch (err) {
      console.error("Error Fetching data from server", err);
    }
  };
  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="card profile mt-3">
          {/* User-profile-details */}
          <div className="card-body">
            <h2 className="text-center">User-Profile</h2>
            <img className="ml-5 mb-2" src={this.state.users.avatar} alt="" />
            <p>
              <b>Name : </b> {this.state.users.name}
            </p>
            <p>
              <b>Email : </b> {this.state.users.email}
            </p>
            <p>
              <b>Phone : </b> {this.state.users.phone}
            </p>
            <p>
              <b>Company : </b> {this.state.users.company}
            </p>
            <p>
              <b>Country : </b> {this.state.users.country}
            </p>
            <p>
              <b>City : </b> {this.state.users.city}
            </p>
            <p>
              <b>State : </b> {this.state.users.state}
            </p>
            <p>
              <b>Zip-code : </b> {this.state.users.zipcode}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
