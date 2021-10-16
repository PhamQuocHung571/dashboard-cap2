import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const Background = styled.div`
  background: linear-gradient(135deg, rgba(34,193,195,1) 0%,     
  rgba(253,187,45,1) 100%);
  height: 100vh;
  padding-top: 50px;
`;
// const Login = styled.div`
//   display: inline-block;
// `;
const Container = styled.div`
  width: 400px;
  height: 500px;
  margin: 0 auto;
  background-color: #BDE2CC;
  border-radius: 10px;
  padding-top: 20px;
`;
const Input = styled.input`
  width:  320px;
  height: 30px;
  border-radius: 5px;
`;

const Login_content = styled.div`
  Padding: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  max-width: 100%;
`;
const Text_login = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  padding-top: 10px;
`;
const Login_input = styled.div`
  margin: 7px 0;
  width: 80%;
  box-sizing: border-box;
  border: none;
  font-size: 1.3rem;
  transition: box-shadow 0.2s ease-in;
`;
const Custom = styled.div`
  position: relative;
`;
// const I = styled.i`
//   position: absolute;
//   right: 5px;
//   top: 10px;
//   cursor: pointer;
// `;
const Button = styled.button`

  width: 300px;
  height: 30px;
  margin: 20px 20px 30px 35px;
  border-radius: 15px;
  outline: none;
  border: none;
  background: linear-gradient(135deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
  color: white;
  cursor: pointer;
  transition: opacity 0.25s ease-out;
  &:hover{
    opacity: 0.8;
  }
`;
const Register = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: #000;
  cursor: pointer;
  transition: opacity 0.25s ease-out;
  &:hover{
    opacity: 0.8;
}
`;
class Login extends Component{
  constructor(props){
      super(props);
      this.state = {
        username: '',
        password: '',
        isShowPassword: false
      }
  }

handleOnchangeUsername = (event) =>{
  this.setState({
    username: event.target.value
  })
}
handleOnchangePassword = (event) =>{
  this.setState({
    password: event.target.value
  })
}
handleLogin = () =>{
  console.log ('username: ', this.state.username, 'password: ', this.state.password)
  console.log('all state: ', this.state)
}
handleOnchangeShowHidePassword = () =>{
  this.setState({
    isShowPassword: !this.state.isShowPassword
  })
}
render(){

    return (
      
      <Background>
        <Container>
          <Login_content>
    
            <Text_login>Login</Text_login>
            <br/>

            <Login_input>
              <label>Username </label>
              <br />
              <Input 
                type='text'  
                placeholder="  @username"
                value = {this.state.username}
                onChange = {(event) => this.handleOnchangeUsername(event)}
              />
            </Login_input>

            <Login_input>
              <label>Password </label>
              <br />
              <Custom>
                <Input 
                  type= {this.state.isShowPassword ? 'text' : 'password'}
                  placeholder="  @password"
                  onChange = {(event) => this.handleOnchangePassword(event)}
                />
                {/* <span
                onClick = {() => {this.handleOnchangeShowHidePassword()}}
                >
                <i class={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash' }></i>
                </span> */}
              </Custom>
            </Login_input>
            <br/>

            <div className="custom-checkbox">
              <input type="checkbox" id="checkbox-1-1" class="custom-checkbox" />
              <label for="checkbox-1-1"> Keep me Signed in</label>
            </div>

            <div className="col-12">
              <Button onClick={()=> {this.handleLogin()}}>Login</Button>
            </div>
            <br /> <br />
            {/* <Register>
              Register new account
            </Register> */}
      
          </Login_content>
        </Container>
      </Background>
    );
  }
}

export default Login;
