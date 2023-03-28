import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      info: {
        fname: "Not Found",
        location: "Not Here",
      },
    };
    this.timer = setInterval(() => {
      console.log("Count");
    }, 1000);
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Kalpesh1012");
    const json = await data.json();
    this.setState({ info: json });
    console.log(this.state.info);
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <div className="ml-[600px] mt-4 h-80 w-56 border-2 border-cyan-700">
          <h1 className="font-bold ml-10">Owner Details</h1>
          <img src={this.state.info.avatar_url} className="mt-1 " />
          <h2 className="mt-1  ml-5">Name:{this.state.info.name}</h2>
          <h3 className="mt-1 ml-5">City:{this.state.info.location}</h3>
        </div>
      </>
    );
  }
}
export default Profile;
