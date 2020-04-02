import * as React from "react"
import "./Avater.css"

type AvaterProps = {
	uuid: string
	hiddenName: boolean
}

type AvaterState = {
	name: string
	picurl: string
	is_loaded: boolean
}

class Avater extends React.Component<AvaterProps, AvaterState> {
	
	static defaultProps = {
    hiddenName: false,
  };	

	constructor(props: AvaterProps){
		super(props)
		this.setState({
			is_loaded: false
		})
	}

	componentWillMount() {
		// TODO: ここでAPIをぶっ叩く
		this.setState({
			name: this.props.uuid,
			picurl: `${process.env.PUBLIC_URL}/higuchi.png`,
			is_loaded: true
		});
	}

	render() {
		
		if(!this.state.is_loaded){
			return (<></>)
		}
		
		var nameElement = (<></>)

		if(!this.props.hiddenName){
			nameElement = (
				<span className="avater-name">
					{this.state.name}
				</span>
			)
		}

		return (
			<span className="avater-wrapper">
				<span className="avater-pic">
					<img src={this.state.picurl} alt={this.state.name + "'s icon"} height="24" />
				</span>
				{nameElement}
			</span>
		)
	}

}

export default Avater;
