import React, { Component } from 'react';
import axios from 'axios'
import './ContactMe.css'
class ContactMe extends Component {
    state={
        name:'',
        email:'',
        subject:'',
        message:'',
        sent:false
    }

    handleName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handleEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    handleSubject=(e)=>{
        this.setState({
            subject:e.target.value
        })
    }
    handleMessage=(e)=>{
        this.setState({
            message:e.target.value
        })
    }

    formSubmit=(e)=>{
        e.preventDefault()

        let data={
            name:this.state.name,
            email:this.state.email,
            subject:this.state.subject,
            message:this.state.message
        }

        axios.post('/contact/api/form',data)
        .then(res=>{
            this.setState({
                sent:true
            },this.resetForm())
        })
        .catch(()=>{
            console.log('Message not sent')
        })
    }

    resetForm=()=>{
        this.setState({
            name:'',
            email:'',
            subject:'',
            message:''
        })
        setTimeout(()=>{
            this.setState({
                sent:false
            })
        },3000)
    }

    render() {
        return (
            <div>
                 <section class="contact" id="contact">
    <div class="max-width">
        <h2 class="title">Contact me</h2>
        <div class="contact-content">
            <div class="column left">
                <div class="text">Get in Touch</div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
                <div class="icons">
                    <div class="row">
                        <i class="fa fa-user"></i>
                        <div class="info">
                            <div class="head">Name</div>
                            <div class="sub-title">Ispahan Rahman</div>
                        </div>
                    </div>
                    <div class="row">
                        <i class="fa fa-map-marker"></i>
                        <div class="info">
                            <div class="head">Address</div>
                            <div class="sub-title">Goshpara, Thakurgaon ,Bangladesh</div>
                        </div>
                    </div>
                    <div class="row">
                        <i class="fa fa-envelope"></i>
                        <div class="info">
                            <div class="head">Email</div>
                            <div class="sub-title">ispahanrahman133@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column right">
                <div class="text">Message me</div>
                <form onSubmit={this.formSubmit}>
                    <div class="fields">
                        <div class="field name">
                            <input
                             type="text" 
                             placeholder="Name"
                             name='name'
                             onChange={this.handleName}
                             value={this.state.name}
                             required/>
                        </div>
                        <div class="field email">
                            <input
                             type="email"
                             placeholder="Email"
                             name='email'
                             onChange={this.handleEmail}
                             value={this.state.email}
                              required/>
                        </div>
                    </div>
                    <div class="field">
                        <input
                         type="text"
                          placeholder="Subject"
                          name='subject'
                          onChange={this.handleSubject}
                          value={this.state.subject}
                           required/>
                    </div>
                    <div class="field textarea">
                        <textarea cols="30" rows="10" placeholder="Message.."
                        name='message'
                        onChange={this.handleMessage}
                        value={this.state.message}
                         required></textarea>
                    </div>
                    <div className={this.state.sent?'msg msgAppear':'msg'}>
                        Message has been sent
                    </div>

                    <div class="button">
                        <button  type="submit">Send message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
            </div>
        );
    }
}

export default ContactMe;