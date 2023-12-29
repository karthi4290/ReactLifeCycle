import UserClass from "./UserClass";
import React from 'react';


class About extends React.Component{
constructor(props){
  super(props)
  console.log('parent constructor')
}

  componentDidMount() {
    console.log(' parent component didMount');
  }
render(){
  console.log('parent render')
  return (
    <>
      <UserClass name={'karthik class'} location={'India class'} />
      {/* <UserClass name={'karthik class 2'} location={'India class 2'} /> */}
    </>
  )
}

}


export default About;