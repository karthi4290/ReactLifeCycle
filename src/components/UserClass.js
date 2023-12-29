import React from 'react';



class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           userInfo:{
            name:'InitialName',
            location:'InitialLocation',
            avatar_url:'InitialAvatarUrl'
           }
        }

     
        console.log('child constructor');


    }
    async componentDidMount(){
        //api
        const data = await fetch('https://api.github.com/users/karthi4290');
        const json =  await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        })
       
        console.log('child api data didmount');
    }

    componentDidUpdate(){
        console.log('child component didUpdate')
    }

    componentWillUnmount() {
        console.log('child component unmount')
    }
    render() {
        console.log('child render')
        // const { name, location } = this.props
        const { name, location, avatar_url } = this.state.userInfo;
      
     
        return (
            <div >
                <h2>Name:{name}</h2>
                <h3>Location:{location||'India'}</h3>
                <img src={avatar_url}/>
                <h4>Contact:karthikreddo@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;