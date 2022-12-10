import NavBar from "../custom-components/NavBar";
import { Authenticator } from "@aws-amplify/ui-react";
import React, { Component, Profiler } from "react";
import {
  Grid,
  Header,
  Form,
  Button,
  Message,
  Input,
  Segment,
  Select,
} from "semantic-ui-react";
import { Auth } from "aws-amplify";
import Amplify from "aws-amplify";
import aws_exports from "../aws-exports";
Amplify.configure(aws_exports);

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
  { key: "NotSpecified", text: "Prefer not to say", value: "NotSpecified" },
];

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authState: this.props.authState,
      email: "",
      given_name: "",
      family_name: "",
      birthdate: "",
      gender: "",
    };
  }

  componentDidMount() {
    this.findUser();
  }

  findUser() {
    Auth.currentAuthenticatedUser({ bypassCache: true })
      .then((user) => {
        this.setState({
          authData: user,
          authState: "signedIn",

          email: user.attributes.email ? user.attributes.email : "",
          given_name: user.attributes.given_name
            ? user.attributes.given_name
            : "",
          family_name: user.attributes.family_name
            ? user.attributes.family_name
            : "",
          birthdate: user.attributes.birthdate ? user.attributes.birthdate : "",

          stateFromStorage: true,
        });

        console.log(this.state.authData.nickname);
      })
      .catch((e) => {
        this.setState({ authState: "signIn" });
      });
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    Auth.updateUserAttributes(this.state.authData, {
      email: this.state.email,
      given_name: this.state.given_name,
      family_name: this.state.family_name,
      birthdate: this.state.birthdate,
    }).catch((e) => {
      console.log("Error updating user: ");
      console.log(e);
    });
  };

  render() {
    let loading = true;
    if (this.state.authData) {
      loading = false;
    }

    const { username, email, given_name, family_name, birthdate } = this.state;

    return (
      <>
        <Authenticator>
          {({ user }) => (
            <>
              <NavBar />
              <Segment color="blue">
                <Grid padded>
                  <Grid.Column>
                    <Header as="h1">Account Information</Header>
                    <p>Please update your details.</p>

                    <Form onSubmit={this.handleSubmit} loading={loading}>
                      <Form.Group>
                        <Form.Input label="email" value={email} width={10} />
                      </Form.Group>

                      <Form.Group>
                        <Form.Input
                          name="given_name"
                          value={given_name}
                          label="First name"
                          placeholder="First Name"
                          width={6}
                          onChange={this.handleChange}
                          error={false}
                        />

                        <Form.Input
                          name="family_name"
                          value={family_name}
                          label="Last Name"
                          placeholder="Last Name"
                          width={6}
                          onChange={this.handleChange}
                          error={false}
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Input
                          name="birthdate"
                          value={birthdate}
                          label="Birthday"
                          placeholder="02/02/2002"
                          width={4}
                          onChange={this.handleChange}
                          error={false}
                        />
                      </Form.Group>

                      <button type="submit">Submit</button>
                    </Form>
                  </Grid.Column>
                </Grid>
              </Segment>
            </>
          )}
        </Authenticator>
      </>
    );
  }
}
export default Profile;
