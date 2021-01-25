import react, {Component} from 'react'
import { useParams } from 'react-router-dom';
//import './Form.css';

class Form extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            username:'',
            comments:' ',
            topic: 'rezervacija'
        }
    }

    handleUsernameChange = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange =  event => {
         this.setState({
             comments: event.target.value
         })
    }

    handleTopicChange = event =>{
         this.setState({
              topic: event.target.value
         })
    }

    handleSubmit = event => {
         alert(`${ this.state.username}${this.state.comments}${this.state.topic }`)
    }

    render(){
        return(
            <form className="forma" onSubmit={this.handleSubmit}>
                <div className="username">
                    <label>Korisnicko ime</label>
                    <input type='text' value = {this.state.username}
                        onChange={this.handleUsernameChange}/>
                </div>
                <div className="comments">
                    <label>Komentari </label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}> </textarea>
                </div>
                <div>
                    <label>Naslov</label>
                    <select value ={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="rezervacija">Rezervacija</option>
                        <option value="konsultacije">Konsultacije</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }

    

    
}



export default Form;