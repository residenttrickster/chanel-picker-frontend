import React from 'react';

class BagsCard extends React.Component {

    state = {
        likes: this.props.likes
    }

handleUpdateLikes = () => {
    this.setState({
        likes: this.state.likes + 1
    })
    }

    render() {
        const { image, description, style} = this.props
        const { likes } = this.state
        return (
            <div className="bag">
                <img src={image} alt={description} width="550"  /> 
                    <p>Description: {description} </p>
                    <p>Style: {style} </p>
                    <button onClick={this.handleUpdateLikes}> {likes} <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/heavy-black-heart_2764.png" alt="heart" width="10" height="10" /> </button>
                </div>
        )
    }

}

export default BagsCard 